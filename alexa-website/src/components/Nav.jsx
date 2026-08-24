import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav as BsNav, Navbar, Offcanvas } from 'react-bootstrap'
import { useCart } from '../context/cart-context.js'
import { useTheme } from '../context/theme-context.js'
import ThemeToggle from './ThemeToggle.jsx'
import './Nav.css'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function SiteNav() {
  const { items, count } = useCart()
  const { theme } = useTheme()
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <Navbar expand="md" variant={theme} className="site-nav" sticky="top">
        <Container className="py-2">
          <Navbar.Brand as={NavLink} to="/" className="site-nav__brand">
            Alexa
          </Navbar.Brand>
          <div className="site-nav__mobile-actions d-flex d-md-none align-items-center gap-3">
            <ThemeToggle />
            <Navbar.Toggle aria-controls="main-nav" className="site-nav__toggle" />
          </div>
          <Navbar.Collapse id="main-nav">
            <BsNav className="mx-md-auto site-nav__links">
              {links.map((link) => (
                <BsNav.Link
                  key={link.to}
                  as={NavLink}
                  to={link.to}
                  className={({ isActive }) => `site-nav__link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </BsNav.Link>
              ))}
            </BsNav>
            <BsNav className="site-nav__right align-items-md-center">
              <button type="button" className="site-nav__link site-nav__cart" onClick={() => setShowCart(true)}>
                Cart ({count})
              </button>
              <div className="d-none d-md-flex">
                <ThemeToggle />
              </div>
            </BsNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end" className="mini-cart">
        <Offcanvas.Header closeButton closeVariant={theme === 'dark' ? 'white' : undefined}>
          <Offcanvas.Title className="font-display">Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p className="text-body-secondary mb-0">Nothing here yet &mdash; browse the shop to add a bouquet.</p>
          ) : (
            <>
              <ul className="mini-cart__list">
                {items.map((item) => (
                  <li key={item.slug}>
                    <span>
                      {item.name} <span className="text-body-secondary">&times;{item.qty}</span>
                    </span>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mini-cart__total">
                <span>Total</span>
                <span>${items.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}</span>
              </div>
              <p className="text-body-secondary small mt-3 mb-0">
                This is a preview cart &mdash; checkout isn&rsquo;t connected yet.
              </p>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
