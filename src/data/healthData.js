import Lungs from "../assets/lungs.png"
import Tooth from '../assets/tooth.png'
import Zeroa from '../assets/Zeroa.png'

export const healthStatusData = [
  {
    organ: 'Lungs',
    icon: Lungs,
    status: 'issue',
    date: 'Tue, 26 Oct 2021',
    progress: 85
  },
  {
    organ: 'Teeth',
    icon: Tooth,
    status: 'healthy',
    date: 'Tue, 26 Oct 2021',
    progress: 60
  },
  {
    organ: 'Bone',
    icon: Zeroa,
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