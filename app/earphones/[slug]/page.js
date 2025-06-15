import ProductDetails from '../../../components/ProductDetails';
import data from '../../../data/data.json';

export async function generateStaticParams() {
  const earphones = data.filter(product => product.category === 'earphones');
  return earphones.map((product) => ({
    slug: product.slug,
  }));
}

export default async function EarphoneProduct({ params }) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
} 