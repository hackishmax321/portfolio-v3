// Tech icons data (reference for paths)
const techIcons = {
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ejs/ejs-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  stripe: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
  react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  fastapi: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
  arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  iot: "https://cdn-icons-png.flaticon.com/512/3095/3095583.png",
  tensorflow: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/960px-Tensorflow_logo.svg.png",
  scikitlearn: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  express: "https://cdn.worldvectorlogo.com/logos/expressjs.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  render: "https://cdn.worldvectorlogo.com/logos/render-dot-io.svg",
  railway: "https://cdn.worldvectorlogo.com/logos/railway-3.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
};

// Available tech tags with IDs and paths
const techTags = [
  { id: 1, name: "JavaScript", path: techIcons.javascript },
  { id: 2, name: "EJS", path: techIcons.ejs },
  { id: 3, name: "Node.js", path: techIcons.nodejs },
  { id: 4, name: "Firebase", path: techIcons.firebase },
  { id: 5, name: "Stripe", path: techIcons.stripe },
  { id: 6, name: "React", path: techIcons.react },
  { id: 7, name: "Python", path: techIcons.python },
  { id: 8, name: "MongoDB", path: techIcons.mongodb },
  { id: 9, name: "Jupyter", path: techIcons.jupyter },
  { id: 10, name: "FastAPI", path: techIcons.fastapi },
  { id: 11, name: "Arduino", path: techIcons.arduino },
  { id: 12, name: "C", path: techIcons.c },
  { id: 13, name: "IoT", path: techIcons.iot },
  { id: 14, name: "TensorFlow", path: techIcons.tensorflow },
  { id: 15, name: "scikit-learn", path: techIcons.scikitlearn },
  { id: 16, name: "OpenCV", path: techIcons.opencv },
  { id: 17, name: "Express.js", path: techIcons.express },
  { id: 18, name: "HTML5", path: techIcons.html5 },
  { id: 19, name: "CSS3", path: techIcons.css3 },
  { id: 20, name: "Bootstrap", path: techIcons.bootstrap },
  { id: 21, name: "Git", path: techIcons.git },
  { id: 22, name: "GitHub", path: techIcons.github },
  { id: 23, name: "Render", path: techIcons.render },
  { id: 24, name: "Railway", path: techIcons.railway },
  { id: 25, name: "Docker", path: techIcons.docker }
];

