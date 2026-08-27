import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import './Contact.css'

const FORMSPREE_FORM_ID = 'xppzarzg'

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)
  const navigate = useNavigate()

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent — we'll get back to you soon.")
      navigate('/thank-you')
    }
  }, [state.succeeded, navigate])

  useEffect(() => {
    if (state.errors) {
      toast.error('Something went wrong sending your message. Please try again.')
    }
  }, [state.errors])

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

          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Your name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-danger small mt-1 mb-0"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required placeholder="you@example.com" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-danger small mt-1 mb-0"
              />
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-danger small mt-1 mb-0"
              />
            </Form.Group>

            <ValidationError errors={state.errors} className="text-danger mb-3" />

            <button type="submit" className="btn btn-gold w-100" disabled={state.submitting}>
              {state.submitting ? 'Sending…' : 'Send Message'}
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
