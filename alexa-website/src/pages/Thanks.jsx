import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import BotanicalMark from '../components/BotanicalMark.jsx'
import './Thanks.css'

export default function Thanks() {
  return (
    <Container className="thanks-page text-center">
      <BotanicalMark variant={1} className="thanks-page__mark" />
      <p className="eyebrow mb-2">Message Sent</p>
      <h1 className="font-display mb-3">Thank You</h1>
      <p className="text-body-secondary thanks-page__body">
        Thanks for reaching out — your message has been received, and I&rsquo;ll be in touch
        soon.
      </p>
      <div className="thanks-page__actions">
        <Link to="/" className="btn btn-gold">
          Back Home
        </Link>
        <Link to="/shop" className="btn btn-outline-gold">
          Browse the Shop
        </Link>
      </div>
    </Container>
  )
}
