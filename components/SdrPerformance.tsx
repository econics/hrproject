// components/SdrPerformance.tsx
"use client";
import React, { useState, useEffect } from "react";

interface Stats {
  calls: number;
  emails: number;
  meetings: number;
  conversionRate: number;
}

const fetchData = async () => {
  // Mock fetch function to get data
  // Replace with actual API calls
  return {
    daily: { calls: 20, emails: 50, meetings: 5, conversionRate: 10 },
    weekly: { calls: 100, emails: 250, meetings: 25, conversionRate: 15 },
    monthly: { calls: 400, emails: 1000, meetings: 100, conversionRate: 20 },
  };
};

const SdrPerformance: React.FC = () => {
  const [stats, setStats] = useState<{
    daily: Stats;
    weekly: Stats;
    monthly: Stats;
  }>({
    daily: { calls: 0, emails: 0, meetings: 0, conversionRate: 0 },
    weekly: { calls: 0, emails: 0, meetings: 0, conversionRate: 0 },
    monthly: { calls: 0, emails: 0, meetings: 0, conversionRate: 0 },
  });

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchData();
      setStats(data);
    };

    loadStats();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">SDR Performance Tracking</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Daily Stats */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Daily Stats</h3>
          <p>Calls: {stats.daily.calls}</p>
          <p>Emails: {stats.daily.emails}</p>
          <p>Meetings: {stats.daily.meetings}</p>
          <p>Conversion Rate: {stats.daily.conversionRate}%</p>
        </div>

        {/* Weekly Stats */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Weekly Stats</h3>
          <p>Calls: {stats.weekly.calls}</p>
          <p>Emails: {stats.weekly.emails}</p>
          <p>Meetings: {stats.weekly.meetings}</p>
          <p>Conversion Rate: {stats.weekly.conversionRate}%</p>
        </div>

        {/* Monthly Stats */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Monthly Stats</h3>
          <p>Calls: {stats.monthly.calls}</p>
          <p>Emails: {stats.monthly.emails}</p>
          <p>Meetings: {stats.monthly.meetings}</p>
          <p>Conversion Rate: {stats.monthly.conversionRate}%</p>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
        <h3 className="mb-2 text-xl font-semibold">Insights</h3>
        <p>Performance trends and recommendations will be displayed here...</p>
        {/* You can add charts and graphs here using libraries like Chart.js or Recharts */}
      </div>
    </div>
  );
};

export default SdrPerformance;
