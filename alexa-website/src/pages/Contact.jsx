import { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up yet — this just confirms the form works visually.
    setSent(true)
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

          {sent ? (
            <div className="contact-page__sent text-center">
              <p className="font-display fs-3 mb-2">Thank you</p>
              <p className="text-body-secondary">
                This is a placeholder confirmation &mdash; connect the form to your email or CRM
                to receive real messages.
              </p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="you@example.com" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} required placeholder="How can we help?" />
              </Form.Group>
              <button type="submit" className="btn btn-gold w-100">
                Send Message
              </button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  )
}
