import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export interface AreaVolumeChartProps {
  data?: { date: string; count: number }[];
}

const defaultAreaScale = [
  { date: '07/14', count: 85 },
  { date: '07/15', count: 110 },
  { date: '07/16', count: 98 },
  { date: '07/17', count: 142 },
  { date: '07/18', count: 135 },
  { date: '07/19', count: 160 },
  { date: '07/20', count: 128 }
];

export const AreaVolumeChart: React.FC<AreaVolumeChartProps> = ({ data = defaultAreaScale }) => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="date" stroke="#64748B" fontSize={12} />
          <YAxis stroke="#64748B" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '8px', fontSize: '12px' }} />
          <Area type="monotone" dataKey="count" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
