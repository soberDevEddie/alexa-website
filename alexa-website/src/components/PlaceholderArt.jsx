import BotanicalMark from './BotanicalMark.jsx'
import './PlaceholderArt.css'

// Stand-in for a product/hero photograph. `tone="light"` mimics the pale
// stone backdrops in the reference shots, `tone="dark"` mimics the near-
// black backdrops. Replace with <img> tags once real photography exists.
export default function PlaceholderArt({ tone = 'dark', variant = 0, ratio = '4 / 5', label }) {
  return (
    <div
      className={`placeholder-art tone-${tone}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label || 'Placeholder product photo'}
    >
      <BotanicalMark variant={variant} className="placeholder-art__mark" />
    </div>
  )
}
