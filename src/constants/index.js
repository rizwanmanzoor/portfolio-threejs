import {
  mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, 
  mongodb, git, figma, angular, carrent, jobit, emr, wordpress, 
} from "../assets";

import creativecroods from "../assets/company/creativecroods.png";
import everyday from "../assets/company/everyday.png";
import kwanso from "../assets/company/kwanso.png";

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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "CMS Development",
    icon: mobile,
  },
  {
    title: "Responsive Web Solutions",
    icon: backend,
  },
  {
    title: "Website Maintenance",
    icon: creator,
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
    name: "WordPress",
    icon: wordpress,
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
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Kwanso",
    icon: kwanso,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Collaborate with designers and stakeholders to convert Figma designs into pixel-perfect React and Next.js applications.",
      "Utilize CSS libraries such as Material UI, Tailwind CSS, Reactstrap, Bootstrap, and SCSS to implement consistent and visually appealing styles across projects.",
      "Integrate various APIs and third-party services to enable seamless data exchange and enhance the functionality of our applications.",
      "Utilize TypeScript to ensure type safety and improve the overall quality and maintainability of the codebase.",
      "Develop and maintain reusable React components that contribute to a scalable and efficient codebase.",
      "Familiarity with version control systems like Git for collaborative development."
    ],
  },
  {
    title: "Team Lead",
    company_name: "Creative Croods",
    icon: creativecroods,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jan 2022",
    points: [
      "Lead and manage a team of frontend developers, assigning tasks, providing guidance, and ensuring project deadlines are met.",
      "Convert Figma and XD designs into clean and efficient HTML/CSS code, delivering responsive and visually appealing web interfaces.",
      "Integrate APIs and third-party services to enable seamless data exchange and enhance the functionality of web applications.",
      "Implement and customize WordPress CMS solutions, including Elementor and WooCommerce, to deliver flexible and scalable websites.",
      "Actively participate in client meetings to understand project requirements, provide technical insights, and contribute to project planning and execution.",
    ],
  },
  {
    title: "UI Developer",
    company_name: "Everyday1248 Technologies",
    icon: everyday,
    iconBg: "#E6DEDD",
    date: "July 2018 - May 2020",
    points: [
      "Convert XD designs into clean and semantic HTML/CSS code.",
      "Develop core CSS components and styles to establish a unified and maintainable codebase.",
      "Utilize CSS libraries like Bootstrap and SCSS to streamline styling and create visually consistent user interfaces.",
      "Contribute to Angular UI development, building dynamic and responsive user interfaces.",
      "Develop reusable components and UI patterns to improve development efficiency and maintain consistency.",
      "Familiarity with PHP and Laravel for UI development, enabling robust and efficient interfaces."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rizwan proved me wrong.",
    name: "Sara",
    designation: "CFO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rizwan does.",
    name: "Chris",
    designation: "COO",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rizwan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa",
    designation: "CTO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "",
  },
  {
    name: "Job Portal",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "Electronic Health Record",
    description:
      "An electronic record of health-related information that can be created, managed, and consulted by authorized facilities and staff within one health care organization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: emr,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
