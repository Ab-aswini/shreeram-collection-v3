
export interface Product {
  id: string; // The ID will be the filename (slug)
  name: string;
  category: 'men' | 'women' | 'kids' | 'jeans' | 'sarees';
  price: number | null; // null means "Call for Price"
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  fabric: string;
  isNew: boolean;
  isFeatured: boolean;
  inStock: boolean;
}

export const productImages = {
  hero: "/images/hero-collection.jpg",
  men: "/images/product-mens-kurta.jpg",
  women: "/images/product-womens.jpg",
  kids: "/images/product-kids.jpg",
  jeans: "/images/product-jeans.jpg",
  sarees: "/images/product-saree.jpg",
};

// Import all product JSON files from the content directory
const productModules = import.meta.glob('@/content/products/*.json', { eager: true });

// Convert the imported modules into a Product array
export const products: Product[] = productModules ? Object.entries(productModules).map(([path, module]: [string, any]) => {
  // Extract filename as ID (e.g., "royal-maroon-kurta-set" from ".../royal-maroon-kurta-set.json")
  const id = path.split('/').pop()?.replace('.json', '') || '';
  return {
    id,
    ...(module?.default || {})
  };
}) : [];

export const categories = [
  { id: "men", name: "Men's Wear", icon: "👔", description: "Shirts, Kurtas & More", image: productImages.men },
  { id: "women", name: "Ladies Wear", icon: "👗", description: "Suits, Kurtis & Dresses", image: productImages.women },
  { id: "kids", name: "Kids Wear", icon: "🧒", description: "Ethnic & Casual Wear", image: productImages.kids },
  { id: "jeans", name: "Jeans", icon: "👖", description: "Denims for All", image: productImages.jeans },
  { id: "sarees", name: "Sarees", icon: "🥻", description: "Silk & Cotton Sarees", image: productImages.sarees },
];

export const getProductsByCategory = (category: string) =>
  products.filter(p => p.category === category && p.inStock);

export const getNewArrivals = () =>
  products.filter(p => p.isNew && p.inStock).slice(0, 8);

export const getFeaturedProducts = () =>
  products.filter(p => p.isFeatured && p.inStock).slice(0, 6);

export const getProductById = (id: string) =>
  products.find(p => p.id === id);
