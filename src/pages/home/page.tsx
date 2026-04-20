import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
<<<<<<< HEAD
import MobileCategoryBar from './components/MobileCategoryBar';
=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
import ProductGrid from './components/ProductGrid';
import DernieresPepites from './components/DernieresPepites';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';
<<<<<<< HEAD
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
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
<<<<<<< HEAD
      
      <Header />
      <Hero />

      <section id="products" className="w-full px-6 md:px-16 py-12">
        <div className="max-w-[1400px] mx-auto">

          {/* MOBILE */}
          <MobileCategoryBar
=======
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* MAIN CONTENT: SIDEBAR + PRODUCT GRID */}
      <section id="products" className="w-full px-6 md:px-16 py-12">
        <div className="max-w-[1400px] mx-auto flex gap-8">
          {/* LEFT SIDEBAR */}
          <Sidebar
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            productCounts={productCounts}
          />

<<<<<<< HEAD
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
=======
          {/* PRODUCT GRID */}
          <ProductGrid
            products={filteredProducts}
            loading={loading}
            activeCategory={activeCategory}
          />
        </div>
      </section>

      {/* DERNIÈRES PÉPITES */}
      <DernieresPepites products={allProducts} />

      {/* EMAIL CAPTURE */}
      <EmailCapture />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
