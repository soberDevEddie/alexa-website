import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <div className="font-display site-footer__brand">Alexa</div>
            <p className="text-body-secondary mb-0">
              Small-batch floral arrangements, hand-tied bouquets, and seasonal workshops.
              Placeholder studio &mdash; swap in your real details.
            </p>
          </Col>
          <Col md={3} className="site-footer__links">
            <div className="eyebrow mb-2">Explore</div>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </Col>
          <Col md={4} className="site-footer__links">
            <div className="eyebrow mb-2">Studio</div>
            <span className="text-body-secondary">123 Blossom Lane, Your City</span>
            <span className="text-body-secondary">hello@example.com</span>
          </Col>
        </Row>
        <div className="site-footer__bottom">
          <span>&copy; {new Date().getFullYear()} Alexa Floral Studio</span>
        </div>
      </Container>
    </footer>
  )
}
