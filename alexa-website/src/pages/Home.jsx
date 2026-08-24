import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import BotanicalMark from '../components/BotanicalMark.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import './Home.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <BotanicalMark variant={0} className="hero__mark" />
        <h1 className="font-display hero__title">Alexa</h1>
        <p className="eyebrow hero__subtitle">Floral Studio</p>
        <Link to="/shop" className="btn btn-gold mt-4">
          Shop Bouquets
        </Link>
      </section>

      <section className="home-intro">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} lg={6}>
              <p className="eyebrow mb-3">Est. placeholder</p>
              <h2 className="font-display mb-3">Arrangements inspired by still life</h2>
              <p className="text-body-secondary">
                Every bouquet is gathered by hand and composed like a painting &mdash; loose,
                seasonal, and never quite the same twice. This is placeholder copy; replace it
                with your studio&rsquo;s own story.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-shop">
        <Container>
          <div className="text-center mb-5">
            <p className="eyebrow mb-2">Featured</p>
            <h2 className="font-display">From the Shop</h2>
          </div>
          <Row className="gy-5">
            {products.slice(0, 4).map((product) => (
              <Col key={product.slug} xs={12} sm={6} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/shop" className="btn btn-outline-gold">
              View All
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
