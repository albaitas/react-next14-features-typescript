import Posts from '../components/Posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts Page',
  description: 'Posts titles and body'
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const PostsPage = async () => {
  await delay(1000);
  return (
    <div className='container'>
      <Posts />
    </div>
  );
};

export default PostsPage;
