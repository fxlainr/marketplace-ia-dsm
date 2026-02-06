'use client';

import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Assistant } from '@/data/assistants';
import { AssistantCard } from './AssistantCard';

interface NewSectionProps {
  assistants: Assistant[];
}

export function NewSection({ assistants }: NewSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (assistants.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--accent-jaune)]" />
          <h2 className="text-xl font-bold text-white">Nouveautés</h2>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {assistants.map((assistant) => (
          <div 
            key={assistant.id} 
            className="flex-shrink-0 w-72"
            style={{ scrollSnapAlign: 'start' }}
          >
            <AssistantCard assistant={assistant} />
          </div>
        ))}
      </div>
    </section>
  );
}
