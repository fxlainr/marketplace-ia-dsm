export type CategoryClient = 'prospection' | 'qualification' | 'proposition' | 'lancement' | 'fidelisation';
export type CategoryTalent = 'sourcing' | 'evaluation' | 'positionnement' | 'integration' | 'accompagnement';
export type Category = CategoryClient | CategoryTalent;
export type Side = 'client' | 'talent';

export interface Assistant {
  id: string;
  name: string;
  description: string;
  category: Category;
  side: Side;
  icon: string;
  isNew?: boolean;
}

export const categoryConfigClient: Record<CategoryClient, { label: string; color: string; bgColor: string }> = {
  prospection: { label: 'Prospection', color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.15)' },
  qualification: { label: 'Qualification', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.15)' },
  proposition: { label: 'Proposition', color: '#EC4899', bgColor: 'rgba(236, 72, 153, 0.15)' },
  lancement: { label: 'Lancement', color: '#F97316', bgColor: 'rgba(249, 115, 22, 0.15)' },
  fidelisation: { label: 'Fidélisation', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)' },
};

export const categoryConfigTalent: Record<CategoryTalent, { label: string; color: string; bgColor: string }> = {
  sourcing: { label: 'Sourcing', color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.15)' },
  evaluation: { label: 'Évaluation', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.15)' },
  positionnement: { label: 'Positionnement', color: '#EC4899', bgColor: 'rgba(236, 72, 153, 0.15)' },
  integration: { label: 'Intégration', color: '#F97316', bgColor: 'rgba(249, 115, 22, 0.15)' },
  accompagnement: { label: 'Accompagnement', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)' },
};

export const getCategoryConfig = (category: Category, side: Side) => {
  if (side === 'client') {
    return categoryConfigClient[category as CategoryClient] || categoryConfigClient.prospection;
  }
  return categoryConfigTalent[category as CategoryTalent] || categoryConfigTalent.sourcing;
};

