import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Page',
  description: 'Dashboard description'
};
const DashboardPage = () => {
  return (
    <div className='container'>
      <div className='pages'>Dashboard page</div>
    </div>
  );
};
export default DashboardPage;
