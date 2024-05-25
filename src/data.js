//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/blood.PNG';
import Project2 from './assets/img/projects/josocial.PNG';
import Project3 from './assets/img/projects/billing.PNG';
import Project4 from './assets/img/projects/student.PNG';
import Project5 from './assets/img/projects/cal.PNG';
import Project6 from './assets/img/projects/eid.PNG';
import Project7 from './assets/img/projects/thesis.png';
import Project8 from './assets/img/projects/cycle-zone.jpg';
import Project9 from './assets/img/projects/dashboard.png';

// Travels images
import rang1 from './assets/img/Travels/rang 1.jpg'
import rang2 from './assets/img/Travels/rang 2.jpg'
import rang3 from './assets/img/Travels/rang 3.jpg'
import rang4 from './assets/img/Travels/rang 4.jpg'
import rang5 from './assets/img/Travels/rang 5.jpg'
import rang6 from './assets/img/Travels/rang thumnail.jpg'

import ban1 from './assets/img/Travels/ban 1.jpg'
import ban2 from './assets/img/Travels/ban 2.jpg'
import ban3 from './assets/img/Travels/ban 3.jpg'
import ban4 from './assets/img/Travels/ban 4.jpg'
import ban5 from './assets/img/Travels/ban 5.jpg'
import ban7 from './assets/img/Travels/ban.jpg'

import cox1 from './assets/img/Travels/cox 1.jpg'
import cox2 from './assets/img/Travels/cox 2.jpg'
import cox3 from './assets/img/Travels/cox.jpg'

import sit1 from './assets/img/Travels/sit 3.jpg'
import sit2 from './assets/img/Travels/sit 2.jpg'
import sit3 from './assets/img/Travels/sit 1.jpg'
// import ban1 from './assets/img/Travels/ban 5.jpg'

// skills images
import SkillImg1 from './assets/img/skills/c.png';
import SkillImg2 from './assets/img/skills/java.png';
import SkillImg3 from './assets/img/skills/js1.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import Bachelor_certificate from './assets/img/testimonials/Bachelor Certificate.jpg'
import TestiImage1 from './assets/img/testimonials/ds.PNG';
import TestiImage2 from './assets/img/testimonials/projec-show.jfif';
import TestiImage3 from './assets/img/testimonials/testing.PNG';
import TestiImage4 from './assets/img/testimonials/rover-scout.jpg';
import emailWritting from './assets/img/testimonials/email writting.png'
// Components


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'project',
    href: 'project',
  },
  {
    name: 'education',
    href: 'education',
  },
  {
    name: 'certificate',
    href: 'certificate',
  },
  {
    name: 'travels',
    href: 'travels',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/md-jobayed-hossain-rabbi-aa4072200/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/jobayed80',
  },

  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/Jobayed.102/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/jobayed_hossain_rabbi/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Blood Management',
    category: 'Java',
  },
  {
    id: '2',
    image: Project2,
    name: 'JoSocial',
    category: 'Web Designing',
  },
  {
    id: '3',
    image: Project8,
    name: 'University Cycle Zones',
    category: 'Web Designing',
  },
  {
    id: '4',
    image: Project9,
    name: 'Medicine Reminder',
    category: 'Web Designing',
  },
  {
    id: '5',
    image: Project3,
    name: 'Billing Management',
    category: 'Java',
  },
  {
    id: '6',
    image: Project4,
    name: 'Student Management',
    category: 'C Programming',
  },
  {
    id: '7',
    image: Project5,
    name: 'Calculator',
    category: 'Java',
  },
  {
    id: '8',
    image: Project6,
    name: 'Eid Mubarak Text Animation',
    category: 'C Programming',
  },
  {
    id: '9',
    image: Project7,
    name: 'Subtype Classification using Gene Expression Data',
    category: 'Thesis',
  },
 
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Java', 
  },
  {
    name: 'C Programming',
  },
  {
    name: 'Web Designing',
  },
  {
    name: 'Thesis',
  },

];


