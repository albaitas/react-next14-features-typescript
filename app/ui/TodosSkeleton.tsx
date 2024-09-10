import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TodosSkeleton = () => {
    return (
        <div className="todos-container">
        <ul className="todos-list">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="todo-item">
                <h3>
                  <Skeleton width={300} /> 
                </h3>
                <p>
                  <Skeleton width={200} /> 
                </p>
              </li>
            ))}
        </ul>
        </div>
      );
    };

export default TodosSkeleton;