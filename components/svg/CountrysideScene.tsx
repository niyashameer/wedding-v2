export default function CountrysideScene() {
  return (
    <svg
      viewBox="0 0 700 220"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full max-w-[700px] mx-auto"
      aria-hidden="true"
    >
      {/* Sky wash */}
      <rect width="700" height="220" fill="#f0f4f8" opacity="0.4" />

      {/* Distant hills */}
      <ellipse cx="140" cy="170" rx="180" ry="60" fill="#c8d8b8" opacity="0.5" />
      <ellipse cx="560" cy="175" rx="200" ry="55" fill="#b8cc9e" opacity="0.45" />

      {/* Vineyard rows — left */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={`vine-l-${i}`}
          x={20 + i * 20}
          y={185 + i * 3}
          width={110 - i * 8}
          height="4"
          rx="2"
          fill="#7a8c6a"
          opacity={0.35 - i * 0.04}
        />
      ))}

      {/* Vineyard rows — right */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`vine-r-${i}`}
          x={480 + i * 22}
          y={186 + i * 3}
          width="90"
          height="4"
          rx="2"
          fill="#7a8c6a"
          opacity={0.3 - i * 0.04}
        />
      ))}

      {/* Main house body */}
      <rect x="260" y="120" width="90" height="65" fill="#e8d8a8" opacity="0.9" />
      {/* Roof tile band */}
      <rect x="255" y="115" width="100" height="12" fill="#c0734a" opacity="0.75" />
      {/* Roof triangle */}
      <polygon points="255,127 310,100 365,127" fill="#c0734a" opacity="0.6" />
      {/* Windows */}
      <rect x="270" y="135" width="15" height="18" fill="#b8d4e8" opacity="0.8" />
      <rect x="295" y="135" width="15" height="18" fill="#b8d4e8" opacity="0.8" />
      <rect x="320" y="135" width="15" height="18" fill="#b8d4e8" opacity="0.8" />
      {/* Door */}
      <rect x="294" y="158" width="20" height="27" fill="#8b6914" opacity="0.6" />

      {/* Side green building */}
      <rect x="358" y="130" width="60" height="55" fill="#8faa70" opacity="0.8" />
      <rect x="354" y="125" width="68" height="10" fill="#6a8050" opacity="0.6" />
      <rect x="366" y="145" width="12" height="16" fill="#b8d4e8" opacity="0.7" />
      <rect x="386" y="145" width="12" height="16" fill="#b8d4e8" opacity="0.7" />

      {/* Left annex */}
      <rect x="200" y="138" width="55" height="47" fill="#d4c48a" opacity="0.85" />
      <rect x="196" y="133" width="63" height="9" fill="#c0734a" opacity="0.5" />
      <rect x="208" y="150" width="12" height="14" fill="#b8d4e8" opacity="0.7" />

      {/* Palm / tall tree left */}
      <rect x="238" y="95" width="6" height="90" fill="#6b5533" opacity="0.6" rx="2" />
      <ellipse cx="241" cy="90" rx="18" ry="30" fill="#5a7a45" opacity="0.55" />

      {/* Cypress right */}
      <rect x="430" y="105" width="5" height="80" fill="#6b5533" opacity="0.5" rx="1" />
      <ellipse cx="432" cy="100" rx="12" ry="35" fill="#4a6835" opacity="0.6" />

      {/* Round tree far right */}
      <rect x="540" y="130" width="7" height="55" fill="#6b5533" opacity="0.45" rx="2" />
      <ellipse cx="543" cy="124" rx="26" ry="24" fill="#6a8c50" opacity="0.5" />

      {/* Ground */}
      <rect x="0" y="183" width="700" height="37" fill="#c8c890" opacity="0.3" />

      {/* Watercolour noise overlay */}
      <rect width="700" height="220" fill="url(#wc-noise)" opacity="0.06" />
      <defs>
        <filter id="wc-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
    </svg>
  );
}
