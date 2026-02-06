'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SideToggle } from '@/components/SideToggle';
import { CategoryFilter } from '@/components/CategoryFilter';
import { NewSection } from '@/components/NewSection';
import { AssistantCard } from '@/components/AssistantCard';
import { assistants, Category, Side } from '@/data/assistants';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSide, setSelectedSide] = useState<Side>('client');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  // Reset category when side changes
  const handleSideChange = (side: Side) => {
    setSelectedSide(side);
    setSelectedCategory(null);
  };

  // Filter assistants
  const filteredAssistants = useMemo(() => {
    return assistants.filter((a) => {
      // Side filter
      if (a.side !== selectedSide) return false;
      
      // Category filter
      if (selectedCategory && a.category !== selectedCategory) return false;
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          a.name.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
  }, [searchQuery, selectedSide, selectedCategory]);

  // New assistants (for carousel)
  const newAssistants = useMemo(() => {
    return assistants.filter((a) => a.isNew && a.side === selectedSide);
  }, [selectedSide]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <SideToggle selected={selectedSide} onSelect={handleSideChange} />
          <CategoryFilter 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
            side={selectedSide}
          />
        </div>
        
        {/* New Section */}
        {!searchQuery && !selectedCategory && (
          <NewSection assistants={newAssistants} />
        )}
        
        {/* All Assistants Grid */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            {selectedCategory 
              ? `${filteredAssistants.length} assistant${filteredAssistants.length > 1 ? 's' : ''}`
              : 'Tous les assistants'
            }
          </h2>
          
          {filteredAssistants.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucun assistant trouvé</p>
              <p className="text-gray-600 text-sm mt-2">Essayez de modifier vos filtres</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredAssistants.map((assistant) => (
                <AssistantCard key={assistant.id} assistant={assistant} />
              ))}
            </div>
          )}
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-500 text-sm">
            Marketplace IA DSM — eXalt © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
