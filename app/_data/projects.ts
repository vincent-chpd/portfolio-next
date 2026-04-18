import PropertyListing from "../../public/property-listing-web.png";
import SignalistDashboardImage from "../../public/signalist-dashboard.png";
import { StaticImageData } from "next/image";

export type ProjectDetails = {
  problem: string;
  solution: string;
  techDetails: string;
  features: string[];
};

export type Project = {
  title: string;
  image: StaticImageData;
  url: string;
  githubUrl?: string;
  techStacks: string[];
  description: string;
  category: "Full-stack" | "Frontend";
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    title: "Property Listing App",
    image: PropertyListing,
    url: "https://property-listing-zeta-azure.vercel.app/",
    githubUrl: "https://github.com/vincent-chpd/property-listing",
    category: "Full-stack",
    techStacks: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "Supabase",
      "Clerk",
    ],
    description:
      "Full-stack property listing web app featuring authentication, Google Maps integration, and full CRUD functionality for managing property listings.",
    details: {
      problem:
        "Finding and managing property listings is often fragmented across multiple platforms, with no easy way for users to visualise listings on a map or manage their own properties in one place.",
      solution:
        "A full-stack web app that centralises property listings with map-based browsing, secure authentication, and full CRUD management — so users can list, browse, and manage properties in one seamless experience.",
      features: [
        "Interactive Google Maps integration with property pins",
        "User authentication and protected routes via Clerk",
        "Full CRUD for property listings stored in Supabase",
        "Responsive design across all screen sizes",
        "Image upload and preview for listing photos",
      ],
      techDetails:
        "Built with React and TypeScript for a type-safe frontend, Tailwind CSS for styling, Supabase as the PostgreSQL backend with real-time capabilities, Clerk for authentication, and the Google Maps JavaScript API for map rendering.",
    },
  },
  {
    title: "Signalist - Stock Trading Dashboard",
    image: SignalistDashboardImage,
    url: "https://stock-market-app-gamma-livid.vercel.app/",
    githubUrl: "https://github.com/vincent-chpd/stock-market-app",
    category: "Full-stack",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Inngest",
      "Better Auth",
      "Finnhub API",
      "Shadcn UI",
    ],
    description:
      "AI-powered stock market dashboard with real-time prices, personalized alerts, watchlists, company insights, and event-driven workflows.",
    details: {
      problem:
        "Retail investors lack a unified platform that combines real-time market data, intelligent alerts, and AI-driven insights — leaving them to juggle multiple tools to make informed trading decisions.",
      solution:
        "A full-stack stock market app that centralises real-time prices, watchlists, AI-powered summaries, and automated email alerts in one seamless dashboard — built on event-driven workflows for reliability and scale.",
      features: [
        "Real-time stock prices with interactive line and candlestick charts",
        "Watchlist management with personalised price and volume alerts",
        "AI-powered daily digests, earnings notifications, and sentiment analysis",
        "Company insights including PE ratio, EPS, revenue, news, and analyst ratings",
        "Event-driven workflows via Inngest for automated alerts and reporting",
        "Admin dashboard for managing stocks, publishing news, and monitoring users",
        "Transactional email notifications via Nodemailer",
      ],
      techDetails:
        "Built with Next.js and TypeScript for a type-safe full-stack foundation, Shadcn UI and Tailwind CSS for the component system, MongoDB for flexible document storage, Better Auth for authentication, Finnhub API for real-time financial data, and Inngest for event-driven background workflows and AI-powered automation.",
    },
  },
];
