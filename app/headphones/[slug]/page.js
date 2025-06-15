import ProductDetails from '@/components/ProductDetails';
import data from '@/data/data.json';

// Generate static params for all headphone products
export async function generateStaticParams() {
  const headphones = data.filter(item => item.category === 'headphones');
  return headphones.map((product) => ({
    slug: product.slug,
  }));
}

export default function HeadphoneProduct({ params }) {
  // Verify the product exists
  const product = data.find(item => item.slug === params.slug && item.category === 'headphones');
  
  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>The requested headphone product could not be found.</p>
      </div>
    );
  }

  return <ProductDetails slug={params.slug} />;
} 