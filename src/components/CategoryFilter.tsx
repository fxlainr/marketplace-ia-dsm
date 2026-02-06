'use client';

import { Category, categoryConfig } from '@/data/assistants';

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

const categories: Category[] = ['prospection', 'qualification', 'proposition', 'lancement', 'suivi', 'carriere'];

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          selected === null
            ? 'bg-white text-black'
            : 'bg-[var(--card)] text-gray-400 hover:text-white border border-[var(--border)]'
        }`}
      >
        Tous
      </button>
      
      {categories.map((cat) => {
        const config = categoryConfig[cat];
        const isSelected = selected === cat;
        
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all border"
            style={{
              backgroundColor: isSelected ? config.color : config.bgColor,
              borderColor: config.color,
              color: isSelected ? '#0A0A0A' : config.color,
            }}
          >
            {config.label}
          </button>
        );
      })}
    </div>
  );
}
