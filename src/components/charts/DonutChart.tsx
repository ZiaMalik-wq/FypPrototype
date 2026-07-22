import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export interface DonutChartProps {
  data?: { name: string; percentage: number }[];
}

const defaultDonutData = [
  { name: 'Fintech & Banking', percentage: 32 },
  { name: 'Software Houses', percentage: 28 },
  { name: 'HealthTech & AI', percentage: 18 },
  { name: 'E-Commerce', percentage: 14 },
  { name: 'EdTech', percentage: 8 }
];

const COLORS = ['#2563EB', '#0284C7', '#16A34A', '#D97706', '#64748B'];

export const DonutChart: React.FC<DonutChartProps> = ({ data = defaultDonutData }) => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="percentage"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: any) => [`${value}%`, 'Share']}
            contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
