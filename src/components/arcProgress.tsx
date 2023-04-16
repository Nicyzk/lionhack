import React, { useMemo } from 'react';
import './arcProgress.css';

interface ArcProgressProps {
    level: number;
  }
  
  const ArcProgress: React.FC<ArcProgressProps> = ({ level }) => {
    const radius = 45;
    const strokeWidth = 4;
    const circumference = 2 * Math.PI * radius;
  
    const progressPercentage = useMemo(() => {
      const maxLevel = 4;
      const percentage = (level / maxLevel) * 100;
      return percentage > 100 ? 100 : percentage;
    }, [level]);
  
    const strokeDashoffset = useMemo(() => {
      return circumference - (progressPercentage / 100) * circumference;
    }, [progressPercentage, circumference]);
  
    return (
      <div className="arc-progress">
        <svg width="100" height="100">
          <circle
            className="arc-progress__circle arc-progress__circle-bg"
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className="arc-progress__circle arc-progress__circle-fill"
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        {level !== 0 && (
          <span className="arc-progress__text">Level {level}</span>
        )}
      </div>
    );
  };
  
  export default ArcProgress;
  