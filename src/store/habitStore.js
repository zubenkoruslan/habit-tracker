import { create } from 'zustand';

const getDateDaysAgo = (days) => {
  const date = new Date('2025-03-12');
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0];
};

const calculateStreak = (completions) => {
  let streak = 0;
  const today = new Date('2025-03-12');
  for (let i = 0; i < 365; i++) { // Check up to a year
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    if (completions[dateStr]) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
};

export const useHabitStore = create((set) => ({
  habits: [
    { id: 1, name: 'Drink Water', goal: '8 glasses', completions: { [getDateDaysAgo(6)]: true, [getDateDaysAgo(4)]: true, [getDateDaysAgo(2)]: true, [getDateDaysAgo(0)]: true } },
    { id: 2, name: 'Exercise', goal: '30 min', completions: { [getDateDaysAgo(5)]: true, [getDateDaysAgo(3)]: true, [getDateDaysAgo(1)]: true } },
    { id: 3, name: 'Read', goal: '20 pages', completions: { [getDateDaysAgo(6)]: true, [getDateDaysAgo(2)]: true } },
  ],
  addHabit: (name, goal) => set((state) => ({ habits: [...state.habits, { id: Date.now(), name, goal, completions: {} }] })),
  toggleCompletion: (habitId, date) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === habitId
          ? { ...habit, completions: { ...habit.completions, [date]: !habit.completions[date] } }
          : habit
      ),
    })),
  deleteHabit: (habitId) => set((state) => ({ habits: state.habits.filter((habit) => habit.id !== habitId) })),
  resetCompletions: (habitId) =>
    set((state) => ({
      habits: state.habits.map((habit) => (habit.id === habitId ? { ...habit, completions: {} } : habit)),
    })),
  getStreak: (habitId) => {
    const habit = useHabitStore.getState().habits.find((h) => h.id === habitId);
    return habit ? calculateStreak(habit.completions) : 0;
  },
}));