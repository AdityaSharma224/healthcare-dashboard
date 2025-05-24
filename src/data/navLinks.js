import { BarChart3, Clock, Calendar, Users, Activity, Heart, MessageCircle, HelpCircle, Settings } from 'lucide-react';

export const navigationItemsGeneral = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: Clock, label: 'History', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: Users, label: 'Appointments', active: false },
  { icon: Activity, label: 'Statistics', active: false },
  { icon: Heart, label: 'Tests', active: false },
];

export const navigationItemsTools = [
  { icon: MessageCircle, label: 'Chat', active: false },
  { icon: HelpCircle, label: 'Support', active: false },
  { icon: Settings, label: 'Setting', active: false }
]