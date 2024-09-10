'use client';
import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { SearchTodosProps } from '../types';

const SearchTodos = ({ todos }: SearchTodosProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())).slice(0, 10);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input type='text' placeholder='Search todos...' value={searchTerm} onChange={handleSearch} className='search-input' />

      <ul className='todos-list'>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchTodos;
