import React from "react";
import { Quote, Linkedin } from "lucide-react";
import Image from "next/image";
import Avatar from "../../../public/avatar.jpeg";
import MattLaw from "../../../public/matt_law.jpg";
import JamesLewis from "../../../public/james_lewis.jpg";
import Link from "next/link";

const recommendations = [
  {
    name: "Matt Law",
    role: "Engineering Manager at Matillion",
    relationship: "Matt managed Vincent directly",
    date: "August 20, 2025",
    avatar: MattLaw,
    text: "Vincent joined my team at UrbanThings at the start of his career as a software engineer, fresh from a 6 month bootcamp. We wanted someone with energy and ambition to join us to work on our frontend development, and in Vincent we found exactly that. His drive to learn and push himself, take on the challenges we presented and deliver quality was superb. During the time we worked together I was able to see Vincent grow in confidence as he transitioned knowledge from the bootcamp into real world outcomes. He did not just 'do' what he was asked, from the outset he asked insightful questions, suggested alternatives and challenged. Vincent adds value, make any team he works with deliver faster, and improve the finished product.",
  },
  {
    name: "James Lewis",
    role: "Product Manager | Certified Scrum Product Owner",
    relationship: "James worked with Vincent on the same team",
    date: "August 5, 2025",
    avatar: JamesLewis,
    text: "Vincent was instrumental in enabling us to deploy our new website product at scale with multiple customers. In particular, I valued Vincent's attention to detail, his eye for design, and ability to think independently all of which made him a great colleague when rolling out a complex project.",
  },
];

const RecommendationsPage = () => {
  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 flex flex-col gap-12 mb-6">
      {/* Header */}
      <div className="animate-fade-up delay-100">
        <p className="text-gray-400 font-semibold">
          Home <span className="text-primary/50">_recommendations</span>
        </p>
        <h1 className="font-bold text-4xl md:text-5xl mt-10">
          Recommendations
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          What colleagues and managers have said about working with me — .
        </p>
      </div>

      {/* Profile banner */}
      <div className="animate-fade-up delay-200 bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        {/* Decorative background quote */}
        <span className="absolute -top-4 -right-4 text-[10rem] leading-none font-serif text-primary/5 select-none pointer-events-none">
          &ldquo;
        </span>

        <Image
          src={Avatar}
          alt="Vincent Chaussepied"
          width={96}
          height={96}
          className="rounded-full ring-2 ring-primary object-cover w-24 h-24 shrink-0"
        />

        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="font-bold text-xl">Vincent Chaussepied</p>
          <p className="text-gray-400 text-sm">
            Frontend Developer · London, UK
          </p>
          <Link
            href="https://www.linkedin.com/in/vincent-chpd/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-xs text-primary hover:underline"
          >
            <Linkedin size={14} /> View LinkedIn profile
          </Link>
        </div>

        <div className="md:ml-auto flex gap-6 md:gap-10 text-center flex-wrap justify-center">
          <div>
            <p className="text-3xl font-bold text-primary">
              {recommendations.length}
            </p>
            <p className="text-gray-400 text-xs mt-1">Recommendations</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">2+</p>
            <p className="text-gray-400 text-xs mt-1">Years experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-gray-400 text-xs mt-1">Positive feedback</p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="animate-fade-up delay-300 flex flex-col gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.name}
            className="bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:ring-1 hover:ring-primary transition-all relative overflow-hidden"
          >
            {/* Decorative background quote */}
            <span className="absolute -bottom-6 -right-2 text-[8rem] leading-none font-serif text-primary/5 select-none pointer-events-none">
              &rdquo;
            </span>

            <Quote size={32} className="text-primary/30" />

            <p className="text-gray-300 leading-relaxed text-[0.95rem] md:text-base">
              {rec.text}
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
              <Image
                src={rec.avatar}
                alt={rec.name}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-primary/30"
              />
              <div>
                <p className="font-semibold">{rec.name}</p>
                <p className="text-gray-400 text-sm">{rec.role}</p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {rec.relationship} · {rec.date}
                </p>
              </div>
              <div className="ml-auto">
                <Linkedin size={18} className="text-gray-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
