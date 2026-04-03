import { link } from "fs";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Crafting an immersive 3D animation experience.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-72 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Soul Of Hospitality",
    des: "Hospitality & travel media platform showcasing industry insights and stories.",
    img: "/project/soh2.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/node.svg",
      "/icon/gsap.svg",
    ],
    link: "https://www.soulofhospitality.com/",
  },
  {
    id: 2,
    title: "Urbania Realty",
    des: "Luxury real estate website for premium residential developments.",
    img: "/project/urbania2.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/strapi.svg",
      "/icon/gsap.svg",
    ],
    link: "https://urbaniarealty.in/",
  },

  {
    id: 3,
    title: "NMIMS",
    des: "online education offering industry-focused degree and professional programs.",
    img: "/project/nmims1.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/node.svg",
      "/icon/gsap.svg",
    ],
    link: "https://online.nmims.edu/",
  },

  //   {
  //   id: 3,
  //   title: "HoliMela Lovebraj",
  //   des: "A grand Holi festival digital campaign project celebrating colors, culture, and the soul of Braj.",
  //   img: "/project/holimela-lovebraj.png",
  //   iconLists: [
  //     "/icon/next.svg",
  //     "/icon/bootstrap.svg",
  //     "/icon/js.svg",
  //     "/icon/laravel.svg",
  //     "/icon/gsap.svg",
  //   ],
  //   link: "https://holimela.lovebraj.com/",
  // },

        {
    id: 15,
    title: "MSE-Metropolitan Stock Exchange",
    des: "A dynamic and secure platform delivering seamless access to modern financial markets and trading.",
    img: "/project/mse.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/node.svg",
      "/icon/postgresql.svg",
    ],
    link: "https://uat.mseindia.com/",
  },
  {
    id: 4,
    title: "Simpolo",
    des: "Premium tiles and bathware brand website with product showcases.",
    img: "/project/simpolo.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/node.svg",
      "/icon/gsap.svg",
    ],
    link: "https://www.simpolo.com/",
  },
  {
    id: 5,
    title: "Begur",
    des: "Corporate law firm website with a focus on legal expertise and trust.",
    img: "/project/begur.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/gsap.svg",
      "/icon/strapi.svg",
    ],
    link: "https://www.begurs.com/",
  },

  {
    id: 6,
    title: "Soulinkk",
    des: "Digital media and publishing platform for branded content and storytelling.",
    img: "/project/soulnkk1.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/strapi.svg",
      "/icon/gsap.svg",
    ],
    link: "https://www.soulinkkworldwidemedia.com/",
  },

  {
    id: 7,
    title: "Bellwether Capital",
    des: "Professional investment and real estate capital firm website focused on growth, strategy, and long-term value.",
    img: "/project/bellwether.png",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/gsap.svg",
      "/icon/node.svg",
    ],
    link: "https://bellwethercapital.in/",
  },
  {
    id: 8,
    title: "Magus Fashion",
    des: "A modern fashion brand website showcasing collections, style, and contemporary design aesthetics.",
    img: "/project/magus.png",
    iconLists: [
      "/icon/html.svg",
      "/icon/bootstrap.svg",
      "/icon/js.svg",
      "/icon/wordpress.svg",
    ],
    link: "https://magus-fashion.vercel.app/",
  },
  // {
  //   id: 9,
  //   title: "TeleCRM",
  //   des: "A SaaS CRM platform designed to streamline sales calling, lead management, and team productivity.",
  //   img: "/project/telecrm.png",
  //   iconLists: ["/icon/next.svg", "/icon/bootstrap.svg", "/icon/node.svg"],
  //   link: "https://telecrm.in/",
  // },
      {
    id: 14,
    title: "Mindspace Fusion",
    des: "A sleek digital showcase for modern urban living, blending style, space, and smart design.",
    img: "/project/mindspace-fusion.png",
    iconLists: [
      "/icon/html.svg",
      "/icon/bootstrap.svg",
      "/icon/js.svg",
      "/icon/wordpress.svg",
    ],
    link: "https://www.mindspacefusion.com",
  },
  {
    id: 10,
    title: "Runwal Realty",
    des: "Premium real estate brand highlighting residential and commercial projects.",
    img: "/project/runwal.png",
    iconLists: [
      "/icon/html.svg",
      "/icon/tail.svg",
      "/icon/js.svg",
      // "/icon/three.svg",
      "/icon/gsap.svg",
    ],
    link: "https://runwalrealty.com/",
  },
  {
    id: 11,
    title: "RS Equipment",
    des: "professional healthcare equipment platform supplying quality hospital and medical solutions with trust and reliability.",
    img: "/project/rs.webp",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/node.svg",
      "/icon/gsap.svg",
    ],
    link: "https://rsequipment.com/",
  },
  {
    id: 12,
    title: "Trail Blazer Tours",
    des: "Travel and tourism website offering curated holiday experiences.",
    img: "/project/tbi.png",
    iconLists: [
      // "/icon/next.svg",
      "/icon/tail.svg",
      // "/icon/ts.svg",
      // "/icon/three.svg",
      "/icon/gsap.svg",
      "/icon/wordpress.svg",
    ],
    link: "https://trailblazertours.com/",
  },
  {
    id: 13,
    title: "Cignus Powai",
    des: "Real estate project website for a modern urban property.",
    img: "/project/cignus.png",
    iconLists: [
      "/icon/html.svg",
      "/icon/bootstrap.svg",
      "/icon/js.svg",
      "/icon/wordpress.svg",
    ],
    link: "https://www.cignuspowai.com/",
  },



];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sumit27x",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/sumit27x",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/sumitgupta27x",
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Kwebmaker",
    pos: "Frontend Developer",
    duration: "October 2024 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/Kweb_Logo.webp",
    animation: "victory",
    points: [
      "Architected web solutions for NMIMS Global, SOH Magazine, and Urbania Realty using Next.js, optimizing Core Web Vitals and handling 200K+ monthly visitors through ISR/​SSG strategies.",
      "Develop Microsites that deliver lightweight, user-friendly web experiences tailored to specific campaigns and projects. Improved application performance by 25% post-deployment by monitoring and optimizing performance. ",
      "Improved overall website performance and user experience by over 40% through advanced optimization techniques, proactive troubleshooting, and resolving complex frontend issues across multiple platforms.",
      "Reduced integration issues by 45% through effective collaboration with backend and frontend teams. web experiences for specific campaigns or projects",
      "Customize and develop Wordpress websites, themes, and plugins tailored to specific client needs across various business sectors.",
      // "Build responsive and dynamic user interfaces using Next.js and GSAP for smooth animations and interactions.",
      // "Build and maintain server-side logic using Node.js ensuring smooth API integration and data handling.",
      // "Monitor and optimize the performance of the application post-deployment, identifying potential issues and improving efficiency.",
      // "Customize and develop Wordpress websites, themes, and plugins tailored to specific client needs across various business sectors",
    ],
  },
  {
    id: 2,
    name: "Keystone Cloud Technology",
    pos: "Freelance Full Stack Developer",
    duration: "April 2024 - September 2024",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/keystone.svg",
    animation: "victory",
    points: [
      "Developed a scalable multi-role admin dashboard using Next.js, supporting role-based access for Super Admin, Admin, and Guards with secure permission control.",
      "Built responsive, high-performance user interfaces with Next.js, Tailwind CSS, and GSAP, delivering smooth animations and modern user experiences.",
      "Implemented key dashboard modules including HRM management, complaint handling systems, user profiles, and detailed reporting pages.",
      "Integrated interactive analytics and chart-based visualizations, enabling real-time insights through dynamic dashboard widgets.",
      "Optimized application performance and scalability through continuous monitoring, debugging, and post-deployment enhancements.",
      "Reduced integration issues by 45% through effective cross-team collaboration, clean code practices, and structured code reviews.",


      // "Build responsive and dynamic user interfaces using Next.js and GSAP for smooth animations and interactions.",
      // "Build and maintain server-side logic using Node.js ensuring smooth API integration and data handling.",
      // "Monitor and optimize the performance of the application post-deployment, identifying potential issues and improving efficiency.",
      // "Reduced integration issues by 45% through effective collaboration with backend teams.",
      // "Participating in code reviews and providing constructive feedback to other developers.",


      // "Customize and develop Wordpress websites, themes, and plugins tailored to specific client needs across various business sectors",

      //       "Build responsive and dynamic user interfaces using Next.js and GSAP for smooth animations and interactions.",
      // "Build and maintain server-side logic using Node.js ensuring smooth API integration and data handling.",
      // "Monitor and optimize the performance of the application post-deployment, identifying potential issues and improving efficiency.",
      // "Customize and develop Wordpress websites, themes, and plugins tailored to specific client needs across various business sectors",
    ],
  },
  // {
  //   id: 3,
  //   name: "Vocvision",
  //   pos: "Frontend Developer Intern",
  //   duration: "September 2023 - March 2024",
  //   title:
  //     "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //   icon: "/46.svg",
  //   animation: "clapping",
  //   points: [
  //     "Developed user-friendly interfaces using React.js, leading to a 60% increase in user interaction. ",
  //     "Reduced integration issues by 45% through effective collaboration with backend and frontend teams. web experiences for specific campaigns or projects",
  //     "Work closely with senior developers and designers, participating in code reviews, discussions, and feedbacksessions to enhance your development skills.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];
