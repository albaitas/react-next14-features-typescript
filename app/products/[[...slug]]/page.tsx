import React from 'react';
import { ProductProps } from '@/app/types';

const ProductPage = ({ params: { slug } }: ProductProps) => {
  return <div>ProductPage: {slug}</div>;
};

export default ProductPage;
