'use client';

import { Search, Bot } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--exalt-blue)] flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Marketplace IA</h1>
              <p className="text-xs text-gray-500">Pour les DSM</p>
            </div>
          </div>
          
          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Rechercher un assistant..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--card)] border border-[var(--border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--exalt-blue)] transition-colors"
              />
            </div>
          </div>
          
          {/* Spacer */}
          <div className="w-10" />
        </div>
      </div>
    </header>
  );
}
