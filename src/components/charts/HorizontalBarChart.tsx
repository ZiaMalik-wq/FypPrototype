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
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#DCE4EC" />
          <XAxis type="number" unit="%" stroke="#64748B" fontSize={12} />
          <YAxis dataKey="name" type="category" stroke="#64748B" fontSize={12} width={100} />
          <Tooltip
            formatter={(value: any) => [`${value}% of postings`, 'Demand Rate']}
            contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4EC', borderRadius: '8px', fontSize: '12px' }}
          />
          <Bar dataKey="percentageOfJobs" radius={[0, 4, 4, 0]}>
            {data.map((_, index) => {
              const barColors = ['#0F4C81', '#1E5A8F', '#326D9E', '#4B83B0', '#6B9DC4', '#91BDDC'];
              return <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
