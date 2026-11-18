export function SpatialArtifact() {
  return (
    <div className="spatial-artifact" role="img" aria-label="Abstract spatial neural network">
      <div className="artifact-aura" />
      <div className="artifact-orbit artifact-orbit-one" />
      <div className="artifact-orbit artifact-orbit-two" />
      <div className="artifact-core">
        <svg viewBox="0 0 320 320" aria-hidden="true">
          <defs>
            <linearGradient id="artifact-stroke" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#06b6d4" />
              <stop offset=".52" stopColor="#818cf8" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>
            <radialGradient id="artifact-fill">
              <stop offset="0" stopColor="#6366f1" stopOpacity=".3" />
              <stop offset="1" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="160" r="118" fill="url(#artifact-fill)" />
          <g fill="none" stroke="url(#artifact-stroke)" strokeWidth="1.2">
            <path d="M160 35 262 96v128l-102 61L58 224V96z" />
            <path d="m160 35 0 250M58 96l204 128M262 96 58 224M58 96l102 64 102-64M58 224l102-64 102 64" opacity=".66" />
            <path d="m160 35 62 103-62 56-62-56zM160 285l-62-103 62-56 62 56z" opacity=".48" />
          </g>
          <g fill="#a5f3fc">
            <circle cx="160" cy="35" r="3" /><circle cx="262" cy="96" r="3" />
            <circle cx="262" cy="224" r="3" /><circle cx="160" cy="285" r="3" />
            <circle cx="58" cy="224" r="3" /><circle cx="58" cy="96" r="3" />
            <circle cx="160" cy="160" r="4" />
          </g>
        </svg>
      </div>
      <span className="artifact-label artifact-label-top">NEURAL / 01</span>
      <span className="artifact-label artifact-label-bottom">SPATIAL COMPUTE</span>
    </div>
  );
}
