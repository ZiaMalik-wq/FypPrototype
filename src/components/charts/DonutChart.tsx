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

const COLORS = ['#0F4C81', '#10B981', '#14B8A6', '#6366F1', '#F59E0B'];

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
            contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4EC', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
