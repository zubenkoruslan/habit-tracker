import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useHabitStore } from '../store/habitStore';

export default function HabitHeatmap() {
  const { habits } = useHabitStore();

  const endDate = new Date('2025-03-12');
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 89);

  const values = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const count = habits.filter((habit) => habit.completions[dateStr]).length;
    const completedHabits = habits.filter((habit) => habit.completions[dateStr]).map((h) => h.name);
    values.push({ date: dateStr, count, title: completedHabits.length ? completedHabits.join(', ') : 'No habits' });
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg md:text-xl font-semibold text-center mb-4">Habit Completion Heatmap</h2>
      <div className="overflow-x-auto">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          classForValue={(value) => (!value || value.count === 0 ? 'color-empty' : `color-scale-${Math.min(value.count, 4)}`)}
          tooltipDataAttrs={(value) => ({ 'data-tooltip': value.title })}
          horizontal={false} // Vertical layout for mobile
          gutterSize={2}
        />
      </div>
      <style jsx>{`
        .color-empty { fill: #4B5563; }
        .color-scale-1 { fill: #6EE7B7; }
        .color-scale-2 { fill: #34D399; }
        .color-scale-3 { fill: #10B981; }
        .color-scale-4 { fill: #047857; }
        rect:hover { stroke: #06B6D4; stroke-width: 2px; }
        .react-calendar-heatmap { width: 100%; }
      `}</style>
    </div>
  );
}