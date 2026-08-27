import { useEffect } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import BotanicalMark from '../components/BotanicalMark.jsx'
import './Thanks.css'

export default function Thanks() {
  const location = useLocation()

  // Keep this page out of search results — it's only meant to be reached
  // right after a form submission, not browsed to directly.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  // Someone landed here without submitting the contact form (direct link,
  // bookmark, etc.) — send them to the form instead of showing a
  // confirmation for something that didn't happen.
  if (!location.state?.fromContactForm) {
    return <Navigate to="/contact" replace />
  }

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