export const assistants: Assistant[] = [
  // ============================================
  // CLIENT - PROSPECTION
  // ============================================
  { id: 'radar-bizdev', name: 'Radar Bizdev', description: 'Détecte les signaux d\'achat sur LinkedIn (recrutements, levées de fonds, projets IT)', category: 'prospection', side: 'client', icon: 'Radar', isNew: true },
  { id: 'cold-mailer', name: 'Cold Mailer', description: 'Génère des séquences d\'emails personnalisés selon le secteur et l\'interlocuteur', category: 'prospection', side: 'client', icon: 'Mail' },
  { id: 'veilleur-ao', name: 'Veilleur AO', description: 'Scrute les appels d\'offres publics et te notifie des opportunités', category: 'prospection', side: 'client', icon: 'Bell' },
  
  // CLIENT - QUALIFICATION
  { id: 'brief-decoder', name: 'Brief Decoder', description: 'Transforme un besoin client flou en fiche de poste structurée', category: 'qualification', side: 'client', icon: 'FileSearch', isNew: true },
  { id: 'sizing-advisor', name: 'Sizing Advisor', description: 'Estime la charge et le budget à partir d\'un périmètre fonctionnel', category: 'qualification', side: 'client', icon: 'Calculator' },
  { id: 'stack-detector', name: 'Stack Detector', description: 'Identifie l\'environnement technique du client à partir de son site/LinkedIn', category: 'qualification', side: 'client', icon: 'Layers' },
  
  // CLIENT - PROPOSITION
  { id: 'propale-express', name: 'Propale Express', description: 'Génère une proposition commerciale à partir du brief client', category: 'proposition', side: 'client', icon: 'FileText' },
  { id: 'pitch-builder', name: 'Pitch Builder', description: 'Prépare les slides de soutenance avec les arguments clés', category: 'proposition', side: 'client', icon: 'Presentation' },
  { id: 'nego-coach', name: 'Nego Coach', description: 'Simule les objections client et propose des réponses', category: 'proposition', side: 'client', icon: 'MessageSquare' },
  
  // CLIENT - LANCEMENT
  { id: 'contrat-checker', name: 'Contrat Checker', description: 'Vérifie les points de vigilance dans un contrat client', category: 'lancement', side: 'client', icon: 'Shield' },
  { id: 'kickoff-planner', name: 'Kick-off Planner', description: 'Génère l\'ordre du jour et les livrables du démarrage mission', category: 'lancement', side: 'client', icon: 'Rocket' },
  { id: 'admin-express', name: 'Admin Express', description: 'Prépare les documents administratifs (bon de commande, convention)', category: 'lancement', side: 'client', icon: 'ClipboardList' },
  
  // CLIENT - FIDÉLISATION
  { id: 'satisfaction-pulse', name: 'Satisfaction Pulse', description: 'Prépare les questions du point de suivi client', category: 'fidelisation', side: 'client', icon: 'HeartPulse' },
  { id: 'upsell-detector', name: 'Upsell Detector', description: 'Identifie les opportunités d\'extension ou de nouvelle mission', category: 'fidelisation', side: 'client', icon: 'TrendingUp' },
  { id: 'renewal-reminder', name: 'Renewal Reminder', description: 'Alerte sur les fins de contrat et prépare l\'argumentaire renouvellement', category: 'fidelisation', side: 'client', icon: 'RotateCw' },

  // ============================================
  // TALENT - SOURCING
  // ============================================
  { id: 'sourcing-sniper', name: 'Sourcing Sniper', description: 'Rédige des messages d\'approche LinkedIn adaptés au profil du candidat', category: 'sourcing', side: 'talent', icon: 'Target' },
  { id: 'vivier-booster', name: 'Vivier Booster', description: 'Réactive les anciens candidats avec un message personnalisé', category: 'sourcing', side: 'talent', icon: 'RefreshCw' },
  { id: 'coopt-helper', name: 'Coopt Helper', description: 'Aide les consultants à rédiger leurs recommandations de cooptation', category: 'sourcing', side: 'talent', icon: 'Users' },
  
  // TALENT - ÉVALUATION
  { id: 'cv-screener', name: 'CV Screener', description: 'Analyse un CV et donne un score de matching avec un besoin', category: 'evaluation', side: 'talent', icon: 'FileCheck' },
  { id: 'tech-quizzer', name: 'Tech Quizzer', description: 'Génère des questions techniques adaptées au profil à évaluer', category: 'evaluation', side: 'talent', icon: 'HelpCircle' },
  { id: 'soft-skills-radar', name: 'Soft Skills Radar', description: 'Prépare les questions d\'entretien comportemental', category: 'evaluation', side: 'talent', icon: 'Brain' },
  
  // TALENT - POSITIONNEMENT
  { id: 'match-maker', name: 'Match Maker', description: 'Suggère les meilleurs profils du vivier pour un besoin', category: 'positionnement', side: 'talent', icon: 'Shuffle', isNew: true },
  { id: 'profil-pitcher', name: 'Profil Pitcher', description: 'Rédige le mail de présentation candidat au client', category: 'positionnement', side: 'talent', icon: 'Send' },
  { id: 'dispo-tracker', name: 'Dispo Tracker', description: 'Résume les disponibilités et TJM des consultants en intercontrat', category: 'positionnement', side: 'talent', icon: 'Calendar' },
  
  // TALENT - INTÉGRATION
  { id: 'onboarding-kit', name: 'Onboarding Kit', description: 'Génère le welcome pack personnalisé pour le consultant', category: 'integration', side: 'talent', icon: 'Gift' },
  { id: 'mission-briefer', name: 'Mission Briefer', description: 'Résume le contexte client et les attentes pour le consultant', category: 'integration', side: 'talent', icon: 'BookOpen' },
  { id: 'logistique-helper', name: 'Logistique Helper', description: 'Checklist équipement, accès, badges, outils', category: 'integration', side: 'talent', icon: 'CheckSquare' },
  
  // TALENT - ACCOMPAGNEMENT
  { id: 'mission-check', name: 'Mission Check', description: 'Génère le compte-rendu de suivi consultant', category: 'accompagnement', side: 'talent', icon: 'ClipboardCheck' },
  { id: 'alert-detector', name: 'Alert Detector', description: 'Analyse les signaux faibles (désengagement, insatisfaction)', category: 'accompagnement', side: 'talent', icon: 'AlertTriangle' },
  { id: 'feedback-compiler', name: 'Feedback Compiler', description: 'Synthétise les retours client pour l\'évaluation consultant', category: 'accompagnement', side: 'talent', icon: 'MessageCircle' },
  { id: 'career-planner', name: 'Career Planner', description: 'Construit le plan de développement avec le consultant', category: 'accompagnement', side: 'talent', icon: 'Map' },
  { id: 'skill-gap-finder', name: 'Skill Gap Finder', description: 'Identifie les compétences à développer vs le marché', category: 'accompagnement', side: 'talent', icon: 'Search' },
  { id: 'formation-advisor', name: 'Formation Advisor', description: 'Recommande des certifications et formations adaptées', category: 'accompagnement', side: 'talent', icon: 'GraduationCap' },
  { id: 'intercontrat-coach', name: 'Intercontrat Coach', description: 'Propose des missions internes ou montées en compétences', category: 'accompagnement', side: 'talent', icon: 'Compass', isNew: true },
  { id: 'entretien-prep', name: 'Entretien Annuel Prep', description: 'Prépare la trame et les points à aborder', category: 'accompagnement', side: 'talent', icon: 'ClipboardList' },
];
