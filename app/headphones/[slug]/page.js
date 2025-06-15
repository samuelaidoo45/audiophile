import ProductDetails from '../../../components/ProductDetails';

export default async function HeadphoneProduct({ params }) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
} 