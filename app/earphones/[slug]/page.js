import ProductDetails from '../../../components/ProductDetails';

export default function EarphoneProduct({ params }) {
  return <ProductDetails slug={params.slug} />;
} 