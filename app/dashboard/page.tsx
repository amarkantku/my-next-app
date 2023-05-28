import Test from '../components/Test';
import Counter from '../components/Counter';

export default function page() {
  return (
    <div
      style={{
        border: '2px solid cyan',
        padding: '20px',
        margin: '10px',
      }}
    >
      <div>I am dashboard page</div>
      <Test title="i am test component inside dashboard page" />
      <Counter />
    </div>
  );
}
