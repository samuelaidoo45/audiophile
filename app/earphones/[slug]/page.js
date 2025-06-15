import ProductDetails from '../../../components/ProductDetails';

export default async function EarphoneProduct({ params }) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
} 