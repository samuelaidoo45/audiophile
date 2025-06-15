import ProductDetails from '@/components/ProductDetails';
import data from '@/data/data.json';

// Generate static params for all speaker products
export async function generateStaticParams() {
  const speakers = data.filter(item => item.category === 'speakers');
  return speakers.map((product) => ({
    slug: product.slug,
  }));
}

export default function SpeakerProduct({ params }) {
  // Verify the product exists
  const product = data.find(item => item.slug === params.slug && item.category === 'speakers');
  
  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>The requested speaker product could not be found.</p>
      </div>
    );
  }

  return <ProductDetails slug={params.slug} />;
} 