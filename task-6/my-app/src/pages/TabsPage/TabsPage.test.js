import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabsPage from './TabsPage';

describe('<TabsPage />', () => {
  test('it should mount', () => {
    render(<TabsPage />);
    
    const tabsPage = screen.getByTestId('TabsPage');

    expect(tabsPage).toBeInTheDocument();
  });
});