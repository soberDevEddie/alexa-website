import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import './Shop.css'

export default function Shop() {
  return (
    <Container className="shop-page">
      <div className="text-center mb-5">
        <h1 className="font-display">Shop</h1>
      </div>
      <Row className="gy-5 gx-4">
        {products.map((product) => (
          <Col key={product.slug} xs={12} sm={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
