import React, { Suspense, lazy } from 'react';
import { TodosProps } from '../types';

const SearchTodos = lazy(() => import('./SearchTodos'));

const Todos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' });
  const todos: TodosProps[] = await res.json();

  return (
    <div className='todos-container'>
      <h2>To-Do List</h2>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchTodos todos={todos} />
      </Suspense>
    </div>
  );
};

export default Todos;
