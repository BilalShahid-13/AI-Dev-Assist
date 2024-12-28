const HeroImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];

const ServicesImage = [
  { title: "google gemini", img: "/services/Google_Gemini_logo.svg" },
  { title: "grammarly", img: "/services/Grammarly_logo.svg" },
  { title: "quillbot", img: "/services/pngwing.png" },
  { title: "stable diffusion", img: "/services/Stability+AI+logo.png" },
];

const NavbarItems = [
  // | Home | Features | Contact | Search Bar | Sign In / Sign Up |
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
import { CiViewTimeline } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { PiPaintBrushDuotone } from "react-icons/pi";
const Features = [
  {
    icon: CiViewTimeline,
    title: "Code to Documentation",
    description: `Effortlessly transform code snippets into
    comprehensive and professional documentation`,
  },
  {
    icon: FaRegLightbulb,
    title: "AI-Powered Content Generation",
    description: `Generate high-quality articles,
    blog posts, social media content, and more with just a few clicks`,
  },
  {
    icon: PiPaintBrushDuotone,
    title: "Image Generation",
    description: `Create stunning visuals tailored to your specific needs
    – from product images to social media graphics`,
  },
];
const Technologies = [
  { name: "React", icon: "/technologies/react-2.svg" },
  {
    name: "Node.js",
    icon: "/technologies/nodejs-1.svg",
  },
  {
    name: "Express.js",
    icon: "/technologies/express-109.svg",
  },
  {
    name: "mongodb",
    icon: "/technologies/mongodb-icon-2.svg",
  },
  {
    name: "gemini",
    icon: "/services/Google_Gemini_logo.svg",
  },
  {
    name: "stability",
    icon: "/services/Stability+AI+logo.png",
  },
];

export { HeroImages, NavbarItems, ServicesImage, Features, Technologies };
