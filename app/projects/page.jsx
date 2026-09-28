"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Vytalyz",
    description:
      "A modern healthcare website with interactive assessments and personalized wellness experiences.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/vytalyz.png",
    live: "https://vytalyz.vercel.app/",
    github: "https://github.com/ShaYri12/vytalyz",
  },
  {
    num: "02",
    category: "frontend",
    title: "Block Boost",
    description:
      "It's a Web3 crowdfunding platform for early crypto investments.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/projects/block-boost.png",
    live: "https://watzpaad-five.vercel.app/",
    github: "https://github.com/ShaYri12/Watzpaad",
  },

  {
    num: "03",
    category: "fullstack",
    title: "HealthFare",
    description:
      "It's a wellness platform offering expert articles, tips, and tools to support a healthier lifestyle.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/health-fare.png",
    live: "https://health-fare-ten.vercel.app/",
    github: "https://github.com/ShaYri12/HealthFare",
  },
  {
    num: "04",
    category: "frontend",
    title: "NUIIX",
    description:
      "It offers intelligent digital avatars for natural, human-like conversations powered by advanced AI.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/projects/nuiix.png",
    live: "https://nuiix-pied.vercel.app/",
    github: "https://github.com/ShaYri12/NUIIX",
  },
  {
    num: "05",
    category: "frontend",
    title: "TopExpert",
    description:
      "It connects users with top talent to turn their passion into a thriving business.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/projects/topexpert.png",
    live: "https://topexpert-chi.vercel.app/",
    github: "https://github.com/ShaYri12/TopExpert",
  },
  {
    num: "06",
    category: "frontend",
    title: "LUMÉA",
    description:
      "A refined fragrance website featuring cinematic motion and immersive storytelling.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Motion" },
    ],
    image: "/assets/projects/lumea.png",
    live: "https://lumea-zeta.vercel.app/",
    github: "https://github.com/ShaYri12/lumea",
  },
  {
    num: "07",
    category: "fullstack",
    title: "Link Up",
    description:
      "A social platform for sharing posts, applying for jobs, chatting in real time, and personalizing profiles with custom themes.",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "TailwindCSS" },
      { name: "MongoDB" },
    ],
    image: "/assets/projects/link-up.png",
    live: "https://linkup-lemon.vercel.app/",
    github: "https://github.com/ShaYri12/Link-Up",
  },
  {
    num: "08",
    category: "frontend",
    title: "VORN AI",
    description:
      "A next-generation web platform combining AI, decentralized infrastructure, and real-world asset tokenization.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "i18next" },
    ],
    image: "/assets/projects/vorn-ai.png",
    live: "https://vorn-ai.vercel.app/en",
    github: "https://github.com/vikramkumartejani/VORN-AI",
  },
  {
    num: "09",
    category: "frontend",
    title: "Elevana",
    description:
      "A complete service provider experience with a business dashboard and integrated main website.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/elevana.png",
    live: "https://customer-portal-zbw1.vercel.app/",
    github: "https://github.com/vikramkumartejani/customer-portal",
  },
  {
    num: "10",
    category: "fullstack",
    title: "Missing Activists",
    description:
      "It's a web app for managing missing persons information and connecting communities.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "MongoDB" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/projects/missing-activists.png",
    live: "https://missing-activists-navy.vercel.app/",
    github: "https://github.com/ShaYri12/Missing-Activists",
  },
  {
    num: "11",
    category: "frontend",
    title: "Kamelia Doors",
    description:
      "It helps you build your dream home interior with custom doors and precise measurements.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/projects/kamelia-doors.png",
    live: "https://kamelia-doors.vercel.app/",
    github: "https://github.com/ShaYri12/kamelia-doors",
  },
  {
    num: "12",
    category: "frontend",
    title: "Backdoor 3D",
    description:
      "It's an AI-powered platform for finding and analyzing the best real estate deals with a free trial.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/backdoor-3d.png",
    live: "https://backdoor-3-d-animation.vercel.app/",
    github: "https://github.com/ShaYri12/Backdoor-3D-Animations",
  },
  {
    num: "13",
    category: "frontend",
    title: "Kontable",
    description:
      "It is a dashboard for managing collaborators, declarations, and activities with real-time tracking and updates.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/kontable.png",
    live: "https://kontable-eight.vercel.app/",
    github: "https://github.com/ShaYri12/kontable",
  },
  {
    num: "14",
    category: "frontend",
    title: "Fundi",
    description:
      "Fundi helps organizations raise funds with zero fees, ensuring all donations go directly to them.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/fundi.png",
    live: "https://fundi-five.vercel.app/",
    github: "https://github.com/ShaYri12/fundi",
  },
  {
    num: "15",
    category: "frontend",
    title: "Gastro",
    description:
      "A modern restaurant platform for discovering venues, managing offers, orders, and conversations.",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "MUI" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/gastro.png",
    live: "https://gastro-six.vercel.app/",
    github: "https://github.com/ShaYri12/Gastro",
  },
  {
    num: "16",
    category: "frontend",
    title: "QasimDaboul",
    description:
      "A portfolio of interior designs that blend beauty with functionality, tailored to your lifestyle.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/interior-designer-portfolio.png",
    live: "https://qasim-daboul.vercel.app/",
    github: "https://github.com/ShaYri12/QasimDaboul",
  },
  {
    num: "17",
    category: "frontend",
    title: "Tract",
    description:
      "It is a platform focused on planning the construction of one million homes to solve the UK's housing problem.",
    stack: [{ name: "HTML" }, { name: "TailwindCSS" }],
    image: "/assets/projects/tract.png",
    live: "https://tract-seven.vercel.app/",
    github: "https://github.com/ShaYri12/Tract",
  },
  {
    num: "18",
    category: "frontend",
    title: "Review Web with AI",
    description:
      "Review your website with AI to get a personalized report and optimize performance effortlessly.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/review-web-with-ai.png",
    live: "https://web-review-with-ai-smoky.vercel.app/",
    github: "https://github.com/ShaYri12/web-review-with-ai",
  },
  {
    num: "19",
    category: "fullstack",
    title: "Moji Gurukul",
    description:
      "A multilingual education platform with real-time features, authentication, and interactive learning.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "MUI" },
      { name: "Socket.io" },
    ],
    image: "/assets/projects/moji-gurukul.png",
    live: "https://mojinext-development.vercel.app/",
    github: "https://github.com/ShaYri12/moji-guru-kul",
  },
  {
    num: "20",
    category: "frontend",
    title: "Orbiz",
    description:
      "It simplifies payments for businesses with quick payment links for products and services.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/orbiz.png",
    live: "https://orbiz-website-nu.vercel.app/",
    github: "https://github.com/ShaYri12/orbiz",
  },
  {
    num: "21",
    category: "fullstack",
    title: "Travel World",
    description:
      "It makes exploring easy – discover exciting tours, check out our services, book your trips in minutes, and manage all your bookings.",
    stack: [
      { name: "React.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "BootstrapCSS" },
    ],
    image: "/assets/projects/travel-world.png",
    live: "https://tour-management-htux.vercel.app/",
    github: "https://github.com/ShaYri12/tour-management",
  },
  {
    num: "22",
    category: "fullstack",
    title: "Fast Food",
    description:
      "A fast food website where users can browse, order, and manage their cart, while admins can manage foods and users with full control.",
    stack: [
      { name: "React.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "BootstrapCSS" },
    ],
    image: "/assets/projects/fast-food.png",
    live: "https://fast-food-gamma.vercel.app/",
    github: "https://github.com/ShaYri12/Fast-Food",
  },
  {
    num: "23",
    category: "fullstack",
    title: "AMER247",
    description:
  "An immigration services platform for online visa, residency, Emirates ID, and government applications.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Nodemailer" },
      { name: "SendGrid" },
      { name: "Axios" },
    ],
    image: "/assets/projects/amer247.png",
    live: "https://amer247-seven.vercel.app/",
    github: "https://github.com/ShaYri12/amer247",
  },
  {
    num: "24",
    category: "frontend",
    title: "LeaseGrid",
    description:
      "It simplifies property management with tools for leases, tenants, payments, and maintenance.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/lease-grid.png",
    live: "https://lease-grid-xi.vercel.app/en",
    github: "https://github.com/ShaYri12/LeaseGrid",
  },
  {
    num: "25",
    category: "frontend",
    title: "Sevenforce Moldova",
    description:
      "A premium automotive website with interactive services, cost estimation, and performance insights.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/sevenforce-moldova.png",
    live: "https://sevenforce-moldova.vercel.app/",
    github: "https://github.com/ShaYri12/sevenforce-moldova",
  },
  {
    num: "26",
    category: "frontend",
    title: "ABMize",
    description:
      "A modern youth entrepreneurship platform showcasing programs, mentorship, and career pathways.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    image: "/assets/projects/abmize.png",
    live: "https://abm-pi.vercel.app/",
    github: "https://github.com/ShaYri12/ABM",
  },
  {
    num: "27",
    category: "frontend",
    title: "Atlas Event",
    description:
      "A modern event platform combining discovery, creation, and seamless event management.",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Swiper.js" },
    ],
    image: "/assets/projects/atlas-event.png",
    live: "https://atlas-event-khaki.vercel.app/",
    github: "https://github.com/ShaYri12/atlas-event",
  },
  {
    num: "28",
    category: "frontend",
    title: "Green Energy",
    description:
      "A modern energy company website showcasing oil & gas, MEP, and HVAC services.",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "AOS" },
    ],
    image: "/assets/projects/green-energy.png",
    live: "https://green-energy-website-chi.vercel.app/",
    github: "https://github.com/ShaYri12/green-energy-website",
  },
  {
    num: "29",
    category: "frontend",
    title: "ApexBank",
    description:
      "A modern banking dashboard with analytics, transactions, and investment tracking.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
    ],
    image: "/assets/projects/apex-bank.png",
    live: "https://apex-bank-seven.vercel.app/",
    github: "https://github.com/ShaYri12/ApexBank",
  },
  {
    num: "30",
    category: "frontend",
    title: "Himachal Trips",
    description:
      "A modern tourism website for exploring destinations, tour packages, and bookings.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "CSS Modules" },
      { name: "Swiper.js" },
    ],
    image: "/assets/projects/himachal-trips.png",
    live: "https://himachal-trips-six.vercel.app/",
    github: "https://github.com/ShaYri12/himachal-trips",
  },
  {
    num: "31",
    category: "frontend",
    title: "BusyBucket.io",
    description:
      "It simplifies business tasks like time tracking, scheduling, invoicing, and inventory management.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/projects/busy-bucket.png",
    live: "https://busy-bucket.vercel.app/",
    github: "https://github.com/ShaYri12/busy-bucket-io",
  },
  {
    num: "32",
    category: "frontend",
    title: "Money Mitra",
    description:
      "A modern financial platform for exploring loans, insurance, investments, and credit cards.",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/money-mitra.png",
    live: "https://money-mitra-self.vercel.app/",
    github: "https://github.com/ShaYri12/money-mitra",
  },
  {
    num: "33",
    category: "frontend",
    title: "Apex Modern",
    description:
      "A modern clothing manufacturing website with advanced inquiry forms and interactive product experiences.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/apex-modern.png",
    live: "https://apex-modern-design.vercel.app/",
    github: "https://github.com/ShaYri12/apex-modern-design",
  },
  {
    num: "34",
    category: "frontend",
    title: "ServerStatsBots",
    description:
      "A Discord bot platform for real-time server statistics and customizable counters.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/server-stats-bots.png",
    live: "https://serverstats.bot/",
    github: "https://github.com/ShaYri12/ServerStatsBot",
  },
  {
    num: "35",
    category: "frontend",
    title: "Mascot",
    description:
      "A modern fitness app landing page with guided runs, smooth animations, and responsive design.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/projects/mascot.png",
    live: "https://mascot-six.vercel.app/",
    github: "https://github.com/ShaYri12/Mascot",
  },
  {
    num: "36",
    category: "frontend",
    title: "Credit SaaS DIY",
    description:
      "It offers fast, effective solutions to manage and improve your credit with automation and insightful reporting.",
    stack: [{ name: "React.js" }, { name: "BootstrapCSS" }, { name: "Vite" }],
    image: "/assets/projects/credit-saas.png",
    live: "https://credit-saas-diy.vercel.app/",
    github: "https://github.com/ShaYri12/Credit-SaaS-DIY",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-[210px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 h-full backdrop-blur-md bg-black/75 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80 line-clamp-3">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2 line-clamp-3">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[38px] h-[38px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[38px] h-[38px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-xl group-hover:text-accent" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
