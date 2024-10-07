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
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 8,
    title: "Animated Apple Iphone 3D Website",
    des: "Created the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/three.svg",
      "/icon/gsap.svg",
    ],
    link: "https://sumit27x.github.io/iphone-animation/",
  },
  {
    id: 1,
    title: "Mtronics - Refurbished Laptop",
    des: "A user-friendly platform for finding quality refurbished laptops, ensuring affordability and reliability.",
    img: "/projects/laptop.svg",
    iconLists: [
      "/icon/elementor.svg",
      "/icon/woocommerce.svg",
      "/icon/wordpress.svg",
      "/icon/stripe.svg",
    ],
    link: "https://mtronics.in/",
  },
  {
    id: 6,
    title: "Moskeys - Tech Accessories Store",
    des: "Discover innovative tech accessories with secure payment methods for a hassle-free shopping experience",
    img: "/projects/keyboard.svg",
    iconLists: [
      "/icon/elementor.svg",
      "/icon/woocommerce.svg",
      "/icon/wordpress.svg",
      "/icon/stripe.svg",
    ],
    link: "https://dev.moskeys.com/",
  },
  {
    id: 3,
    title: "Urban Glamour - ECommerce Clouthing ",
    des: "Ecommerce platform offering diverse products, seamless transactions, and exceptional user experience for global customers.",
    img: "/projects/e-commerce.svg",
    iconLists: [
      "/icon/elementor.svg",
      "/icon/woocommerce.svg",
      "/icon/wordpress.svg",
      "/icon/stripe.svg",
    ],
    link: "https://urban-glamour.000.pe/",
  },

  {
    id: 1,
    title: "Car Showroom Application",
    des: "Find your perfect ride with CarHub. Browse an extensive range of vehicles, from luxury sedans to family SUVs. Compare features, check availability, and reserve your dream car online.",
    img: "/projects/car-showcase.svg",
    iconLists: [
      "/icon/re.svg",
      "/icon/next.svg",
      "/icon/ts.svg",
      "/icon/tail.svg",
      "/icon/fm.svg",
    ],
    link: "https://sumit27x.github.io/car-showcase/",
  },

  {
    id: 2,
    title: "Patient Management System",
    des: "Efficiently manage patient data and appointments, enhancing communication and care in healthcare settings.",
    img: "/projects/health-care.svg",
    iconLists: [
      "/icon/next.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/twilio.svg",
      "/icon/fm.svg",
    ],
    link: "https://sumit27x.github.io/paticent-platform/",
    // link: "https://nexus-chat-d576c.web.app/",
  },
  {
    id: 4,
    title: "Designer Platform - UI/UX web and App",
    des: "Track workouts and set fitness goals with an app designed to motivate and provide valuable health tips",
    img: "/projects/uiux.svg",
    iconLists: [
      "/icon/re.svg",
      "/icon/next.svg",
      "/icon/ts.svg",
      "/icon/tail.svg",
    ],
    link: "https://sumit27x.github.io/designer-platform/",
  },

  // {
  //   id: 4,
  //   title: "Permission And Notification App",
  //   des: "Track workouts and set fitness goals with an app designed to motivate and provide valuable health tips",
  //   img: "/projects/permission.svg",
  //   iconLists: [
  //     "/icon/next.svg",
  //     "/icon/tail.svg",
  //     "/icon/ts.svg",
  //     "/icon/stream.svg",
  //     "/icon/c.svg",
  //   ],
  //   link: "https://sumit27x.github.io/fitness-exercise/",
  // },
  {
    id: 5,
    title: "Neha Group (Real Estate)",
    des: "Engage in seamless property transactions through an intuitive web application that enhances the real estate experience.",
    img: "/projects/real-estate.svg",
    iconLists: [
      "/icon/elementor.svg",
      "/icon/woocommerce.svg",
      "/icon/wordpress.svg",
      "/icon/stripe.svg",
    ],
    link: "https://nehagroup.com/",
  },

  {
    id: 6,
    title: "Intime Tours - Travel Agency",
    des: "Your go-to travel agency for smooth bookings and unforgettable travel experiences, featuring secure payment options.",
    img: "/projects/travel.svg",
    iconLists: [
      "/icon/elementor.svg",
      "/icon/woocommerce.svg",
      "/icon/wordpress.svg",
      "/icon/stripe.svg",
    ],
    link: "https://www.intimetours.com/",
  },
  {
    id: 7,
    title: "Web 3.0 Cryptocurrency Exchange Decentralized Application",
    des: "A Uniswap decentralized cryptocurrency exchange React app with Metamask integration, live smart contract data, ERC20 token creation, and token swaps.",
    img: "/projects/web3.svg",
    iconLists: [
      "/icon/re.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/gsap.svg",
      "/icon/c.svg",
    ],
    link: "https://sumit27x.github.io/crypto-exchange",
  },
  {
    id: 7,
    title: "AI SaaS Podcast Platform",
    des: "An AI-powered SaaS podcast platform offering automated transcription, personalized recommendations, and advanced analytics for creators.",
    img: "/projects/podcast.svg",
    iconLists: [
      "/icon/re.svg",
      "/icon/tail.svg",
      "/icon/ts.svg",
      "/icon/three.svg",
      "/icon/c.svg",
    ],
    link: "https://sumit27x.github.io/saas-podcast/",
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
    name: "Keystone Cloud Technology",
    pos: "Freelance Full Stack Developer",
    duration: "April 2024 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/keystone.svg",
    animation: "victory",
    points: [
      "Build responsive and dynamic user interfaces using Next.js and GSAP for smooth animations and interactions.",
      "Build and maintain server-side logic using Node.js ensuring smooth API integration and data handling.",
      "Monitor and optimize the performance of the application post-deployment, identifying potential issues and improving efficiency.",
      "Customize and develop Wordpress websites, themes, and plugins tailored to specific client needs across various business sectors",
    ],
  },
  {
    id: 2,
    name: "Vocvision",
    pos: "Frontend Developer Intern",
    duration: "September 2023 - March 2024",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/46.svg",
    animation: "clapping",
    points: [
      "Developed user-friendly interfaces using React.js, leading to a 60% increase in user interaction. ",
      "Reduced integration issues by 45% through effective collaboration with backend and frontend teams. web experiences for specific campaigns or projects",
      "Work closely with senior developers and designers, participating in code reviews, discussions, and feedbacksessions to enhance your development skills.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
