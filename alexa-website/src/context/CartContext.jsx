import { useMemo, useState } from 'react'
import { CartContext } from './cart-context.js'

// Visual-only cart: tracks quantities in memory so the UI feels alive
// (nav badge, "added" confirmation). No checkout/payment is wired up.
export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // { slug, name, price, qty }

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug)
      if (existing) {
        return prev.map((i) => (i.slug === product.slug ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { slug: product.slug, name: product.name, price: product.price, qty: 1 }]
    })
  }

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value = { items, addItem, count }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
