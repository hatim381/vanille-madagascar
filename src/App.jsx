import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import { Strip, Quality, Uses, Product, HowToOrder, Faq, Cta, Footer, Fab } from './components/Sections'
import { useReveal, useScrolled } from './hooks/useReveal'

export default function App() {
  useScrolled()
  useReveal()

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Strip />
        <Pricing />
        <Quality />
        <Product />
        <Uses />
        <HowToOrder />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Fab />
    </>
  )
}
