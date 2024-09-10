import Image from 'next/image';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await delay(1000);
  return (
    <div className='container'>
      <div style={{ position: 'relative', width: '100%', height: '500px', marginTop: '10px' }}>
        <Image src='/images/turkija.jpg' alt='Example image' fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}
