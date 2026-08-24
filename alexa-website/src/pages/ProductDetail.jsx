import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import PlaceholderArt from '../components/PlaceholderArt.jsx'
import { useCart } from '../context/cart-context.js'
import { getProductBySlug } from '../data/products.js'
import './ProductDetail.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <Container className="product-detail py-5 text-center">
        <h1 className="font-display">Bouquet not found</h1>
        <p className="text-body-secondary mb-4">This item isn&rsquo;t in the shop.</p>
        <Link to="/shop" className="btn btn-outline-gold">
          Back to Shop
        </Link>
      </Container>
    )
  }

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Container className="product-detail">
      <Row className="gy-4 align-items-start">
        <Col md={6}>
          <PlaceholderArt tone={product.tone} variant={product.variant} ratio="4 / 5" label={product.name} />
        </Col>
        <Col md={6} className="product-detail__info">
          <p className="eyebrow mb-2">{product.priceFrom ? 'Made to order' : 'Ready to ship'}</p>
          <h1 className="font-display mb-2">{product.name}</h1>
          <p className="product-detail__price">
            {product.priceFrom ? 'from ' : ''}${product.price.toFixed(2)}
          </p>
          <p className="text-body-secondary product-detail__desc">{product.description}</p>
          <ul className="product-detail__details">
            {product.details.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <button type="button" className="btn btn-gold mt-3" onClick={handleAdd}>
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <p className="text-body-secondary small mt-3 mb-0">Preview only &mdash; checkout isn&rsquo;t connected yet.</p>
        </Col>
      </Row>
    </Container>
  )
}
