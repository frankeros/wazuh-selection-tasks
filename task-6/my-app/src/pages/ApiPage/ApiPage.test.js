import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiPage from './ApiPage';

describe('<ApiPage />', () => {
  test('it should mount', () => {
    render(<ApiPage />);
    
    const apiPage = screen.getByTestId('ApiPage');

    expect(apiPage).toBeInTheDocument();
  });
});