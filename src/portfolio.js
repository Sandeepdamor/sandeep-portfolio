/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
//import { Fade } from "react-reveal";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
username: "Sandeep Damor",
title: "Hello, I'm Sandeep",
subTitle: emoji(
  "A passionate Java Full Stack Developer 🚀 with hands-on experience in building web applications using Java, Spring Boot, Angular, SQL, and REST APIs, along with strong fundamentals in backend and frontend development."
),
 resumeLink:
  "https://drive.google.com/uc?export=download&id=1TgU-sVY1kqqrEDOCr1gLqpyPn_KJ1zhr",
displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links  

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/sandeep-damor-01423328a",
  gmail: "sandeepdamor288@gmail.com",
  //gitlab: "https://github.com/Sandeepdamor",
  instagram: "https://www.instagram.com/sandeep_damor17/",
  facebook: "https://www.facebook.com/sandeep.damor.1848/",
  twitter  : "https://twitter.com/sandeep_damor17",
  //medium: "https://medium.com/@saadpasta",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
title: "What I Do",
subTitle: "PASSIONATE JAVA FULL STACK DEVELOPER FOCUSED ON BUILDING SCALABLE BACKEND SYSTEMS & MODERN WEB APPLICATIONS",
skills: [
  emoji("⚡ Build RESTful APIs and scalable backend services using Java, Spring Boot, Spring MVC, and Microservices"),
  emoji("⚡ Develop efficient, responsive, and interactive web applications using Angular"),
  emoji("⚡ Implement authentication & authorization using Spring Security and JWT"),
  emoji("⚡ Work with databases like MySQL using JPA & JDBC"),
  emoji("⚡ Containerize and deploy applications using Docker & Kubernetes"),
  emoji("⚡ Version control & collaboration using Git and GitHub")
],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "Spring MVC",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Spring Data JPA",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "RESTful APIs",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "Microservices",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "Spring Security",
    fontAwesomeClassname: "fas fa-shield-alt"
  },
  {
    skillName: "JWT",
    fontAwesomeClassname: "fas fa-key"
  },
  {
    skillName: "JDBC",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "Servlets",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Git & GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Maven",
    fontAwesomeClassname: "fas fa-cogs"
  },
  {
    skillName: "Angular",
    fontAwesomeClassname: "fab fa-angular"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-server"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Government Holkar (Model, Autonomous) Science College, Indore (M.P.)",
      logo: require("./assets/images/logoofHolkardated.png"),//src/assets/images/logoofHolkardated.png
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "July 2022 - July 2025",
      desc: "Completed BCA with a strong focus on programming, software development, and database management.",
      descBullets: [
        "Developed multiple academic and personal projects using Java, Spring Boot, Angular, and SQL",
        "Participated in coding assignments, group projects, and tech-based activities during the course"
      ]
    },
    {
      schoolName: "Government Higher Secondary School, Ranapur, District Jhabua (M.P.)",
      logo: require("./assets/images/mp_board.png"),//src/assets/images/src/assets/images/mp_board.png
      subHeader: "Higher Secondary Education (10th & 12th)",
      duration: "Completed 10th & 12th with PCM",
      desc: "Completed higher secondary education with Physics, Chemistry, and Mathematics (PCM).",
      descBullets: [
    "Built a strong foundation in mathematics and analytical problem-solving",
    "Actively participated in academic and school activities"
      ]
  }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Developer Intern",
      company: "Dollop Infotech Pvt Ltd Indore (M.P.)",
      companylogo: require("./assets/images/dollop_infotech_logo.png"),//c:\Users\Sande\Downloads\dollop_infotech_logo.png
      date: "July 2025 – Present",
      desc: "Working on backend development, API building, and application security.",
      descBullets: [
          "Built REST APIs using Java & Spring Boot",
          "Implemented JWT-based authentication",
          "Worked with MySQL and Git & GitHub"
    ]
    },
    {
      role: "JAVA Full Stack Developer Trainee (Certified)",
      company: "Placement Adda Indore (M.P.)",
      companylogo: require("./assets/images/Placement_adda.png"),//c:\Users\Sande\Downloads\Placement_adda.png
      date: "Oct 2023 – Jun 2025",
      desc: "Successfully completed training in Java Full Stack Development, gaining hands-on experience in building dynamic and scalable web applications.",
      descBullets: [
         "Trained in Java, Spring Boot, Angular, MySQL, JDBC, and Servlets",
         "Gained practical experience in backend development and database management"
    ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/login-image.webp"),//src/assets/images/login-image.webp
      projectName: "Rural Community Welfare System",
      projectDesc:
    "A full-stack web application designed to simplify service access in rural areas. It enables residents to submit grievances, book services, view announcements, and connect with local authorities. Built using Angular for the frontend and Spring Boot for the backend with secure JWT authentication.",
      footerLink: [
        {
          name: "Visit Website",
          //url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cico.webp"), //src/assets/images/logo.jpg
      projectName: "CICO – Check-In / Check-Out System",
      projectDesc:
      "A smart attendance and activity tracking system that allows users to check in and check out seamlessly. Features include real-time status updates, user authentication, time logs, and automated record generation. Designed with a clean UI and secure backend workflow.",
      footerLink: [
        {
          name: "Visit Website",
        //  url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy sharing my knowledge on Java, Spring Boot, Angular, and backend development through simple and helpful technical articles.",

  displayMediumBlogs: "false", // set true only if you have real Medium blogs

  blogs: [
 {
  url: "https://medium.com/@pratik.941/building-rest-api-using-spring-boot-a-comprehensive-guide-3e9b6d7a8951",
  title: "Getting Started with Spring Boot REST APIs",
  description:
    "A complete guide to building and testing RESTful APIs using Spring Boot, controllers, services, and proper project structure."
},
{
  url: "https://medium.com/@tericcabrel/implement-jwt-authentication-in-a-spring-boot-3-application-5839e4fd8fac",
  title: "JWT Authentication in Spring Security",
  description:
    "Explains JWT structure, token validation, stateless authentication, and how to integrate JWT with Spring Security."
},
{
  url: "https://medium.com/@AlexanderObregon/understanding-the-basics-of-microservices-in-java-175103feb49f",
  title: "Spring Boot Microservices for Beginners",
  description:
    "A step-by-step tutorial on designing, developing, and deploying microservices using Spring Boot and Spring Cloud."
},
{
  url: "https://medium.com/@AlexanderObregon/spring-boot-application-profiling-and-tuning-for-better-efficiency-e90e63ac08dd",
  title: "Optimizing Spring Boot Applications",
  description:
    "Covers performance tuning, caching, connection pools, memory optimization, and best practices for faster Spring Boot apps."
},
{
  url: "https://dekh.medium.com/the-complete-guide-to-json-web-tokens-jwt-and-token-based-authentication-32501cb5125c",
  title: "JWT Authentication – Complete Developer Guide",
  description:
    "Deep dive into how JWT works internally, why it's stateless, how signatures prevent tampering, and how to implement refresh tokens."
},
{
  url: "https://medium.com/@paolo.alberca/containerizing-your-angular-and-spring-boot-applications-with-docker-a-complete-guide-to-e9846f5230e5",
  title: "How to Deploy a Full-Stack App (Spring Boot + Angular) on Render",
  description:
    "Explains hosting backend and frontend on Render, environment variables, build commands, and pipeline automation."
}
  ],
  display: true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7024561482",
  email_address: "sandeepdamor288@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
