import { HTML, CSS, Javascript, React } from "./../assets/index";
import { SQL, Wordpress, API, Next, Redux, Firebase } from "./../assets/index";
import { Git, Gitlab, Tailwind, Nodejs, MongoDB } from "./../assets/index";
import {
  Cryptocurrency,
  Music,
  Fitness,
  Ecommerce,
  Nike,
  Dashboard,
  Vocvision,
} from "./../assets/index";

import {
  AIvoice,
  MachineLearing,
  RealState,
  Chat,
  Weather,
  Blog,
} from "./../assets/index";

const Data = {
  experience: [
    {
      id: 1,
      date: "Sep 2023 - Mar 2024",
      position: "Frontend Developer Intern",
      image: Vocvision,
      company: "VocVision",
      point1:
        "Developing and maintaining web application using React.js and other related technologies.",
      point2: `Collaborating with cross-functional teams including designers, product managers,and other developers to create high-quality products.`,
      point3: `Implementing responsive design and ensuting cross-brower compatibility.`,
      point4: `Participating in code reviews and providing constructive feedback to other developers.`,
      point5: `Explore new tools and technologies, contribute ideas, and take initiative in
      their learning and professional growth.`,
    },
  ],

  // =========================================================================================================
  skill: [
    {
      id: 1,
      icon: HTML,
      name: "HTML5",
    },
    {
      id: 2,
      icon: CSS,
      name: "CSS3",
    },
    {
      id: 3,
      icon: Javascript,
      name: "Javascript",
    },
    {
      id: 4,
      icon: React,
      name: "React JS",
    },
    {
      id: 5,
      icon: Next,
      name: "Next JS",
    },
    {
      id: 6,
      icon: Redux,
      name: "Redux Toolkit",
    },
    {
      id: 7,
      icon: Tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      icon: Nodejs,
      name: "Node JS",
    },
    {
      id: 9,
      icon: MongoDB,
      name: "Mongo DB",
    },
    {
      id: 10,
      icon: Git,
      name: "Git",
    },
    {
      id: 11,
      icon: Gitlab,
      name: "Gitlab",
    },
    {
      id: 12,
      icon: Firebase,
      name: "Firebase",
    },
    {
      id: 13,
      icon: API,
      name: "Postman API",
    },
    {
      id: 14,
      icon: SQL,
      name: "SQL",
    },
    {
      id: 15,
      icon: Wordpress,
      name: "Wordpress",
    },
  ],


  // =========================================================================================================
  project: [
    {
      id: 1,
      name: "AI Voice Assistant",
      image: AIvoice,
      weblink: "https://sumit27x.github.io/voice-assistant",
      codelink: "https://github.com/sumit27x/voice-assistant",
      description: `AI-powered Voice Assistant News app designed to make everyday tasks easier and more efficient 
      for users.`,
    },
    {
      id: 2,
      name: "Machine Learning ",
      image: MachineLearing,
      weblink: "https://sumit27x.github.io/machine-learning",
      codelink: "https://github.com/sumit27x/machine-learning",
      description: `Machine learning for image recognition, recommendation 
      systems, and sentiment analysis on user reviews.`,
    },
    {
      id: 3,
      name: "Cryptocurrency",
      image: Cryptocurrency,
      weblink: "https://sumit27x.github.io/cryptocurrency",
      codelink: "https://github.com/sumit27x/cryptocurrency",
      description: `CryptoXchange aims to cater to both novice traders and seasoned investors in the ever-evolving
        world of digital assets.`,
    },
    {
      id: 4,
      name: "Blog Application",
      image: Blog,
      weblink: "https://sumit27x.github.io/blog-application",
      codelink: "https://github.com/sumit27x/blog-application",
      description: `CMS for managing dynamic content with features like user roles, permissions, 
      version control, and WYSIWYG editor integration. `,
    },
    {
      id: 5,
      name: "Realtime Chat App",
      image: Chat,
      weblink: "https://sumit27x.github.io/chat-app",
      codelink: "https://github.com/sumit27x/chat-app",
      description: `A real-time chat web app facilitating instant messaging between users, featuring 
      user authentication, messaging history, and responsive design.`,
    },

    {
      id: 6,
      name: "Real State",
      image: RealState,
      weblink: "https://sumit27x.github.io/real-state",
      codelink: "https://github.com/sumit27x/real-state",
      description: `Developing luxury condominiums with eco-friendly features, offering panoramic views,
       premium amenities, sustainable living for urban sophisticates`,
    },
    {
      id: 7,
      name: "E-commerce",
      image: Ecommerce,
      weblink: "https://sumit27x.github.io/ecommerce-website",
      codelink: "https://github.com/sumit27x/ecommerce-website",
      description: `Ecommerce platform offering diverse products, 
      seamless transactions, and exceptional user experience for global customers.`,
    },
    {
      id: 8,
      name: "Music Application",
      image: Music,
      weblink: "https://sumit27x.github.io/music-app",
      codelink: "https://github.com/sumit27x/music-app",
      description: `A customizable music player app with sleek interface, playlist management, equalizer,
       and offline playback for seamless music experience.`,
    },

    {
      id: 9,
      name: "Fitness App",
      image: Fitness,
      weblink: "https://sumit27x.github.io/fitness-exercise",
      codelink: "https://github.com/sumit27x/fitness-exercise",
      description: `A fitness application for track workouts, set goals, provide exercise routines, monitor progress,
       and offer health tips and motivation.`,
    },
    {
      id: 10,
      name: "Nike Clone App",
      image: Nike,
      weblink: "https://sumit27x.github.io/nike-clone",
      codelink: "https://github.com/sumit27x/nike-clone",
      description: `Developing a Nike web app for seamless shopping, personalized experiences, and 
      community engagement, enhancing the brand's digital presence`,
    },
    {
      id: 11,
      name: "Weather Forecast",
      image: Weather,
      weblink: "https://sumit27x.github.io/weather-forecast",
      codelink: "https://github.com/sumit27x/weather-forecast",
      description: `Weather forecast application displaying current conditions, hourly and daily 
      forecasts with user-friendly interface and reliable data sourcing.`,
    },
    {
      id: 12,
      name: "Admin Dashboard",
      image: Dashboard,
      weblink: "https://sumit27x.github.io/admin-dashboard",
      codelink: "https://github.com/sumit27x/admin-dashboard",
      description: `Dashboard visualize complex datasets in an interactive and user-friendly way. 
      Include features like filtering, sorting, and real-time updates.`,
    },
  ],
};

export default Data;
