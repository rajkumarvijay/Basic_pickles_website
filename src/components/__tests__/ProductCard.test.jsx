import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { PRODUCTS } from '../../data/products';

test('renders product title', () => {
  render(<ProductCard p={PRODUCTS[0]} onAdd={()=>{}} onView={()=>{}} />);
  expect(screen.getByText(/Classic Mango Pickle/i)).toBeInTheDocument();
});
