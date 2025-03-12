import { render, screen, fireEvent } from '@testing-library/react';
import HabitForm from './HabitForm';
import { useHabitStore } from '../store/habitStore';
import { vi } from 'vitest';

vi.mock('../store/habitStore', () => ({
  useHabitStore: () => ({
    addHabit: vi.fn(),
  }),
}));

test('adds a habit', () => {
  render(<HabitForm />);
  const nameInput = screen.getByPlaceholderText('Habit Name (e.g., Exercise)');
  const goalInput = screen.getByPlaceholderText('Daily Goal (e.g., 30 min)');
  const button = screen.getByText('Add Habit');

  fireEvent.change(nameInput, { target: { value: 'Exercise' } });
  fireEvent.change(goalInput, { target: { value: '30 min' } });
  fireEvent.click(button);

  expect(nameInput.value).toBe('');
  expect(goalInput.value).toBe('');
});