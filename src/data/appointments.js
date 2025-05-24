import { Heart, Eye, Brain } from 'lucide-react';

export const upcomingAppointments = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: Heart, color: 'bg-purple-100' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: Eye, color: 'bg-purple-100' }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: Heart, color: 'bg-purple-100' },
      { title: 'Neurologist', time: '16:00 PM', icon: Brain, color: 'bg-purple-100' }
    ]
  }
];