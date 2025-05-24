import { Heart, User, Activity } from 'lucide-react';

export const healthStatusData = [
  {
    organ: 'Lungs',
    icon: Heart,
    status: 'healthy',
    date: 'Tue, 26 Oct 2021',
    progress: 85
  },
  {
    organ: 'Teeth',
    icon: User,
    status: 'issue',
    date: 'Tue, 26 Oct 2021',
    progress: 60
  },
  {
    organ: 'Bone',
    icon: Activity,
    status: 'issue',
    date: 'Tue, 26 Oct 2021',
    progress: 70
  }
];

export const activityData = [
  { day: 'Mon', value: 4 },
  { day: 'Tue', value: 8 },
  { day: 'Wed', value: 6 },
  { day: 'Thu', value: 12 },
  { day: 'Fri', value: 9 },
  { day: 'Sat', value: 15 },
  { day: 'Sun', value: 7 }
];