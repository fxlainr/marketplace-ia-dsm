'use client';

import { Category, categoryConfigClient, categoryConfigTalent, Side } from '@/data/assistants';

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
  side: Side;
}

const categoriesClient = ['prospection', 'qualification', 'proposition', 'lancement', 'fidelisation'] as const;
const categoriesTalent = ['sourcing', 'evaluation', 'positionnement', 'integration', 'accompagnement'] as const;

export function CategoryFilter({ selected, onSelect, side }: CategoryFilterProps) {
  const categories = side === 'client' ? categoriesClient : categoriesTalent;

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
        const catConfig = side === 'client' 
          ? categoryConfigClient[cat as keyof typeof categoryConfigClient]
          : categoryConfigTalent[cat as keyof typeof categoryConfigTalent];
        const isSelected = selected === cat;
        
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat as Category)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all border"
            style={{
              backgroundColor: isSelected ? catConfig.color : catConfig.bgColor,
              borderColor: catConfig.color,
              color: isSelected ? '#0A0A0A' : catConfig.color,
            }}
          >
            {catConfig.label}
          </button>
        );
      })}
    </div>
  );
}
