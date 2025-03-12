# Habit Tracker

A sleek React app to build and track daily habits with a modern dark theme.

## Features
- Add habits with daily goals.
- Mark habits as completed each day with streak tracking.
- Visualize progress with a horizontal heatmap (with tooltips) and a colorful line chart (side-by-side on desktop, stacked on mobile).
- Delete habits or reset progress.
- Preloaded with mock habits and a motivational quote in the sidebar (header on mobile, scrollable on desktop if overflow).
- Fully responsive: sidebar moves to top header on mobile.

## Setup
1. Clone: `git clone https://github.com/zubenkoruslan/habit-tracker.git`
2. Install: `npm install`
3. Run: `npm run dev`

## Stack
 - React 18 (Vite).
 - Zustand (state management).
 - Tailwind CSS.
 - Chart.js + react-chartjs-2 (line chart).
 - react-calendar-heatmap (heatmap visualization).
 - Vitest (testing).