import ProductDetails from '../../../components/ProductDetails';
import data from '../../../data/data.json';

export async function generateStaticParams() {
  const speakers = data.filter(product => product.category === 'speakers');
  return speakers.map((product) => ({
    slug: product.slug,
  }));
}

export default async function SpeakerProduct({ params }) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
} 