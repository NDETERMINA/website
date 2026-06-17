import { PilotMapNoise } from "./pilot-map/pilot-map-noise";
import { PilotMapPaths } from "./pilot-map/pilot-map-paths";
import { PilotMapPins } from "./pilot-map/pilot-map-pins";
import { PilotMapRules } from "./pilot-map/pilot-map-rules";
import { PilotMapStamp } from "./pilot-map/pilot-map-stamp";

export function PilotRouteMap() {
  return (
    <svg className="pilot-route-map" viewBox="0 0 980 420" aria-hidden="true">
      <PilotMapRules />
      <PilotMapNoise />
      <PilotMapPaths />
      <PilotMapPins />
      <PilotMapStamp />
    </svg>
  );
}
