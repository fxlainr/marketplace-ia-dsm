'use client';

import { 
  Radar, Mail, Bell, Target, RefreshCw, Users, FileSearch, Calculator, Layers,
  FileCheck, HelpCircle, Brain, FileText, Presentation, MessageSquare, Shuffle,
  Send, Calendar, Shield, Rocket, ClipboardList, Gift, BookOpen, CheckSquare,
  HeartPulse, TrendingUp, RotateCw, ClipboardCheck, AlertTriangle, MessageCircle,
  Map, Search, GraduationCap, Compass, Bot, LucideIcon
} from 'lucide-react';
import { Assistant, getCategoryConfig } from '@/data/assistants';

const iconMap: Record<string, LucideIcon> = {
  Radar, Mail, Bell, Target, RefreshCw, Users, FileSearch, Calculator, Layers,
  FileCheck, HelpCircle, Brain, FileText, Presentation, MessageSquare, Shuffle,
  Send, Calendar, Shield, Rocket, ClipboardList, Gift, BookOpen, CheckSquare,
  HeartPulse, TrendingUp, RotateCw, ClipboardCheck, AlertTriangle, MessageCircle,
  Map, Search, GraduationCap, Compass, Bot
};

interface AssistantCardProps {
  assistant: Assistant;
}

export function AssistantCard({ assistant }: AssistantCardProps) {
  const config = getCategoryConfig(assistant.category, assistant.side);
  const IconComponent = iconMap[assistant.icon] || Bot;

  return (
    <div 
      className="relative group cursor-pointer rounded-xl border overflow-hidden transition-all duration-200 hover:scale-[1.02]"
      style={{ 
        backgroundColor: config.bgColor,
        borderColor: config.color,
        borderWidth: '1px',
      }}
    >
      {/* New badge */}
      {assistant.isNew && (
        <div 
          className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold rounded-full"
          style={{ backgroundColor: config.color, color: '#0A0A0A' }}
        >
          NEW
        </div>
      )}
      
      <div className="p-5">
        {/* Icon */}
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${config.color}20` }}
        >
          <IconComponent className="w-6 h-6" style={{ color: config.color }} />
        </div>
        
        {/* Category badge */}
        <div 
          className="inline-block px-2 py-0.5 text-xs font-medium rounded mb-2"
          style={{ backgroundColor: `${config.color}30`, color: config.color }}
        >
          {config.label}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {assistant.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2">
          {assistant.description}
        </p>
      </div>
      
      {/* Hover overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
        style={{ backgroundColor: `${config.color}10` }}
      >
        <span 
          className="px-4 py-2 rounded-lg font-medium text-sm"
          style={{ backgroundColor: config.color, color: '#0A0A0A' }}
        >
          Utiliser
        </span>
      </div>
    </div>
  );
}
