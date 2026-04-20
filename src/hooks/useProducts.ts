import { useState, useEffect, useMemo } from 'react';
import type { Product } from '@/mocks/products';
import { FALLBACK_PRODUCTS, CATEGORIES } from '@/mocks/products';

const SHEET_URL =
  'https://opensheet.elk.sh/17d9D2k1xXoBoy3bFBTBEPQUfsRiVMEVWVr3SsF9jquE/Feuille%201';

export function useProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Tous');

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data: Record<string, string>[]) => {
        if (cancelled) return;
        const parsed: Product[] = data
          .filter(
            (row) =>
              row.title &&
              row.main_image &&
              row.affiliate_link &&
              row.category
          )
          .map((row) => ({
            title: row.title.trim(),
            main_image: row.main_image.trim(),
            affiliate_link: row.affiliate_link.trim(),
            category: row.category.trim(),
          }));

        setAllProducts(parsed.length > 0 ? parsed : FALLBACK_PRODUCTS);
      })
      .catch(() => {
        if (!cancelled) setAllProducts(FALLBACK_PRODUCTS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Tous') return allProducts;
    return allProducts.filter((p) => p.category === activeCategory);
  }, [allProducts, activeCategory]);

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      counts[cat] = allProducts.filter((p) => p.category === cat).length;
    });
    return counts;
  }, [allProducts]);

  return {
    allProducts,
    filteredProducts,
    loading,
    activeCategory,
    setActiveCategory,
    productCounts,
  };
}
