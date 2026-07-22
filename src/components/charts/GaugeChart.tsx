import React from 'react';

export interface GaugeChartProps {
  score: number; // 0 to 100
  title?: string;
  size?: number;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  score,
  title = 'Skill Match Score',
  size = 180,
}) => {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Half circle gauge
  const progress = (score / 100) * circumference;

  let color = '#2563EB'; // Primary Blue
  if (score >= 80) color = '#16A34A'; // Green
  else if (score >= 60) color = '#D97706'; // Amber
  else color = '#DC2626'; // Red

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size / 1.6 }}>
        <svg width={size} height={size / 1.5} className="overflow-visible">
          {/* Background Track */}
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Filled Progress Arc */}
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <span className="text-3xl font-extrabold text-text-primary tracking-tight">{score}%</span>
          <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-0.5">{title}</span>
        </div>
      </div>
    </div>
  );
};
