export interface NavigationItem {
  id: number;
  title: string;
  path: string;
}

export interface PostsProps {
  id: number;
  title: string;
  body: string;
}

export interface TodosProps {
  id: number;
  title: string;
  completed: boolean;
}

export interface SearchTodosProps {
  todos: TodosProps[];
}

export interface UsersProps {
  id: number;
  name: string;
  email: string;
}

export interface UserDetailsProps {
  params: { id: string };
}

export interface PhotosDetailsProps {
  params: {
    id: string | number;
    photosID: string | number;
  };
}

export interface SortProps {
  sortOrder?: string;
}

export interface ProductProps {
  params: { slug: string[] };
}

export interface SearchProps {
  searchParams: { sortOrder: string };
}
