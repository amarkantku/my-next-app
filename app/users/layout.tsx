export const metadata = {
  title: 'This is user page',
  description: 'user page description',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        border: '2px solid purple',
        padding: '20px',
        margin: '10px',
      }}
    >
      <p>I am user layout</p>
      {children}
    </section>
  );
}
