import { Col, Container, Row } from 'react-bootstrap'
import PlaceholderArt from '../components/PlaceholderArt.jsx'
import './About.css'

export default function About() {
  return (
    <Container className="about-page">
      <Row className="gy-5 align-items-center">
        <Col md={6}>
          <PlaceholderArt tone="light" variant={2} ratio="4 / 5" label="Studio portrait placeholder" />
        </Col>
        <Col md={6}>
          <p className="eyebrow mb-2">Our Story</p>
          <h1 className="font-display mb-3">Alexa</h1>
          <p className="text-body-secondary">
            Placeholder copy: Alexa Floral Studio began as a single flower cart and grew into a
            small studio built around seasonal, locally grown blooms. Every arrangement is
            designed by hand, one at a time, and composed like a small still life.
          </p>
          <p className="text-body-secondary">
            Replace this section with your real founding story, philosophy, and photos once
            they&rsquo;re ready.
          </p>
        </Col>
      </Row>

      <Row className="about-values gy-4 mt-5 pt-4 text-center">
        {[
          { title: 'Seasonal', body: 'Sourced from local growers, never out of season.' },
          { title: 'Hand-Tied', body: 'Every stem placed by hand, no two arrangements alike.' },
          { title: 'Considered', body: 'Composed like a still life — loose, balanced.' },
        ].map((value) => (
          <Col md={4} key={value.title}>
            <h3 className="font-display about-values__title">{value.title}</h3>
            <p className="text-body-secondary">{value.body}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
