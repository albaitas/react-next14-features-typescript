import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostsSkeleton = () => {
  return (
    <div className='container'>
    <table className='posts-skeleton'>
      <thead>
        <tr>
          <th>
            <Skeleton width={350} />
          </th>
          <th>
            <Skeleton width={850} />
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton width={350} />
            </td>
            <td>
              <Skeleton count={3} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default PostsSkeleton;