import ProductDetails from '@/components/ProductDetails';
import data from '@/data/data.json';

// Generate static params for all earphone products
export async function generateStaticParams() {
  const earphones = data.filter(item => item.category === 'earphones');
  return earphones.map((product) => ({
    slug: product.slug,
  }));
}

export default function EarphoneProduct({ params }) {
  // Verify the product exists
  const product = data.find(item => item.slug === params.slug && item.category === 'earphones');
  
  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>The requested earphone product could not be found.</p>
      </div>
    );
  }

  return <ProductDetails slug={params.slug} />;
} 