const projects = [
  {
    id: 1,
    title: "Vehicle Renting Service",
    description: "An all-in-one vehicle renting service platform in Australia, offering seamless booking of cars, vans, and other vehicles. Features include real-time availability, secure user authentication, rental history tracking, and integrated payment processing for a smooth and convenient rental experience.",
    longDescription: "Cairns Car Rentals is a comprehensive vehicle rental platform designed to simplify the car rental process. The platform features a responsive design, real-time vehicle availability tracking, secure user authentication, and integrated Stripe payment processing. Users can browse vehicles by category, view detailed specifications, make reservations, and manage their rental history through an intuitive dashboard.",
    tags: [
      techTags.find(t => t.name === "JavaScript"),
      techTags.find(t => t.name === "EJS"),
      techTags.find(t => t.name === "Node.js"),
      techTags.find(t => t.name === "Firebase"),
      techTags.find(t => t.name === "Stripe"),
      techTags.find(t => t.name === "HTML5"),
      techTags.find(t => t.name === "CSS3"),
      techTags.find(t => t.name === "Bootstrap"),
      techTags.find(t => t.name === "Git"),
      techTags.find(t => t.name === "GitHub")
    ].filter(Boolean),
    images: [
      "ncn-logo.png",
      "Screenshot_2025_08_09-1.png",
      "Screenshot_2025_08_09-2.png",
      "Screenshot_2025_08_09-4.png"
    ],
    features: [
      "Real-time vehicle availability tracking",
      "Secure user authentication & authorization",
      "Stripe payment gateway integration",
      "Responsive design for all devices",
      "Rental history & booking management",
      "Admin dashboard for vehicle management",
      "Email notifications for bookings"
    ],
    github: "https://github.com/pyxlelab/taxi-application.git",
    live: "https://cairnscarrentals.com",
    status: "Live",
    year: 2024,
    category: "Web Application"
  },
  {
    id: 2,
    title: "Education App for Disabled",
    description: "An education app that evaluates a user's knowledge through a tech-based survey, determines their proficiency level, and delivers personalized lessons and tests to enhance their skills progressively.",
    longDescription: "An inclusive educational platform designed specifically for individuals with disabilities. The application uses adaptive learning algorithms to assess users' current knowledge levels and provides personalized learning paths. Features include accessibility tools like screen readers, voice commands, and customizable UI for various disabilities. The platform continuously adapts difficulty levels based on user performance.",
    tags: [
      techTags.find(t => t.name === "React"),
      techTags.find(t => t.name === "Python"),
      techTags.find(t => t.name === "MongoDB"),
      techTags.find(t => t.name === "Jupyter"),
      techTags.find(t => t.name === "Node.js"),
      techTags.find(t => t.name === "Express.js"),
      techTags.find(t => t.name === "TensorFlow"),
      techTags.find(t => t.name === "HTML5"),
      techTags.find(t => t.name === "CSS3"),
      techTags.find(t => t.name === "Git"),
      techTags.find(t => t.name === "GitHub")
    ].filter(Boolean),
    images: [
      "edu-logo.png",
      "Screenshot_2025_07_14-14.png",
      "Screenshot_2025_07_14-12.png",
      "Screenshot_2025_07_14-10.png"
    ],
    features: [
      "Adaptive learning algorithm",
      "Accessibility features (screen reader, voice commands)",
      "Personalized learning paths",
      "Progress tracking & analytics",
      "Gamified learning experience",
      "Multi-language support",
      "Admin dashboard for content management"
    ],
    github: "https://github.com/pyxlelab/education-disabled-app.git",
    live: "https://eduspecial.app",
    status: "In Development",
    year: 2024,
    category: "Web Application"
  },
  {
    id: 3,
    title: "Cattle Management System",
    description: "This application enables farmers, veterinarians, and provincial administrators to efficiently manage cattle records, track milk production, detect diseases using AI-powered image classification, and forecast future milk yields based on weather and historical data via machine learning regression models.",
    longDescription: "A comprehensive cattle management platform that integrates IoT sensors, computer vision, and machine learning to optimize livestock management. The system provides real-time monitoring of cattle health, automated disease detection through image analysis, milk production forecasting, and comprehensive herd management tools. Designed for scalability, it serves individual farmers, veterinary clinics, and agricultural departments.",
    tags: [
      techTags.find(t => t.name === "React"),
      techTags.find(t => t.name === "Python"),
      techTags.find(t => t.name === "FastAPI"),
      techTags.find(t => t.name === "MongoDB"),
      techTags.find(t => t.name === "TensorFlow"),
      techTags.find(t => t.name === "scikit-learn"),
      techTags.find(t => t.name === "OpenCV"),
      techTags.find(t => t.name === "Jupyter"),
      techTags.find(t => t.name === "Docker"),
      techTags.find(t => t.name === "Render"),
      techTags.find(t => t.name === "Git"),
      techTags.find(t => t.name === "GitHub")
    ].filter(Boolean),
    images: [
      "catlem-logo.png",
      "Screenshot_2025_07_14-2.png",
      "Screenshot_2025_07_14-5.png",
      "Screenshot_2025_07_14-8.png"
    ],
    features: [
      "AI-powered disease detection from images",
      "Milk production forecasting using ML",
      "Real-time health monitoring with IoT sensors",
      "Multi-user role system (farmer, vet, admin)",
      "Data analytics dashboard",
      "Mobile-responsive design",
      "Automated report generation",
      "Weather integration for predictive analytics"
    ],
    github: "https://github.com/hackishmax321/cattle_y_frontend.git",
    backendGithub: "https://github.com/hackishmax321/cattle_y_backend.git",
    live: "https://cattle-y-frontend.onrender.com",
    apiDocs: "https://cattle-api.onrender.com/docs",
    status: "Live",
    year: 2024,
    category: "Full Stack + AI"
  },
  // {
  //   id: 4,
  //   title: "IoT Water Quality Monitoring System",
  //   description: "An IoT device created to measure water quality and other related parameters.",
  //   longDescription: "A smart water quality monitoring system that uses Arduino-based sensors to measure pH levels, turbidity, temperature, and TDS (Total Dissolved Solids) in real-time. The system transmits data to a cloud dashboard for analysis and alerts. Designed for municipal water systems, aquaculture farms, and industrial water treatment plants, it helps in early detection of water contamination.",
  //   tags: [
  //     techTags.find(t => t.name === "IoT"),
  //     techTags.find(t => t.name === "Arduino"),
  //     techTags.find(t => t.name === "C"),
  //     techTags.find(t => t.name === "Python"),
  //     techTags.find(t => t.name === "Node.js"),
  //     techTags.find(t => t.name === "React"),
  //     techTags.find(t => t.name === "MongoDB"),
  //     techTags.find(t => t.name === "Git"),
  //     techTags.find(t => t.name === "GitHub")
  //   ].filter(Boolean),
  //   images: [
  //     "council-main.jpg",
  //     "council-1.jpg",
  //     "council-2.jpg",
  //     "council-3.jpg"
  //   ],
  //   features: [
  //     "Real-time water quality monitoring",
  //     "Multi-parameter sensing (pH, turbidity, temperature, TDS)",
  //     "Cloud data storage & visualization",
  //     "Alert system for threshold violations",
  //     "Low-power operation",
  //     "Mobile app for remote monitoring",
  //     "Historical data analysis",
  //     "Exportable reports in PDF/Excel"
  //   ],
  //   github: "https://github.com/pyxlelab/iot-water-meter.git",
  //   hardwareRepo: "https://github.com/pyxlelab/iot-water-meter-hardware.git",
  //   live: "https://water-monitor-dashboard.vercel.app",
  //   status: "Completed",
  //   year: 2023,
  //   category: "IoT + Hardware"
  // },
];

export default projects;
export { techTags };