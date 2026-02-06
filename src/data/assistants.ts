export type Category = 'prospection' | 'qualification' | 'proposition' | 'lancement' | 'suivi' | 'carriere';
export type Side = 'client' | 'talent';

export interface Assistant {
  id: string;
  name: string;
  description: string;
  category: Category;
  side: Side;
  icon: string; // Lucide icon name
  isNew?: boolean;
}

export const categoryConfig: Record<Category, { label: string; color: string; bgColor: string }> = {
  prospection: { label: 'Prospection', color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.15)' },
  qualification: { label: 'Qualification', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.15)' },
  proposition: { label: 'Proposition', color: '#EC4899', bgColor: 'rgba(236, 72, 153, 0.15)' },
  lancement: { label: 'Lancement', color: '#F97316', bgColor: 'rgba(249, 115, 22, 0.15)' },
  suivi: { label: 'Suivi', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)' },
  carriere: { label: 'Carrière', color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.15)' },
};

export const assistants: Assistant[] = [
  // PROSPECTION - Client
  { id: 'radar-bizdev', name: 'Radar Bizdev', description: 'Détecte les signaux d\'achat sur LinkedIn (recrutements, levées de fonds, projets IT)', category: 'prospection', side: 'client', icon: 'Radar', isNew: true },
  { id: 'cold-mailer', name: 'Cold Mailer', description: 'Génère des séquences d\'emails personnalisés selon le secteur et l\'interlocuteur', category: 'prospection', side: 'client', icon: 'Mail' },
  { id: 'veilleur-ao', name: 'Veilleur AO', description: 'Scrute les appels d\'offres publics et te notifie des opportunités', category: 'prospection', side: 'client', icon: 'Bell' },
  
  // PROSPECTION - Talent
  { id: 'sourcing-sniper', name: 'Sourcing Sniper', description: 'Rédige des messages d\'approche LinkedIn adaptés au profil du candidat', category: 'prospection', side: 'talent', icon: 'Target' },
  { id: 'vivier-booster', name: 'Vivier Booster', description: 'Réactive les anciens candidats avec un message personnalisé', category: 'prospection', side: 'talent', icon: 'RefreshCw' },
  { id: 'coopt-helper', name: 'Coopt Helper', description: 'Aide les consultants à rédiger leurs recommandations de cooptation', category: 'prospection', side: 'talent', icon: 'Users' },
  
  // QUALIFICATION - Client
  { id: 'brief-decoder', name: 'Brief Decoder', description: 'Transforme un besoin client flou en fiche de poste structurée', category: 'qualification', side: 'client', icon: 'FileSearch', isNew: true },
  { id: 'sizing-advisor', name: 'Sizing Advisor', description: 'Estime la charge et le budget à partir d\'un périmètre fonctionnel', category: 'qualification', side: 'client', icon: 'Calculator' },
  { id: 'stack-detector', name: 'Stack Detector', description: 'Identifie l\'environnement technique du client à partir de son site/LinkedIn', category: 'qualification', side: 'client', icon: 'Layers' },
  
  // QUALIFICATION - Talent
  { id: 'cv-screener', name: 'CV Screener', description: 'Analyse un CV et donne un score de matching avec un besoin', category: 'qualification', side: 'talent', icon: 'FileCheck' },
  { id: 'tech-quizzer', name: 'Tech Quizzer', description: 'Génère des questions techniques adaptées au profil à évaluer', category: 'qualification', side: 'talent', icon: 'HelpCircle' },
  { id: 'soft-skills-radar', name: 'Soft Skills Radar', description: 'Prépare les questions d\'entretien comportemental', category: 'qualification', side: 'talent', icon: 'Brain' },
  
  // PROPOSITION - Client
  { id: 'propale-express', name: 'Propale Express', description: 'Génère une proposition commerciale à partir du brief client', category: 'proposition', side: 'client', icon: 'FileText' },
  { id: 'pitch-builder', name: 'Pitch Builder', description: 'Prépare les slides de soutenance avec les arguments clés', category: 'proposition', side: 'client', icon: 'Presentation' },
  { id: 'nego-coach', name: 'Nego Coach', description: 'Simule les objections client et propose des réponses', category: 'proposition', side: 'client', icon: 'MessageSquare' },
  
  // PROPOSITION - Talent
  { id: 'match-maker', name: 'Match Maker', description: 'Suggère les meilleurs profils du vivier pour un besoin', category: 'proposition', side: 'talent', icon: 'Shuffle', isNew: true },
  { id: 'profil-pitcher', name: 'Profil Pitcher', description: 'Rédige le mail de présentation candidat au client', category: 'proposition', side: 'talent', icon: 'Send' },
  { id: 'dispo-tracker', name: 'Dispo Tracker', description: 'Résume les disponibilités et TJM des consultants en intercontrat', category: 'proposition', side: 'talent', icon: 'Calendar' },
  
  // LANCEMENT - Client
  { id: 'contrat-checker', name: 'Contrat Checker', description: 'Vérifie les points de vigilance dans un contrat client', category: 'lancement', side: 'client', icon: 'Shield' },
  { id: 'kickoff-planner', name: 'Kick-off Planner', description: 'Génère l\'ordre du jour et les livrables du démarrage mission', category: 'lancement', side: 'client', icon: 'Rocket' },
  { id: 'admin-express', name: 'Admin Express', description: 'Prépare les documents administratifs (bon de commande, convention)', category: 'lancement', side: 'client', icon: 'ClipboardList' },
  
  // LANCEMENT - Talent
  { id: 'onboarding-kit', name: 'Onboarding Kit', description: 'Génère le welcome pack personnalisé pour le consultant', category: 'lancement', side: 'talent', icon: 'Gift' },
  { id: 'mission-briefer', name: 'Mission Briefer', description: 'Résume le contexte client et les attentes pour le consultant', category: 'lancement', side: 'talent', icon: 'BookOpen' },
  { id: 'logistique-helper', name: 'Logistique Helper', description: 'Checklist équipement, accès, badges, outils', category: 'lancement', side: 'talent', icon: 'CheckSquare' },
  
  // SUIVI - Client
  { id: 'satisfaction-pulse', name: 'Satisfaction Pulse', description: 'Prépare les questions du point de suivi client', category: 'suivi', side: 'client', icon: 'HeartPulse' },
  { id: 'upsell-detector', name: 'Upsell Detector', description: 'Identifie les opportunités d\'extension ou de nouvelle mission', category: 'suivi', side: 'client', icon: 'TrendingUp' },
  { id: 'renewal-reminder', name: 'Renewal Reminder', description: 'Alerte sur les fins de contrat et prépare l\'argumentaire renouvellement', category: 'suivi', side: 'client', icon: 'RotateCw' },
  
  // SUIVI - Talent
  { id: 'mission-check', name: 'Mission Check', description: 'Génère le compte-rendu de suivi consultant', category: 'suivi', side: 'talent', icon: 'ClipboardCheck' },
  { id: 'alert-detector', name: 'Alert Detector', description: 'Analyse les signaux faibles (désengagement, insatisfaction)', category: 'suivi', side: 'talent', icon: 'AlertTriangle' },
  { id: 'feedback-compiler', name: 'Feedback Compiler', description: 'Synthétise les retours client pour l\'évaluation consultant', category: 'suivi', side: 'talent', icon: 'MessageCircle' },
  
  // CARRIÈRE - Talent only
  { id: 'career-planner', name: 'Career Planner', description: 'Construit le plan de développement avec le consultant', category: 'carriere', side: 'talent', icon: 'Map' },
  { id: 'skill-gap-finder', name: 'Skill Gap Finder', description: 'Identifie les compétences à développer vs le marché', category: 'carriere', side: 'talent', icon: 'Search' },
  { id: 'formation-advisor', name: 'Formation Advisor', description: 'Recommande des certifications et formations adaptées', category: 'carriere', side: 'talent', icon: 'GraduationCap' },
  { id: 'intercontrat-coach', name: 'Intercontrat Coach', description: 'Propose des missions internes ou montées en compétences', category: 'carriere', side: 'talent', icon: 'Compass', isNew: true },
  { id: 'entretien-prep', name: 'Entretien Annuel Prep', description: 'Prépare la trame et les points à aborder', category: 'carriere', side: 'talent', icon: 'ClipboardList' },
];
