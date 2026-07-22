import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export interface HorizontalBarChartProps {
  data?: { name: string; percentageOfJobs: number }[];
}

const defaultBarData = [
  { name: 'React / Next.js', percentageOfJobs: 34 },
  { name: 'ASP.NET Core', percentageOfJobs: 29 },
  { name: 'TypeScript', percentageOfJobs: 27 },
  { name: 'Docker', percentageOfJobs: 25 },
  { name: 'PostgreSQL', percentageOfJobs: 24 },
  { name: 'Python & AI', percentageOfJobs: 21 },
];

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data = defaultBarData }) => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
          <XAxis type="number" unit="%" stroke="#64748B" fontSize={12} />
          <YAxis dataKey="name" type="category" stroke="#64748B" fontSize={12} width={100} />
          <Tooltip
            formatter={(value: any) => [`${value}% of postings`, 'Demand Rate']}
            contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '8px', fontSize: '12px' }}
          />
          <Bar dataKey="percentageOfJobs" radius={[0, 4, 4, 0]}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#2563EB' : index < 3 ? '#3B82F6' : '#60A5FA'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
