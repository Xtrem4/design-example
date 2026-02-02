import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductHighlight from './components/ProductHighlight'
import FeaturesPromo from './components/FeaturesPromo'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductHighlight />
        <FeaturesPromo />
      </main>
      <Footer />
    </>
  )
}
