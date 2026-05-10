import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import MobileCategoryBar from './components/MobileCategoryBar';
import ProductGrid from './components/ProductGrid';
import DernieresPepites from './components/DernieresPepites';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const {
    allProducts,
    filteredProducts,
    loading,
    activeCategory,
    setActiveCategory,
    productCounts,
  } = useProducts();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Jost', sans-serif" }}>
      
      <Header />
      <Hero />

      <section id="products" className="w-full px-6 md:px-16 py-12">
        <div className="max-w-[1400px] mx-auto">

          {/* MOBILE */}
          <MobileCategoryBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            productCounts={productCounts}
          />

          <div className="flex gap-8">
            
            {/* SIDEBAR DESKTOP */}
            <Sidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              productCounts={productCounts}
            />

            {/* GRID */}
            <ProductGrid
              products={filteredProducts}
              loading={loading}
              activeCategory={activeCategory}
            />

          </div>
        </div>
      </section>

      <DernieresPepites products={allProducts} />
      <EmailCapture />
      <Footer />

      <ScrollToTop />
      <CookieBanner />

    </div>
  );
}
