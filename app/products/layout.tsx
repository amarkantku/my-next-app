import Link from 'next/link';
import { getProducts } from './getProducts';

export const metadata = {
    title: 'This is product page',
    description: 'Products listing',
};

export default async function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { products } = await getProducts();

    return (
        <section
            style={{
                border: '2px solid purple',
                padding: '20px',
                margin: '10px',
                display: 'flex',
                gap: '2rem',
            }}
        >
            <p>I am Product layout</p>
            <ul>
                {products.map(
                    ({ id, title }: { id: number; title: string }) => (
                        <li key={id}>
                            <Link href={`/product/${id}`}>{title}</Link>
                        </li>
                    )
                )}
            </ul>
            {children}
        </section>
    );
}
