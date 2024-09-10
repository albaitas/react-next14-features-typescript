import Link from 'next/link';
import { CiFaceFrown } from 'react-icons/ci';

export default function NotFound() {
  return (
    <div className='container'>
      <div className='center'>
        <CiFaceFrown style={{ color: 'rebeccapurple', fontSize: '2rem' }} />
        <h2>404 Not Found</h2>
        <p>Could not find the requested invoice.</p>
        <h3 className='reset'>
          <Link href='/'>Go Back</Link>
        </h3>
      </div>
    </div>
  );
}
