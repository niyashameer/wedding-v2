interface AndBannerProps {
  label: string;
}

export default function AndBanner({ label }: AndBannerProps) {
  return (
    <svg
      viewBox="0 0 80 26"
      width="80"
      height="26"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2,5 L2,21 L78,21 L78,5 L62,5 L66,13 L62,21"
        fill="#2c2416"
        opacity="0.85"
      />
      <polygon points="2,5 8,13 2,21" fill="#2c2416" opacity="0.85" />
      <text
        x="40"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="500"
        letterSpacing="2"
      >
        {label}
      </text>
    </svg>
  );
}
