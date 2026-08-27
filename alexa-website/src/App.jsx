import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { useTheme } from './context/theme-context.js'
import { CartProvider } from './context/CartContext.jsx'
import SiteNav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Thanks from './pages/Thanks.jsx'
import NotFound from './pages/NotFound.jsx'

function ThemedToastContainer() {
  const { theme } = useTheme()
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme={theme}
    />
  )
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <SiteNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ThemedToastContainer />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
