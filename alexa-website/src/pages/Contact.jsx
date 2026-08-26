import { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'

// TODO: swap in your real Formspree endpoint, e.g. "https://formspree.io/f/xxxxabcd"
// Create one at https://formspree.io — the free tier is fine to start.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Container className="contact-page">
      <Row className="justify-content-center">
        <Col md={7} lg={6}>
          <div className="text-center mb-5">
            <p className="eyebrow mb-2">Get in Touch</p>
            <h1 className="font-display">Contact</h1>
            <p className="text-body-secondary mt-3">
              Questions about an order, a custom arrangement, or a workshop? Send a note below.
            </p>
          </div>

          {status === 'sent' ? (
            <div className="contact-page__sent text-center">
              <p className="font-display fs-3 mb-2">Thank you</p>
              <p className="text-body-secondary">
                Your message has been sent. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required placeholder="you@example.com" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  required
                  placeholder="How can we help?"
                />
              </Form.Group>

              {status === 'error' && (
                <p className="text-danger mb-3">
                  Something went wrong sending your message. Please try again.
                </p>
              )}

              <button type="submit" className="btn btn-gold w-100" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  )
}
