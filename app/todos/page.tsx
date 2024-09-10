import Todos from '../components/Todos';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Todos Page',
  description: 'Todos titles and status'
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TodosPage = async () => {
  await delay(1000);
  return (
    <div className='container'>
      <Todos />
    </div>
  );
};

export default TodosPage;
