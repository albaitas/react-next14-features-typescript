import React from 'react';
import { PostsProps } from '../types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Posts = async () => {
  await delay(1000);

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  const posts: PostsProps[] = await res.json();

  return (
    <table className='posts-table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>
              {post.id}. {post.title}
            </td>
            <td>
              {post.id}. {post.body}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
