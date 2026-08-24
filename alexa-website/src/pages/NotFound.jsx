import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function NotFound() {
  return (
    <Container className="text-center py-5">
      <h1 className="font-display">Page not found</h1>
      <p className="text-body-secondary mb-4">That page doesn&rsquo;t exist.</p>
      <Link to="/" className="btn btn-outline-gold">
        Back Home
      </Link>
    </Container>
  )
}
