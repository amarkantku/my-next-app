export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                border: '1px solid red',
                padding: '20px',
                margin: '10px',
            }}
        >
            I am root lavel template component...
            {children}
        </div>
    );
}
