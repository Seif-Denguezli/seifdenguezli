import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  redPelicans,
  valomnia,
  caseTunisia,
  materialUi,
  next,
  clerk,
  cloudinary,
  stripe,
  sanity,
  jenkins,
  sonarqube,
  nexus,
  grafana,
  prometheus,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  ai_showcase1,
  ai_showcase2,
  ai_showcase3,
  ai_showcase4,
  ai_showcase5,
  ai_showcase6,
  ai_showcase7,
  sm_showcase1,
  sm_showcase2,
  sm_showcase3,
  sm_showcase4,
  sm_showcase5,
  song_showcase1,
  song_showcase2,
  song_showcase3,
  opti_showcase1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "CI/CD Integration",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "RedPelicans",
    icon: redPelicans,
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    company_name: "CASE Tunisia",
    icon: caseTunisia,
    iconBg: "#383E56",
    date: "May 2022 - September 2022",
    points: [
      "Spearheaded the design and development of a dynamic scheduling management platform catering to diverse user profiles.",
      "Assumed a pivotal role in shaping the architectural framework of the platform, employing a modular and scalable design approach for enhanced flexibility and accommodating a myriad of functionalities.",
      "Gained hands-on experience with full-stack development, utilizing a range of technologies and tools to deliver a robust and user-friendly solution.",
    ],
  },

  {
    title: "Web Developer Intern",
    company_name: "Valomnia",
    icon: valomnia,
    iconBg: "#E6DEDD",
    date: "May 2021 - September 2021",
    points: [
      "Designed and built a web application specializing in contract management and facilitating the selection of phone offers",
      "Demonstrated a keen understanding of business requirements by translating them into functional and intuitive features within the web application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Xplor",
    header:
      "Transforming Statistical Data Management: Xplor - Empowering Insights with Seamless SDMX Compliance.",
    description:
      "Xplor is a cutting-edge web platform, offering seamless manipulation, visualization, and sharing of statistical data adhering to the SDMX standard. This robust solution ensures data integrity, advanced SDMX artifact management, and granular visibility, empowering users to explore and analyze datasets with unparalleled flexibility and efficiency.",
    tags: [
      {
        name: "javascript",
        color: "green-text-gradient",
        image: javascript,
      },
      {
        name: "react",
        color: "blue-text-gradient",
        image: reactjs,
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        image: mongodb,
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
        image: materialUi,
      },
    ],
    image: showcase2,
    source_code_link: null,
    showcase_images: [showcase1, showcase2, showcase3, showcase4, showcase5],
    website_link: null,
  },
  {
    name: "BetterWithAI",
    header:
      "Revolutionize Your Visuals with BetterWithAI - Unleashing AI-Driven Image Transformation SaaS !",
    description:
      "Embark on a journey into the future of creative expression with BetterWithAI, a cutting-edge SaaS application. By seamlessly integrating artificial intelligence, Cloudinary, and innovative image processing technologies using Javascript, Typescript, NextJS, and TailwindCSS, BetterWithAI transforms ordinary images into extraordinary visual experiences. Say goodbye to the ordinary and embrace a new era of creativity and efficiency, where AI meets transformative image processing for unprecedented visual impact.",
    tags: [
      {
        name: "typescript",
        color: "green-text-gradient",
        image: typescript,
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
        image: next,
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
        image: tailwind,
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
        image: mongodb,
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
        image: clerk,
      },
      {
        name: "stripe",
        color: "green-text-gradient",
        image: stripe,
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
        image: cloudinary,
      },
    ],
    image: ai_showcase2,
    source_code_link: "https://github.com/Seif-Denguezli/BetterWithAI",
    showcase_images: [
      ai_showcase1,
      ai_showcase2,
      ai_showcase3,
      ai_showcase4,
      ai_showcase5,
      ai_showcase6,
      ai_showcase7,
    ],
    website_link: "https://better-with-ai.vercel.app/",
  },
  {
    name: "ShareMe",
    header:
      "Share the Moment, Share the World - Introducing ShareMe, Your Dynamic Social Sharing Platform !",
    description:
      "Experience the magic of visual connection with ShareMe, an intricately designed social sharing platform. Crafted using Javascript, ReactJS, TailwindCSS, and powered by Sanity, ShareMe transcends traditional boundaries. Immerse yourself in a visual symphony where sharing images becomes an art form. With a user-friendly interface and seamless responsiveness, ShareMe is not just an app; it's a vibrant digital space where your inspirations come to life, connecting you with a global community in a celebration of shared moments.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
        image: javascript,
      },
      {
        name: "react",
        color: "green-text-gradient",
        image: reactjs,
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        image: tailwind,
      },
      {
        name: "sanity",
        color: "green-text-gradient",
        image: sanity,
      },
    ],
    image: sm_showcase1,
    source_code_link: "https://github.com/Seif-Denguezli/shareme-social",
    showcase_images: [sm_showcase2, sm_showcase3, sm_showcase4, sm_showcase5],
    website_link: "https://sd-shareme.netlify.app/",
  },
  {
    name: "Songify",
    header:
      "Discover the Rhythm of the World with Songify - Your Ultimate React.js Music Experience",
    description:
      "Songify, an elegant React.js Music Application, invites you to embark on a musical journey reminiscent of Spotify. Leveraging the power of ReactJS, Tailwind CSS, RapidAPI, and seamlessly integrating ShazamCore API, Songify brings you the latest global music charts. Immerse yourself in the sounds of trending tracks from around the world, creating a harmonious fusion of technology and musical discovery. Click here to experience the rhythm and elevate your music exploration with Songify, where every beat tells a global story.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
        image: javascript,
      },
      {
        name: "react",
        color: "green-text-gradient",
        image: reactjs,
      },
      {
        name: "redux",
        color: "pink-text-gradient",
        image: redux,
      },
    ],
    image: song_showcase1,
    source_code_link: "https://github.com/Seif-Denguezli/songify",
    showcase_images: [song_showcase2, song_showcase3],
    website_link: "https://sd-songify.netlify.app/",
  },
  {
    name: "Optiflow",
    header: "Optiflow - Elevating Software Delivery with DevOps Excellence !",
    description:
      "Optiflow, a DevOps-driven masterpiece, redefines the landscape of continuous integration for a cutting-edge Spring Boot and Angular application. Powered by Jenkins, Docker, SonarQube, Nexus, Grafana, and Prometheus, this project is a symphony of efficiency and reliability. From advanced CI/CD strategies to Docker encapsulation, experience the transformative journey where development cycles shrink, collaboration thrives, and software delivery reaches new heights. Explore the alchemy of DevOps, witness seamless integration, and embrace proactive monitoring - Optiflow ensures your application not only runs but soars at peak performance. Welcome to the future of software delivery excellence!",
    tags: [
      {
        name: "jenkins",
        color: "blue-text-gradient",
        image: jenkins,
      },
      {
        name: "sonarqube",
        color: "green-text-gradient",
        image: sonarqube,
      },
      {
        name: "nexus",
        color: "pink-text-gradient",
        image: nexus,
      },
      {
        name: "docker",
        color: "blue-text-gradient",
        image: docker,
      },
      {
        name: "grafana",
        color: "green-text-gradient",
        image: grafana,
      },
      {
        name: "prometheus",
        color: "pink-text-gradient",
        image: prometheus,
      },
    ],
    image: opti_showcase1,
    source_code_link: "https://github.com/Seif-Denguezli/achat-devops",
    showcase_images: [opti_showcase1],
    website_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };
