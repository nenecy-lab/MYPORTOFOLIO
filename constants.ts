import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3 / Tailwind', level: 90, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'React Native', level: 75, category: 'mobile' },
  { name: 'PHP', level: 70, category: 'backend' },
  { name: 'MySQL', level: 75, category: 'backend' },
  { name: 'Git / GitHub', level: 85, category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SolidAir',
    description: 'Une application solidaire construite avec React Native et Supabase pour connecter les bénévoles.',
    image: 'https://picsum.photos/seed/solidair/600/400',
    tags: ['React Native', 'Supabase', 'Mobile'],
  },
  {
    id: 2,
    title: 'OptiRoute',
    description: 'Application de planification d’itinéraire intelligent optimisant les trajets quotidiens.',
    image: 'https://picsum.photos/seed/optiroute/600/400',
    tags: ['React', 'Maps API', 'Algorithm'],
  },
  {
    id: 3,
    title: 'Recettes du Monde',
    description: 'Une application mobile responsive présentant des plats culturels diversifiée.',
    image: 'https://picsum.photos/seed/food/600/400',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 4,
    title: 'Daily Motivation',
    description: 'Web App simple générant des citations inspirantes quotidiennes.',
    image: 'https://picsum.photos/seed/motivation/600/400',
    tags: ['React', 'API', 'Design'],
  },
];