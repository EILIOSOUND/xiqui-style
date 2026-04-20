export interface Product {
  title: string;
  main_image: string;
  affiliate_link: string;
  category: string;
}

export const CATEGORIES = [
  'Robes',
  'Hauts',
  'Pantalons',
  'Jupes',
  'Lingerie',
  'Accessoires',
  'Chaussures',
];

export const FALLBACK_PRODUCTS: Product[] = [
  {
    title: 'Robe midi fluide en satin ivoire',
    main_image: 'https://readdy.ai/api/search-image?query=elegant%20ivory%20satin%20midi%20dress%20on%20white%20background%2C%20minimalist%20product%20photography%2C%20feminine%20fashion%2C%20soft%20lighting%2C%20clean%20studio%20shot%2C%20cream%20and%20blush%20tones&width=400&height=500&seq=fp1&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Robes',
  },
  {
    title: 'Robe portefeuille fleurie rose poudré',
    main_image: 'https://readdy.ai/api/search-image?query=floral%20wrap%20dress%20in%20soft%20pink%20and%20cream%2C%20product%20photography%20on%20white%20background%2C%20feminine%20elegant%20fashion%2C%20minimalist%20studio%20lighting&width=400&height=500&seq=fp2&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Robes',
  },
  {
    title: 'Haut en dentelle crème col carré',
    main_image: 'https://readdy.ai/api/search-image?query=cream%20lace%20square%20neck%20top%2C%20minimalist%20product%20photography%20on%20white%20background%2C%20feminine%20fashion%2C%20soft%20natural%20lighting%2C%20elegant%20style&width=400&height=500&seq=fp3&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Hauts',
  },
  {
    title: 'Blouse en soie nude à manches longues',
    main_image: 'https://readdy.ai/api/search-image?query=nude%20silk%20long%20sleeve%20blouse%2C%20clean%20white%20background%20product%20photography%2C%20feminine%20minimalist%20fashion%2C%20soft%20warm%20lighting&width=400&height=500&seq=fp4&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Hauts',
  },
  {
    title: 'Pantalon large lin beige taille haute',
    main_image: 'https://readdy.ai/api/search-image?query=wide%20leg%20linen%20beige%20trousers%20high%20waist%2C%20product%20photography%20white%20background%2C%20minimalist%20feminine%20fashion%2C%20clean%20studio%20lighting&width=400&height=500&seq=fp5&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Pantalons',
  },
  {
    title: 'Jupe midi plissée rose blush',
    main_image: 'https://readdy.ai/api/search-image?query=pleated%20midi%20skirt%20in%20blush%20pink%2C%20white%20background%20product%20photography%2C%20feminine%20elegant%20fashion%2C%20soft%20natural%20lighting%2C%20minimalist%20style&width=400&height=500&seq=fp6&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Jupes',
  },
  {
    title: 'Ensemble lingerie satin champagne',
    main_image: 'https://readdy.ai/api/search-image?query=champagne%20satin%20lingerie%20set%2C%20elegant%20product%20photography%20on%20white%20background%2C%20feminine%20luxury%20fashion%2C%20soft%20warm%20lighting%2C%20minimalist%20aesthetic&width=400&height=500&seq=fp7&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Lingerie',
  },
  {
    title: 'Sac à main en cuir nude minimaliste',
    main_image: 'https://readdy.ai/api/search-image?query=minimalist%20nude%20leather%20handbag%2C%20clean%20white%20background%20product%20photography%2C%20feminine%20luxury%20accessory%2C%20soft%20studio%20lighting%2C%20elegant%20style&width=400&height=500&seq=fp8&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Accessoires',
  },
  {
    title: 'Robe longue bohème crème brodée',
    main_image: 'https://readdy.ai/api/search-image?query=long%20boho%20cream%20embroidered%20dress%2C%20white%20background%20product%20photography%2C%20feminine%20romantic%20fashion%2C%20soft%20natural%20lighting%2C%20elegant%20minimalist%20style&width=400&height=500&seq=fp9&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Robes',
  },
  {
    title: 'Top brassière en coton rose poudré',
    main_image: 'https://readdy.ai/api/search-image?query=powder%20pink%20cotton%20bralette%20top%2C%20minimalist%20product%20photography%20white%20background%2C%20feminine%20fashion%2C%20soft%20lighting%2C%20clean%20studio%20aesthetic&width=400&height=500&seq=fp10&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Hauts',
  },
  {
    title: 'Mules en daim beige à talon carré',
    main_image: 'https://readdy.ai/api/search-image?query=beige%20suede%20block%20heel%20mules%20shoes%2C%20clean%20white%20background%20product%20photography%2C%20feminine%20elegant%20footwear%2C%20soft%20studio%20lighting%2C%20minimalist%20style&width=400&height=500&seq=fp11&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Chaussures',
  },
  {
    title: 'Jupe asymétrique en mousseline ivoire',
    main_image: 'https://readdy.ai/api/search-image?query=asymmetric%20ivory%20chiffon%20skirt%2C%20white%20background%20product%20photography%2C%20feminine%20elegant%20fashion%2C%20soft%20natural%20lighting%2C%20minimalist%20aesthetic&width=400&height=500&seq=fp12&orientation=portrait',
    affiliate_link: 'https://shein.com',
    category: 'Jupes',
  },
];
