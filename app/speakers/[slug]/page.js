import ProductDetails from '../../../components/ProductDetails';

export default async function SpeakerProduct({ params }) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
} 