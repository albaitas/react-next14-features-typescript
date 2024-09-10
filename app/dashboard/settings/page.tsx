import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings Page',
  description: 'Settings description'
};
const SettingsPage = () => {
  return <div className='pages'>Settings page</div>;
};

export default SettingsPage;
