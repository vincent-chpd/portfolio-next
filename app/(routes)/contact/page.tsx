"use client";
import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "vincent.chaussepied@gmail.com",
    href: "mailto:vincent.chaussepied@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, United Kingdom",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vincent-chpd",
    href: "https://www.linkedin.com/in/vincent-chpd/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/vincent-chpd",
    href: "https://github.com/vincent-chpd",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:vincent.chaussepied@gmail.com?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 flex flex-col gap-10 mb-6">
      {/* Header */}
      <div>
        <p className="text-gray-400 font-semibold">
          Home <span className="text-primary/50">_contact</span>
        </p>
        <h1 className="font-bold text-4xl md:text-5xl mt-10">Get In Touch</h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Have a project in mind, a question, or just want to say hello? Fill in
          the form or reach out directly — I typically respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — contact details */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="font-semibold text-sm text-gray-400 uppercase tracking-wider">
              Contact details
            </h2>
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs">{label}</p>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors truncate block"
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className="text-sm truncate">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <p className="text-sm text-gray-300">
              <span className="text-green-400 font-semibold">Available</span>{" "}
              for freelance &amp; full-time roles
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-3 flex-1">
            <h3 className="font-semibold text-lg">Let&apos;s work together</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you need a new website, a React app built from scratch, a
              WordPress site, or help improving an existing codebase — I&apos;m
              happy to chat about what you need.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              I typically respond within 24 hours. For urgent requests, feel
              free to reach out directly via email or LinkedIn.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Send size={28} />
              </div>
              <h3 className="font-bold text-xl">Message sent!</h3>
              <p className="text-gray-400 text-sm max-w-xs">
                Your email client should have opened. I will get back to you as
                soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2 className="font-semibold text-lg mb-1">Send a message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs text-gray-400">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-gray-900 rounded-xl px-4 py-3 text-sm outline-none border border-gray-700 focus:border-primary transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-gray-400">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-gray-900 rounded-xl px-4 py-3 text-sm outline-none border border-gray-700 focus:border-primary transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs text-gray-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-gray-900 rounded-xl px-4 py-3 text-sm outline-none border border-gray-700 focus:border-primary transition-colors placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs text-gray-400">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  className="bg-gray-900 rounded-xl px-4 py-3 text-sm outline-none border border-gray-700 focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-primary hover:bg-primary/80 transition-colors text-black font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 w-full sm:w-fit"
              >
                <Send size={16} /> Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
