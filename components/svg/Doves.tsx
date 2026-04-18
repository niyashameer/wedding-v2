export default function Doves() {
  return (
    <div
      className="absolute top-8 left-8 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="130"
        height="90"
        viewBox="0 0 130 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dove 1 — large */}
        <g className="dove-1 animate-float-dove">
          <ellipse cx="30" cy="22" rx="14" ry="7" fill="white" opacity="0.9" />
          <ellipse cx="23" cy="20" rx="7" ry="4" fill="white" opacity="0.9" />
          <polygon points="44,20 52,15 48,22" fill="white" opacity="0.85" />
          <polygon points="20,16 24,8 30,14" fill="white" opacity="0.8" />
          <circle cx="21" cy="19" r="2" fill="#ccc" opacity="0.6" />
        </g>

        {/* Dove 2 — medium */}
        <g className="dove-2 animate-float-dove-2">
          <ellipse cx="75" cy="47" rx="10" ry="5" fill="white" opacity="0.8" />
          <ellipse cx="69" cy="45" rx="5" ry="3" fill="white" opacity="0.8" />
          <polygon points="85,45 91,41 88,47" fill="white" opacity="0.75" />
          <polygon points="67,42 70,36 75,41" fill="white" opacity="0.7" />
          <circle cx="68" cy="44" r="1.5" fill="#ccc" opacity="0.5" />
        </g>

        {/* Dove 3 — small */}
        <g className="dove-3 animate-float-dove-3">
          <ellipse cx="105" cy="26" rx="7" ry="3.5" fill="white" opacity="0.7" />
          <ellipse cx="100" cy="25" rx="4" ry="2.5" fill="white" opacity="0.7" />
          <polygon points="112,24 118,21 115,26" fill="white" opacity="0.65" />
          <polygon points="98,22 101,17 105,22" fill="white" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
