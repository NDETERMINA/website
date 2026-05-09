"use client";

import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const FRAME_SELECTOR = "[data-spirit-frame]";
const DEFAULT_SOURCE_LENGTH = 96;
const MOBILE_SOURCE_LENGTH = 58;
const ROUTE_CORNER_RADIUS = 18;

type Point = {
  x: number;
  y: number;
};

type RouteFrame = {
  id: number;
  className: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  priority: number;
  area: number;
};

type RouteGroup = {
  primary: RouteFrame;
  branches: RouteFrame[];
};

type RouteSegment = {
  from: Point;
  to: Point;
  length: number;
};

type BranchRoute = {
  id: string;
  pathD: string;
  length: number;
  convergeDistance: number;
  sourceLength: number;
};

type SpiritState = {
  pathD: string;
  pathLength: number;
  sourceLength: number;
  branches: BranchRoute[];
  firstTop: number;
  lastBottom: number;
  viewportWidth: number;
  viewportHeight: number;
  visible: boolean;
};

type Route = {
  points: Point[];
  segments: RouteSegment[];
  totalLength: number;
};

const hiddenState: SpiritState = {
  pathD: "",
  pathLength: 0,
  sourceLength: DEFAULT_SOURCE_LENGTH,
  branches: [],
  firstTop: 0,
  lastBottom: 1,
  viewportWidth: 1,
  viewportHeight: 1,
  visible: false
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function distanceBetween(from: Point, to: Point) {
  return Math.hypot(to.x - from.x, to.y - from.y);
}

function moveToward(from: Point, to: Point, distance: number) {
  const segmentLength = distanceBetween(from, to);

  if (segmentLength === 0) {
    return { ...from };
  }

  const ratio = clamp(distance / segmentLength, 0, 1);

  return {
    x: from.x + (to.x - from.x) * ratio,
    y: from.y + (to.y - from.y) * ratio
  };
}

function formatPoint(point: Point) {
  return `${Math.round(point.x * 10) / 10} ${Math.round(point.y * 10) / 10}`;
}

function getFramePriority(element: HTMLElement) {
  if (element.dataset.spiritTerminal !== undefined) {
    return 4;
  }

  if (
    element.classList.contains("workbench") ||
    element.classList.contains("hero-console")
  ) {
    return 3;
  }

  if (
    element.classList.contains("hero-proof-strip-card") ||
    element.classList.contains("benefit-card") ||
    element.classList.contains("data-card")
  ) {
    return 2;
  }

  return 1;
}

function isBranchableFrame(frame: RouteFrame) {
  return (
    frame.className.includes("hero-proof-strip-card") ||
    frame.className.includes("benefit-card") ||
    frame.className.includes("data-card")
  );
}

function readCandidateFrames(): RouteFrame[] {
  const scrollTop = window.scrollY;
  const viewportWidth = window.innerWidth;

  return Array.from(document.querySelectorAll<HTMLElement>(FRAME_SELECTOR))
    .map((element, id) => {
      const rect = element.getBoundingClientRect();
      const top = rect.top + scrollTop;
      const left = rect.left;
      const width = rect.width;
      const height = rect.height;

      return {
        id,
        className: element.className,
        top,
        left,
        right: left + width,
        bottom: top + height,
        width,
        height,
        priority: getFramePriority(element),
        area: width * height
      };
    })
    .filter((frame) => {
      const enoughSize = frame.width > 42 && frame.height > 34;
      const inPage = frame.right > 0 && frame.left < viewportWidth;

      return enoughSize && inPage;
    })
    .sort((a, b) => a.top - b.top || a.left - b.left);
}

function choosePrimaryFrame(group: RouteFrame[]) {
  const branchableFrames = group.filter(isBranchableFrame);

  if (branchableFrames.length >= 2 && branchableFrames.length <= 4) {
    const rowTop = Math.min(...branchableFrames.map((frame) => frame.top));
    const rowBottom = Math.max(...branchableFrames.map((frame) => frame.bottom));
    const rowLooksTight = rowBottom - rowTop < 180;

    if (rowLooksTight) {
      const viewportCenter = window.innerWidth / 2;

      return [...branchableFrames].sort((a, b) => {
        const aCenter = a.left + a.width / 2;
        const bCenter = b.left + b.width / 2;

        return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
      })[0];
    }
  }

  const [best] = [...group].sort(
    (a, b) => b.priority - a.priority || b.area - a.area || a.left - b.left
  );

  return best;
}

function selectRouteGroups(frames: RouteFrame[]) {
  const selected: RouteGroup[] = [];
  let group: RouteFrame[] = [];
  let groupBottom = -Infinity;

  const flushGroup = () => {
    if (!group.length) {
      return;
    }

    const primary = choosePrimaryFrame(group);
    const branchableFrames = group.filter(
      (frame) => frame.id !== primary.id && isBranchableFrame(frame)
    );
    const rowTop = Math.min(primary.top, ...branchableFrames.map((frame) => frame.top));
    const rowBottom = Math.max(primary.bottom, ...branchableFrames.map((frame) => frame.bottom));
    const useBranches =
      branchableFrames.length > 0 &&
      branchableFrames.length <= 3 &&
      isBranchableFrame(primary) &&
      rowBottom - rowTop < 180;

    selected.push({
      primary,
      branches: useBranches
        ? branchableFrames
            .sort((a, b) => {
              const aCenter = a.left + a.width / 2;
              const bCenter = b.left + b.width / 2;

              return Math.abs(aCenter - (primary.left + primary.width / 2)) -
                Math.abs(bCenter - (primary.left + primary.width / 2));
            })
            .slice(0, 3)
        : []
    });
    group = [];
    groupBottom = -Infinity;
  };

  frames.forEach((frame) => {
    if (!group.length || frame.top <= groupBottom - 16) {
      group.push(frame);
      groupBottom = Math.max(groupBottom, frame.bottom);
      return;
    }

    flushGroup();
    group.push(frame);
    groupBottom = frame.bottom;
  });

  flushGroup();

  return selected;
}

function addPoint(points: Point[], point: Point) {
  const previous = points.at(-1);

  if (
    previous &&
    Math.abs(previous.x - point.x) < 0.5 &&
    Math.abs(previous.y - point.y) < 0.5
  ) {
    return;
  }

  points.push(point);
}

function buildRoute(frames: RouteFrame[]): Route {
  const points: Point[] = [];

  frames.forEach((frame, index) => {
    const nextFrame = frames[index + 1];
    const previous = points.at(-1);
    const defaultEntryX = frame.left + Math.min(44, frame.width * 0.18);
    const entryX = previous ? clamp(previous.x, frame.left, frame.right) : defaultEntryX;

    if (previous) {
      if (previous.y > frame.top) {
        return;
      }

      addPoint(points, { x: entryX, y: previous.y });
      addPoint(points, { x: entryX, y: frame.top });
    } else {
      addPoint(points, { x: entryX, y: frame.top });
    }

    const nextCenterX = nextFrame
      ? nextFrame.left + nextFrame.width / 2
      : frame.right - Math.min(44, frame.width * 0.18);
    const sideX = nextCenterX >= entryX ? frame.right : frame.left;
    const exitX = clamp(nextCenterX, frame.left, frame.right);

    addPoint(points, { x: sideX, y: frame.top });
    addPoint(points, { x: sideX, y: frame.bottom });
    addPoint(points, { x: exitX, y: frame.bottom });
  });

  const segments = points.slice(1).map((point, index) => {
    const from = points[index];
    const to = point;

    return {
      from,
      to,
      length: distanceBetween(from, to)
    };
  });

  return {
    points,
    segments,
    totalLength: segments.reduce((sum, segment) => sum + segment.length, 0)
  };
}

function routeLength(points: Point[]) {
  return points.slice(1).reduce((sum, point, index) => sum + distanceBetween(points[index], point), 0);
}

function distanceAlongRoute(route: Route, target: Point) {
  let travelled = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  let bestTravelled = 0;

  route.segments.forEach((segment) => {
    const dx = segment.to.x - segment.from.x;
    const dy = segment.to.y - segment.from.y;
    const segmentLengthSquared = dx * dx + dy * dy;
    const ratio =
      segmentLengthSquared === 0
        ? 0
        : clamp(
            ((target.x - segment.from.x) * dx + (target.y - segment.from.y) * dy) /
              segmentLengthSquared,
            0,
            1
          );
    const projected = {
      x: segment.from.x + dx * ratio,
      y: segment.from.y + dy * ratio
    };
    const projectionDistance = distanceBetween(projected, target);

    if (projectionDistance < bestDistance) {
      bestDistance = projectionDistance;
      bestTravelled = travelled + segment.length * ratio;
    }

    travelled += segment.length;
  });

  return bestTravelled;
}

function buildBranchPath(branchFrame: RouteFrame, convergence: Point) {
  const branchCenter = branchFrame.left + branchFrame.width / 2;
  const movesRight = branchCenter < convergence.x;
  const startX = movesRight
    ? branchFrame.left + Math.min(40, branchFrame.width * 0.22)
    : branchFrame.right - Math.min(40, branchFrame.width * 0.22);
  const edgeX = movesRight ? branchFrame.right : branchFrame.left;
  const convergenceY = Math.max(branchFrame.top, convergence.y);
  const points = [
    { x: startX, y: branchFrame.top },
    { x: edgeX, y: branchFrame.top },
    { x: edgeX, y: convergenceY },
    { x: convergence.x, y: convergenceY }
  ];

  return {
    pathD: pathFromPoints(points, Math.max(10, ROUTE_CORNER_RADIUS * 0.72)),
    length: Math.max(1, routeLength(points))
  };
}

function buildBranchRoutes(groups: RouteGroup[], route: Route, sourceLength: number) {
  return groups.flatMap((group, groupIndex) => {
    if (!group.branches.length) {
      return [];
    }

    const primary = group.primary;
    const convergence = {
      x: clamp(primary.left + primary.width / 2, primary.left, primary.right),
      y: primary.top
    };
    const convergeDistance = distanceAlongRoute(route, convergence);

    return group.branches.map((branchFrame) => {
      const branchPath = buildBranchPath(branchFrame, convergence);

      return {
        id: `${groupIndex}-${branchFrame.id}`,
        pathD: branchPath.pathD,
        length: branchPath.length,
        convergeDistance,
        sourceLength: Math.min(sourceLength * 0.76, Math.max(34, branchPath.length * 0.42))
      };
    });
  });
}

function pathFromPoints(points: Point[], cornerRadius: number) {
  if (!points.length) {
    return "";
  }

  if (points.length === 1) {
    return `M ${formatPoint(points[0])}`;
  }

  const commands = [`M ${formatPoint(points[0])}`];

  for (let index = 1; index < points.length - 1; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const next = points[index + 1];
    const previousLength = distanceBetween(previous, current);
    const nextLength = distanceBetween(current, next);
    const radius = Math.min(cornerRadius, previousLength / 2, nextLength / 2);
    const beforeCorner = moveToward(current, previous, radius);
    const afterCorner = moveToward(current, next, radius);

    commands.push(`L ${formatPoint(beforeCorner)}`);
    commands.push(`Q ${formatPoint(current)} ${formatPoint(afterCorner)}`);
  }

  commands.push(`L ${formatPoint(points[points.length - 1])}`);

  return commands.join(" ");
}

function shouldUpdateState(previous: SpiritState, next: SpiritState) {
  return (
    previous.visible !== next.visible ||
    previous.pathD !== next.pathD ||
    previous.branches.length !== next.branches.length ||
    previous.branches.some((branch, index) => {
      const nextBranch = next.branches[index];

      return (
        !nextBranch ||
        branch.pathD !== nextBranch.pathD ||
        Math.abs(branch.length - nextBranch.length) > 0.4 ||
        Math.abs(branch.convergeDistance - nextBranch.convergeDistance) > 0.4 ||
        Math.abs(branch.sourceLength - nextBranch.sourceLength) > 0.4
      );
    }) ||
    Math.abs(previous.pathLength - next.pathLength) > 0.4 ||
    Math.abs(previous.sourceLength - next.sourceLength) > 0.4 ||
    Math.abs(previous.firstTop - next.firstTop) > 0.4 ||
    Math.abs(previous.lastBottom - next.lastBottom) > 0.4 ||
    previous.viewportWidth !== next.viewportWidth ||
    previous.viewportHeight !== next.viewportHeight
  );
}

function BranchLight({
  branch,
  sourceDistance
}: {
  branch: BranchRoute;
  sourceDistance: MotionValue<number>;
}) {
  const branchDashOffset = useTransform(sourceDistance, (value) => {
    const startDistance = Math.max(0, branch.convergeDistance - branch.length);
    const progress = clamp(value - startDistance, 0, branch.length);

    return -Math.max(0, progress - branch.sourceLength * 0.24);
  });
  const branchCoreDashOffset = useTransform(sourceDistance, (value) => {
    const startDistance = Math.max(0, branch.convergeDistance - branch.length);
    const progress = clamp(value - startDistance, 0, branch.length);

    return -Math.max(0, progress - branch.sourceLength * 0.14);
  });
  const branchOpacity = useTransform(sourceDistance, (value) => {
    const startDistance = Math.max(0, branch.convergeDistance - branch.length);
    const fadeIn =
      startDistance === 0
        ? 1
        : clamp((value - startDistance) / Math.max(1, branch.sourceLength * 0.6), 0, 1);
    const fadeOut = clamp(
      (branch.convergeDistance + branch.sourceLength * 0.65 - value) /
        Math.max(1, branch.sourceLength * 0.65),
      0,
      1
    );

    return Math.min(fadeIn, fadeOut);
  });

  return (
    <motion.g style={{ opacity: branchOpacity }}>
      <path className="homepage-border-spirit__branch-path" d={branch.pathD} />
      <motion.path
        className="homepage-border-spirit__branch-source"
        d={branch.pathD}
        style={{
          strokeDasharray: `${branch.sourceLength} ${branch.length}`,
          strokeDashoffset: branchDashOffset
        }}
      />
      <motion.path
        className="homepage-border-spirit__branch-source-core"
        d={branch.pathD}
        style={{
          strokeDasharray: `${branch.sourceLength * 0.56} ${branch.length}`,
          strokeDashoffset: branchCoreDashOffset
        }}
      />
    </motion.g>
  );
}

export function HomepageBorderSpirit() {
  const { scrollY } = useScroll();
  const smoothedScrollY = useSpring(scrollY, {
    stiffness: 230,
    damping: 40,
    mass: 0.22,
    restDelta: 0.08
  });
  const routeRequest = useRef<number | null>(null);
  const [state, setState] = useState<SpiritState>(hiddenState);
  const routeY = useTransform(scrollY, (value) => -value);
  const sourceDistance = useTransform(smoothedScrollY, (value) => {
    const span = Math.max(1, state.lastBottom - state.firstTop);
    const progress = clamp(
      (value + state.viewportHeight * 0.58 - state.firstTop) / span,
      0,
      1
    );

    return state.pathLength * progress;
  });
  const sourceDashOffset = useTransform(sourceDistance, (value) =>
    -Math.max(0, value - state.sourceLength * 0.3)
  );
  const sourceCoreDashOffset = useTransform(sourceDistance, (value) =>
    -Math.max(0, value - state.sourceLength * 0.18)
  );

  const readRoute = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const groups = selectRouteGroups(readCandidateFrames());
    const frames = groups.map((group) => group.primary);

    if (!frames.length) {
      setState((previous) => (previous.visible ? hiddenState : previous));
      return;
    }

    const route = buildRoute(frames);

    if (!route.points.length || route.totalLength <= 0) {
      setState((previous) => (previous.visible ? hiddenState : previous));
      return;
    }

    const firstFrame = frames[0];
    const lastFrame = frames.at(-1) ?? firstFrame;
    const sourceLength = window.innerWidth < 768 ? MOBILE_SOURCE_LENGTH : DEFAULT_SOURCE_LENGTH;
    const nextState: SpiritState = {
      pathD: pathFromPoints(route.points, ROUTE_CORNER_RADIUS),
      pathLength: Math.max(1, route.totalLength),
      sourceLength,
      branches: buildBranchRoutes(groups, route, sourceLength),
      firstTop: firstFrame.top,
      lastBottom: lastFrame.bottom,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      visible: true
    };

    setState((previous) => (shouldUpdateState(previous, nextState) ? nextState : previous));
  }, []);

  const scheduleReadRoute = useCallback(() => {
    if (typeof window === "undefined" || routeRequest.current !== null) {
      return;
    }

    routeRequest.current = window.requestAnimationFrame(() => {
      routeRequest.current = null;
      readRoute();
    });
  }, [readRoute]);

  useMotionValueEvent(scrollY, "change", () => {
    if (!state.visible) {
      scheduleReadRoute();
    }
  });

  useEffect(() => {
    scheduleReadRoute();
    window.addEventListener("resize", scheduleReadRoute);
    window.addEventListener("orientationchange", scheduleReadRoute);

    document.fonts?.ready.then(scheduleReadRoute).catch(() => undefined);

    return () => {
      window.removeEventListener("resize", scheduleReadRoute);
      window.removeEventListener("orientationchange", scheduleReadRoute);

      if (routeRequest.current !== null) {
        window.cancelAnimationFrame(routeRequest.current);
      }
    };
  }, [scheduleReadRoute]);

  if (!state.visible) {
    return null;
  }

  return (
    <div className="homepage-border-spirit" aria-hidden="true">
      <svg className="homepage-border-spirit__svg" focusable="false">
        <defs>
          <linearGradient
            id="homepage-spirit-track"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={state.viewportWidth}
            y2={state.viewportHeight}
          >
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="38%" stopColor="#7c3aed" />
            <stop offset="70%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient
            id="homepage-spirit-source"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={state.viewportWidth}
            y2={state.viewportHeight}
          >
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="34%" stopColor="#8b5cf6" />
            <stop offset="68%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <motion.g style={{ y: routeY }}>
          <path className="homepage-border-spirit__path" d={state.pathD} />
          {state.branches.map((branch) => (
            <BranchLight key={branch.id} branch={branch} sourceDistance={sourceDistance} />
          ))}
          <motion.path
            className="homepage-border-spirit__source"
            d={state.pathD}
            style={{
              strokeDasharray: `${state.sourceLength} ${state.pathLength}`,
              strokeDashoffset: sourceDashOffset
            }}
          />
          <motion.path
            className="homepage-border-spirit__source-core"
            d={state.pathD}
            style={{
              strokeDasharray: `${state.sourceLength * 0.6} ${state.pathLength}`,
              strokeDashoffset: sourceCoreDashOffset
            }}
          />
          <motion.path
            className="homepage-border-spirit__source-glint"
            d={state.pathD}
            style={{
              strokeDasharray: `${state.sourceLength * 0.24} ${state.pathLength}`,
              strokeDashoffset: sourceCoreDashOffset
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
