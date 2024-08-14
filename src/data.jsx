import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-blue-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-blue-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/9hqy7qxsk85h/4VQ4X1J2uwMXUSviYAcXxu/2bd6f1fdce86dce1a8df5ca2c2a36b5e/Screenshot_2024-07-27_012115.jpg',
    url: 'https://unsplash-gallery-search.netlify.app/',
    github: 'https://github.com/krsnavc/unsplash-gallery',
    title: 'unsplash gallery',
    text: 'This project is a React application featuring a dark mode toggle, search functionality using the Unsplash API, and dynamic photo gallery, utilizing React Query for efficient data fetching and caching.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/9hqy7qxsk85h/Hf9YPFYfh2CTYjHqW99rT/5eac678891e60abec24ccc557e3706ee/Screenshot_2024-08-02_005050.png',
    url: 'https://mate-ai.netlify.app/',
    github: 'https://github.com/krsnavc/MATE',
    title: 'MATE',
    text: "Developed 'Mate,' a social media platform using the MERN stack, enabling users to post tweets, follow others, and connect with family and friends, featuring an automated profanity filter.(backend-under-maintenance)",
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/9hqy7qxsk85h/6QjYtRY5vBVhzEvsrbXnFz/69a80f9b96d476dc4059c724afb529fd/Screenshot_2024-07-27_012136.png',
    url: 'https://react-vite-projects-9-color-generator.netlify.app/',
    github: 'https://github.com/krsnavc/color-code-generator',
    title: 'color code generator',
    text: 'This project features a color management app using React, allowing users to add colors, generate color palettes with Values.js, and copy hex values to the clipboard, enhanced with React-Toastify notifications.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/9hqy7qxsk85h/2gbFDc1TUdc6xrGv3FTrCo/e4b8065177a0e1630aec43bb0961ec6d/Screenshot_2024-08-02_010358.png',
    url: 'https://react-projects-krsnavc.netlify.app/',
    github: 'https://github.com/krsnavc/contentful_cms',
    title: 'contentful CMS',
    text: 'Developed a headless CMS that offers a user-friendly back-end for managing content, with separate front-end integration. This setup provides flexibility and scalability, allowing content distribution across various channels and devices.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/9hqy7qxsk85h/1pVOLvJQPDPH3Dk8OsjICW/3f5eedc319aac956ac7f05fca7b04424/Screenshot_2024-08-14_143738.png',
    url: 'https://mixmaster-a-cocktail-guide.netlify.app/',
    github: 'https://github.com/krsnavc/mixmaster',
    title: 'Mixmaster',
    text: 'MixMaster is a React-based Single-Page Application utilizing React Router for seamless navigation, fetching cocktail data from TheCocktailDB API, and styled with Styled Components for a polished, responsive design',
  },
];
