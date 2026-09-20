// A document that lost its connection to everything else — reuses the same
// visual language as the Problem section's fragmentation illustration and
// the module connection diagrams (ink/border/accent only, no gold), so the
// 404 page still feels like part of the same system, not a generic error page.
const NotFoundIllustration = () => {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-xs"
      role="img"
      aria-hidden="true"
    >
      {/* Dashed broken connector, trailing off into nothing */}
      <path
        d="M120 110 L260 70"
        stroke="var(--color-border)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle cx="266" cy="68" r="3" fill="var(--color-border)" />

      {/* The document itself, slightly tilted, looking a little lost */}
      <g transform="translate(60 60) rotate(-6)">
        <rect
          width="90"
          height="112"
          rx="8"
          fill="var(--color-bg-primary)"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
        />
        <line
          x1="16"
          y1="26"
          x2="74"
          y2="26"
          stroke="var(--color-ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="40"
          x2="74"
          y2="40"
          stroke="var(--color-ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="54"
          x2="52"
          y2="54"
          stroke="var(--color-ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Question mark where it should be filed under */}
        <text
          x="45"
          y="94"
          textAnchor="middle"
          fontSize="28"
          fontWeight="700"
          fill="var(--color-accent)"
          fontFamily="inherit"
        >
          ?
        </text>
      </g>
    </svg>
  );
};

export default NotFoundIllustration;
