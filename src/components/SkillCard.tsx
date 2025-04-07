import React from 'react';

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-4 rounded ${
              index < level
                ? 'bg-blue-600 dark:bg-blue-500'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
            {renderSkillLevel(skill.level)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard; 