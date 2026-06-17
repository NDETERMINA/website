const artifactPaths = [
  "M154 106 H410 C432 106 438 124 438 148 V210",
  "M160 300 H384 C418 300 438 282 438 250",
  "M190 440 H420 C438 440 454 418 454 380",
  "M816 116 H616 C584 116 564 142 564 202",
  "M824 296 H640 C606 296 570 286 566 258",
  "M812 440 H620 C590 440 566 404 560 350"
];

export function ArtifactPaths() {
  return (
    <>
      <g className="artifact-paths">
        {artifactPaths.map((path) => (
          <path key={path} d={path} />
        ))}
      </g>
      <g className="artifact-motion-tokens" aria-hidden="true">
        {artifactPaths.map((path, index) => (
          <circle key={`artifact-token-${path}`} r={index % 2 === 0 ? 4 : 3}>
            <animateMotion
              dur={`${6.8 + index * 0.35}s`}
              begin={`${index * 0.55}s`}
              repeatCount="indefinite"
              path={path}
            />
          </circle>
        ))}
      </g>
    </>
  );
}
