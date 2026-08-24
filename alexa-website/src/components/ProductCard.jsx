import { Link } from 'react-router-dom'
import PlaceholderArt from './PlaceholderArt.jsx'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.slug}`} className="product-card">
      <PlaceholderArt tone={product.tone} variant={product.variant} label={product.name} />
      <div className="product-card__meta">
        <h3 className="font-display product-card__name">{product.name}</h3>
        <p className="product-card__price">
          {product.priceFrom ? 'from ' : ''}${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  )
}
