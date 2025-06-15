import ProductDetails from '../../../components/ProductDetails';
import data from '../../../data/data.json';

export async function generateStaticParams() {
  const headphones = data.filter(product => product.category === 'headphones');
  return headphones.map((product) => ({
    slug: product.slug,
  }));
}

export default async function HeadphoneProduct({ params }) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
} 