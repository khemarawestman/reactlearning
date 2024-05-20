import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product/Product';

// Define the mock product data here
const mockProduct = {
  image: 'https://via.placeholder.com/150',
  title: 'Test Product',
  brand: 'Test Brand',
  description: 'This is a test product',
  amount: 0,
  setAmount: jest.fn(),
};

describe('Product component', () => {
  test('renders product details correctly', () => {
    render(<Product {...mockProduct} />);
    
    const imgElement = screen.getByTestId('product-image');
    expect(imgElement).toHaveAttribute('src', mockProduct.image);
    
    const titleElement = screen.getByTestId('product-title');
    expect(titleElement).toBeInTheDocument();
    
    const brandElement = screen.getByTestId('product-brand');
    expect(brandElement).toBeInTheDocument();
    
    const descriptionElement = screen.getByTestId('product-description');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('calls setAmount when "Add to cart" button is clicked', () => {
    render(<Product {...mockProduct} />);
    
    const buttonElement = screen.getByTestId('add-to-cart-button');
    act(() => {
      fireEvent.click(buttonElement);
    });
    
    expect(mockProduct.setAmount).toHaveBeenCalledTimes(1);
    expect(mockProduct.setAmount).toHaveBeenCalledWith(mockProduct.amount + 1);
  });
});
