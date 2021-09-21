import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title of todo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Completed 1 tasks out of 4/i);
  expect(linkElement).toBeInTheDocument();
});
