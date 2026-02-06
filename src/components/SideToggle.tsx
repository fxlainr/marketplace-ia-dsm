'use client';

import { Building2, Users } from 'lucide-react';
import { Side } from '@/data/assistants';

interface SideToggleProps {
  selected: Side;
  onSelect: (side: Side) => void;
}

export function SideToggle({ selected, onSelect }: SideToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-[var(--card)] border border-[var(--border)] p-1">
      <button
        onClick={() => onSelect('client')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
          selected === 'client'
            ? 'bg-[var(--exalt-blue)] text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <Building2 className="w-4 h-4" />
        Client
      </button>
      
      <button
        onClick={() => onSelect('talent')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
          selected === 'talent'
            ? 'bg-[var(--accent-cyan)] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <Users className="w-4 h-4" />
        Talent
      </button>
    </div>
  );
}
