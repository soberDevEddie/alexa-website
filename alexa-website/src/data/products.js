// Placeholder catalogue. Replace with real products (and swap
// PlaceholderArt for real photos) once content is ready.
export const products = [
  {
    slug: 'garden-arrangement',
    name: 'Garden Arrangement',
    price: 95,
    priceFrom: false,
    tone: 'dark',
    variant: 0,
    description:
      'A lush, hand-tied arrangement of seasonal garden roses, lilac, and ranunculus in a vintage vessel. Full, romantic, and built to open beautifully over a week.',
    details: ['Arrives in a keepsake vase', 'Seasonal blooms, colors may vary', 'Free local delivery'],
  },
  {
    slug: 'still-life-bouquet',
    name: 'Still Life Bouquet',
    price: 50,
    priceFrom: true,
    tone: 'light',
    variant: 1,
    description:
      'Jewel-toned peonies, ranunculus, and trailing greenery gathered into a hand-tied bouquet inspired by 17th-century still life painting.',
    details: ['Hand-tied, wrapped in kraft paper', 'Available in three sizes', 'Ships nationwide'],
  },
  {
    slug: 'meadow-bouquet',
    name: 'Meadow Bouquet',
    price: 50,
    priceFrom: true,
    tone: 'light',
    variant: 2,
    description:
      'A loose, foraged-look bouquet of larkspur, veronica, and wild herbs, tied with hand-dyed silk ribbon. Effortless and a little untamed.',
    details: ['Hand-tied, wrapped in kraft paper', 'Available in three sizes', 'Ships nationwide'],
  },
  {
    slug: 'atelier-arrangement',
    name: 'Atelier Arrangement',
    price: 105,
    priceFrom: false,
    tone: 'dark',
    variant: 3,
    description:
      'Deep burgundy ranunculus, garden roses, and copper heuchera arranged in a weathered silver compote. Our most dramatic design.',
    details: ['Arrives in a keepsake vase', 'Seasonal blooms, colors may vary', 'Free local delivery'],
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}
