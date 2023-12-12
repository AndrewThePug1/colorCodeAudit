import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Square and Input components', () => {
    render(<App />);

   
    const square = screen.getByTestId('square');
    const input = screen.getByTestId('input');
    
    
    expect(square).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
