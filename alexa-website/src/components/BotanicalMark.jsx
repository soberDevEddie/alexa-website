// Simple line-art botanical mark used everywhere a real photograph will
// eventually go: the hero, product placeholders, and section dividers.
// `variant` (0-3) nudges the stem/petal layout so repeated placeholders
// don't look identical. Swap these usages for real photography later.
function Stem({ rotate = 0, scale = 1, x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M0 120 C 6 88, -4 60, 10 30 C 18 14, 14 4, 8 -10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M6 78 C -14 70, -26 78, -34 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M2 46 C 22 40, 32 48, 40 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="-34" cy="96" rx="14" ry="6" transform="rotate(-24 -34 96)" fill="currentColor" opacity="0.5" />
      <ellipse cx="40" cy="64" rx="15" ry="6.5" transform="rotate(22 40 64)" fill="currentColor" opacity="0.5" />
      <g transform="translate(8 -10)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-13"
            rx="6.5"
            ry="13"
            transform={`rotate(${deg})`}
            fill="currentColor"
            opacity="0.9"
          />
        ))}
        <circle r="4.5" fill="currentColor" opacity="1" />
      </g>
    </g>
  )
}

const LAYOUTS = [
  [{ rotate: -8, scale: 1, x: 0, y: 10 }],
  [
    { rotate: 10, scale: 0.85, x: -22, y: 20 },
    { rotate: -14, scale: 0.7, x: 26, y: 6 },
  ],
  [
    { rotate: -6, scale: 1, x: 0, y: 4 },
    { rotate: 30, scale: 0.55, x: -30, y: 40 },
  ],
  [
    { rotate: 4, scale: 0.9, x: -14, y: 12 },
    { rotate: -20, scale: 0.65, x: 24, y: 30 },
  ],
]

export default function BotanicalMark({ variant = 0, className = '' }) {
  const layout = LAYOUTS[variant % LAYOUTS.length]
  return (
    <svg
      viewBox="-70 -40 140 180"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      {layout.map((props, i) => (
        <Stem key={i} {...props} />
      ))}
    </svg>
  )
}
