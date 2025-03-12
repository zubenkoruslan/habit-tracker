import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { useHabitStore } from '../store/habitStore';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function HabitChart() {
  const { habits } = useHabitStore();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date('2025-03-12');
    d.setDate(d.getDate() - i);
    return d.toISOString().split('T')[0];
  }).reverse();

  const habitColors = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

  const data = {
    labels: dates.map((d) => d.slice(5)),
    datasets: habits.map((habit, index) => ({
      label: habit.name,
      data: dates.map((date) => (habit.completions[date] ? 1 : 0)),
      borderColor: habitColors[index % habitColors.length],
      backgroundColor: habitColors[index % habitColors.length],
      fill: false,
      tension: 0.1,
      pointRadius: 4,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow height adjustment
    scales: {
      y: { beginAtZero: true, max: 1, ticks: { stepSize: 1, color: '#F3F4F6' }, title: { display: true, text: 'Completed', color: '#F3F4F6' } },
      x: { title: { display: true, text: 'Date', color: '#F3F4F6' }, ticks: { color: '#D1D5DB' } },
    },
    plugins: { legend: { position: 'top', labels: { color: '#F3F4F6', font: { size: 12 } } } },
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg md:text-xl font-semibold text-center mb-4">Weekly Habit Progress</h2>
      <div className="h-64 md:h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}