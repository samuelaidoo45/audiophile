import ProductDetails from '../../../components/ProductDetails';

export default function SpeakerProduct({ params }) {
  return <ProductDetails slug={params.slug} />;
} 