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
          <PolarGrid stroke="#DCE4EC" />
          <PolarAngleAxis dataKey="category" tick={{ fill: '#64748B', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#DCE4EC" />
          <Radar
            name="Your Skills"
            dataKey="userProficiency"
            stroke="#0F4C81"
            fill="#0F4C81"
            fillOpacity={0.3}
          />
          <Radar
            name="Market Demand"
            dataKey="marketDemand"
            stroke="#6366F1"
            fill="#6366F1"
            fillOpacity={0.15}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#DCE4EC', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};
