import cookitEatItImage from "../assets/cookitEatItImage.png";
import MedScanAI_Image from "../assets/MedScanAI_Image.jpg";


const projects = [
  {
    id: "cookit-eatit",
    title: "Cook it Eat it",
    description:
      "A compact recipe discovery and meal-planning app that prioritizes practical UX for quick, repeatable home cooking.",
    category: "software",
    type: "Mobile Application",
    media: {
      src: cookitEatItImage,
      alt: "Cook it Eat it - recipe list and meal planner UI",
      type: "image",
    },
    githubUrl: "https://github.com/mazenabdelgawad700/CookItEatIt",
    technologies: [".NET Core", "SQL Server", "Flutter"],
    featured: true,
  },
  {
    id: "MedScanAI",
    title: "MedScanAI - Capstone Project",
    description:
      "MediScan is a full-stack medical diagnostic platform that uses deep learning to help clinicians and patients analyze medical images across four critical domains: skin diseases, brain tumors, breast cancer, and chest X-ray abnormalities. ",
    category: "software",
    type: "Web Application",
    media: {
      src: MedScanAI_Image,
      alt: "MedScanAI - Smart medical diagnostic platform UI",
      type: "image",
    },
    githubUrl: "https://github.com/ahmed-talha-ai/MedScanAI-Graduation-Project",
    technologies: [".NET Core", "SQL Server", "React js"],
    featured: true,
  },
];

export default projects;
