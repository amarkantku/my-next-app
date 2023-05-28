import { getProducts } from '../getProducts';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function page({ params }: any) {
  const product = await getProduct(params.id);

  return (
    <div
      style={{
        border: '2px solid cyan',
        padding: '20px',
        margin: '10px',
      }}
    >
      <div>I am product page {JSON.stringify(product)}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const { products } = await getProducts();
  return products.map((p: Product) => ({
    id: p.id.toString(),
  }));
}
