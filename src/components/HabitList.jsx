import React from 'react';
import { useHabitStore } from '../store/habitStore';

export default function HabitList() {
  const { habits, toggleCompletion, deleteHabit, resetCompletions, getStreak } = useHabitStore();
  const today = new Date('2025-03-12').toISOString().split('T')[0];

  return (
    <div className="space-y-4">
      {habits.length === 0 ? (
        <p className="text-gray-500 text-center">No habits yet.</p>
      ) : (
        habits.map((habit) => (
          <div
            key={habit.id}
            className="p-4 bg-gray-800 rounded-lg shadow-md animate-fade-in hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={!!habit.completions[today]}
                  onChange={() => toggleCompletion(habit.id, today)}
                  className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                />
                <div>
                  <span className="text-lg font-semibold">{habit.name}</span>
                  <p className="text-gray-400">{habit.goal}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-cyan-400">Streak: {getStreak(habit.id)}</span>
                <div className="space-x-2 mt-1">
                  <button onClick={() => resetCompletions(habit.id)} className="text-blue-400 hover:underline">
                    Reset
                  </button>
                  <button onClick={() => deleteHabit(habit.id)} className="text-red-400 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}