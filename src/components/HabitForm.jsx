import React, { useState } from 'react';
import { useHabitStore } from '../store/habitStore';

export default function HabitForm() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const { addHabit } = useHabitStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !goal) return;
    addHabit(name, goal);
    setName('');
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Habit Name (e.g., Exercise)"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base"
      />
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Daily Goal (e.g., 30 min)"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors text-sm md:text-base"
      >
        Add Habit
      </button>
    </form>
  );
}