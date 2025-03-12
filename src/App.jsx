import React from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import HabitHeatmap from './components/HabitHeatmap';
import HabitChart from './components/HabitChart';
import Quote from './components/Quote';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Header/Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 p-6 flex-shrink-0 md:h-screen md:overflow-y-auto">
        <div className="flex flex-col md:flex-col items-center md:items-start space-y-6 md:space-y-8">
          <h1 className="text-3xl font-bold text-cyan-400">Habit Tracker</h1>
          <p className="text-gray-400 text-center md:text-left">Build your daily streaks</p>
          <div className="w-full max-w-xs md:max-w-none">
            <HabitForm />
          </div>
          <div className="w-full max-w-xs md:max-w-none">
            <Quote />
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="space-y-8">
          <HabitList />
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0">
            <HabitHeatmap />
            <HabitChart />
          </div>
        </div>
      </main>
    </div>
  );
}