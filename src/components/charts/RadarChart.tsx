import React from 'react';
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

export interface RadarChartProps {
  data?: { category: string; userProficiency: number; marketDemand: number }[];
}

const defaultData = [
  { category: 'Frontend', userProficiency: 90, marketDemand: 95 },
  { category: 'Backend', userProficiency: 75, marketDemand: 90 },
  { category: 'Databases', userProficiency: 70, marketDemand: 80 },
  { category: 'DevOps', userProficiency: 30, marketDemand: 85 },
  { category: 'Cloud', userProficiency: 40, marketDemand: 75 },
  { category: 'Soft Skills', userProficiency: 85, marketDemand: 80 },
];

export const SkillRadarChart: React.FC<RadarChartProps> = ({ data = defaultData }) => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#E2E8F0" />
          <PolarAngleAxis dataKey="category" tick={{ fill: '#64748B', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CBD5E1" />
          <Radar
            name="Your Skills"
            dataKey="userProficiency"
            stroke="#2563EB"
            fill="#2563EB"
            fillOpacity={0.3}
          />
          <Radar
            name="Market Demand"
            dataKey="marketDemand"
            stroke="#0284C7"
            fill="#0284C7"
            fillOpacity={0.15}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};
