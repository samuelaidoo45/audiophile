import ProductDetails from '../../../components/ProductDetails';

export default function HeadphoneProduct({ params }) {
  return <ProductDetails slug={params.slug} />;
} 