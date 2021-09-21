import React from 'react';
import { render, screen } from '@testing-library/react';
import { Todo } from '../Todo';

it('renders title of todo app', () => {
  render(<Todo />);
  const linkElement = screen.getByText(/Completed 1 tasks out of 4/i);
  expect(linkElement).toBeInTheDocument();
});