// travels
export const TravelsData = [
  {
    id: '1',
    image: rang1,
    name: '1 Blood Management',
    category: 'Rangamati',
  },
  {
    id: '2',
    image: rang2,
    name: '2 JoSocial',
    category: 'Rangamati',
  },
  {
    id: '3',
    image: rang3,
    name: '3 University Cycle Zones',
    category: 'Rangamati',
  },
  {
    id: '4',
    image: rang4,
    name: 'Medicine Reminder',
    category: 'Rangamati',
  },
  {
    id: '5',
    image: rang5,
    name: 'Medicine Reminder',
    category: 'Rangamati',
  },
  {
    id: '6',
    image: rang6,
    name: 'Medicine Reminder',
    category: 'Rangamati',
  },
  {
    id: '7',
    image: ban1,
    name: 'Medicine Reminder',
    category: 'Bandarban',
  },
  {
    id: '8',
    image: ban2,
    name: 'Medicine Reminder',
    category: 'Bandarban',
  },
  {
    id: '9',
    image: ban7,
    name: 'Medicine Reminder',
    category: 'Bandarban',
  },
  {
    id: '10',
    image: ban3,
    name: 'Medicine Reminder',
    category: 'Bandarban',
  },
  {
    id: '11',
    image: ban4,
    name: 'Medicine Reminder',
    category: 'Bandarban',
  },
  {
    id: '12',
    image: ban5,
    name: 'Medicine Reminder',
    category: 'Bandarban',
  },
  {
    id: '13',
    image: cox1,
    name: 'Medicine Reminder',
    category: 'Coxs Bazar',
  },
  {
    id: '14',
    image: cox2,
    name: 'Medicine Reminder',
    category: 'Coxs Bazar',
  },
  {
    id: '15',
    image: cox3,
    name: 'Medicine Reminder',
    category: 'Coxs Bazar',
  },
  {
    id: '16',
    image: sit1,
    name: 'Medicine Reminder',
    category: 'Sitakunda',
  },
  {
    id: '17',
    image: sit2,
    name: 'Medicine Reminder',
    category: 'Sitakunda',
  },
  {
    id: '18',
    image: sit3,
    name: 'Medicine Reminder',
    category: 'Sitakunda',
  },
 
  
];

// projects
export const TravelsNav = [
  {
    name: 'All',
  },
  {
    name: 'Rangamati', 
  },
  {
    name: 'Bandarban',
  },
  {
    name: 'Coxs Bazar',
  },
  {
    name: 'Sitakunda',
  },

];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    sticker:'&#128512',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
      sticker:'🥰',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
      sticker:'🥰',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
      sticker:'🥰',
  },
];

// testimonials
export const testimonials = [
  
  
  {
    authorImg: TestiImage1,
    authorText:
      'For Participant in Data Science Summit 2020 workshop on Python, R Programming and SQL held on 22-23 November, 2020',
      authorName: 'Data Science Summit 2020',
    authorPosition: 'Daffodil International University',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Participant of the "Project Showcasing" event in the 12th year Celebration on 05 December 2022 organized by Department of Software Engineering.',
    authorName: 'Project Showcassing',
    authorPosition: 'Daffodil International University',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Software testing is the process of evaluating and verifying that a software product or application does what it’s supposed to do.',
    authorName: 'Introduction to Software Testing',
    authorPosition: 'Coursera',
  },
  {
    authorImg: TestiImage4,
    authorText:
      'A Bangladesh Rover Scout is a young adult member of the Bangladesh Scouts, aged 17-25, focused on community service, outdoor activities, leadership, and personal growth.',
    authorName: 'Bangladesh Rover Scout',
    authorPosition: 'Aftab Uddin School and College',
  },
  {
    authorImg: emailWritting,
    authorText:
      'Email writing involves composing messages with audience consideration, clarity, and adherence to etiquette and formatting.',
    authorName: 'Email Writing',
    authorPosition: '10 Minute School',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at jobayed35-2948@diu.edu.bd',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Md. Jobayed Hossain Rabbi, Dhaka,Bangladesh',
    description: 'Serving clients worldwide',
  },
];
