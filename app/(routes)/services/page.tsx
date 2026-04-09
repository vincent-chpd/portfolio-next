import React from 'react'
import { Code2, Layers, Globe, Palette, Zap, RefreshCw } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: "React & TypeScript Development",
    description:
      "Building scalable, maintainable web applications using React and TypeScript. From reusable component libraries to complex state management, I write clean, typed code that scales with your product.",
    tags: ["React", "TypeScript", "Next.js", "REST APIs"],
  },
  {
    icon: Layers,
    title: "UI Component Development",
    description:
      "Designing and building reusable UI component systems aligned with your design language. Whether starting from scratch or extending an existing design system, I deliver consistent, accessible components.",
    tags: ["Component Libraries", "Tailwind CSS", "Storybook", "Accessibility"],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom WordPress sites built for performance and ease of use. I create bespoke themes, develop custom plugins, and integrate third-party APIs — giving you a site you can manage without touching code.",
    tags: ["WordPress", "Custom Themes", "Plugins", "WooCommerce"],
  },
  {
    icon: Palette,
    title: "Responsive Web Design",
    description:
      "Turning designs into pixel-perfect, responsive interfaces that work beautifully on every device. I bridge the gap between design and code, collaborating closely with designers to bring mockups to life.",
    tags: ["Responsive Design", "Figma", "CSS", "Mobile-first"],
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description:
      "Auditing and improving web performance through code splitting, lazy loading, image optimisation, and bundle analysis. Faster sites mean better UX and higher conversion rates.",
    tags: ["Core Web Vitals", "Lighthouse", "Bundle Analysis", "SEO"],
  },
  {
    icon: RefreshCw,
    title: "Legacy Code Refactoring",
    description:
      "Modernising legacy JavaScript codebases by migrating to TypeScript, improving code structure, and introducing testing. I reduce technical debt without disrupting your existing product.",
    tags: ["JavaScript → TypeScript", "Testing", "Code Quality", "Maintenance"],
  },
]

const ServicesPage = () => {
  return (
    <div className="mx-10 py-20 md:px-20 flex flex-col gap-10 mb-6">
      <div>
        <p className="text-gray-400 font-semibold">
          Home <span className="text-primary/50">_services</span>
        </p>
        <h1 className="font-bold text-5xl mt-10">Services</h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          I offer a range of front-end development services for startups, agencies, and individuals. Whether you need a full product built or a specific problem solved, I can help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:ring-1 hover:ring-primary transition-all"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={22} />
              </div>
              <h2 className="font-semibold text-lg">{service.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
        <div>
          <h3 className="font-semibold text-xl mb-2">Have a project in mind?</h3>
          <p className="text-gray-400 text-sm">Let's talk about what you need and how I can help.</p>
        </div>
        <a
          href="mailto:vincent.chaussepied@gmail.com"
          className="shrink-0 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/80 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}

export default ServicesPage
