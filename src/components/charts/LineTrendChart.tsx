import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export interface LineTrendChartProps {
  data?: { period: string; Docker: number; ASPNET: number; React: number }[];
}

const defaultTrendData = [
  { period: 'Q3 2025', Docker: 2100, ASPNET: 3200, React: 3900 },
  { period: 'Q4 2025', Docker: 2550, ASPNET: 3500, React: 4200 },
  { period: 'Q1 2026', Docker: 3100, ASPNET: 3800, React: 4500 },
  { period: 'Q2 2026', Docker: 3550, ASPNET: 4120, React: 4850 },
];

export const LineTrendChart: React.FC<LineTrendChartProps> = ({ data = defaultTrendData }) => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#DCE4EC" />
          <XAxis dataKey="period" stroke="#64748B" fontSize={12} />
          <YAxis stroke="#64748B" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4EC', borderRadius: '8px', fontSize: '12px' }} />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          <Line type="monotone" dataKey="React" stroke="#0F4C81" strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="ASPNET" stroke="#10B981" strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Docker" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
