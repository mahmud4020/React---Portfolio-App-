import React, { useEffect, useState } from "react";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiFirebase,
  SiLaravel, SiMongodb, SiExpress, SiPhp,
  SiPython, SiDocker, SiAmazon, SiOpenai,
  SiTypescript, SiNodedotjs, SiPostgresql, SiRedis
} from "react-icons/si";
import { FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import ScrollReveal from '../common/ScrollReveal';
import "./experience.css";

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI & Data" },
  { id: "devops", label: "DevOps & Cloud" },
];

const TECH_STACK = [
  { name: "React", icon: <SiReact />, category: "frontend", proficiency: 95, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend", proficiency: 90, color: "#ffffff" },
  { name: "JavaScript", icon: <IoLogoJavascript />, category: "frontend", proficiency: 95, color: "#f7df1e" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend", proficiency: 88, color: "#3178c6" },
  { name: "React Native", icon: <FaReact />, category: "frontend", proficiency: 85, color: "#61dafb" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend", proficiency: 90, color: "#38bdf8" },
  { name: "CSS3", icon: <FaCss3 />, category: "frontend", proficiency: 95, color: "#264de4" },
  { name: "Laravel", icon: <SiLaravel />, category: "backend", proficiency: 92, color: "#ff2d20" },
  { name: "PHP", icon: <SiPhp />, category: "backend", proficiency: 90, color: "#777bb4" },
  { name: "Node.js", icon: <SiNodedotjs />, category: "backend", proficiency: 85, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, category: "backend", proficiency: 82, color: "#ffffff" },
  { name: "MySQL", icon: <GrMysql />, category: "backend", proficiency: 88, color: "#4479a1" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend", proficiency: 80, color: "#47a248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend", proficiency: 78, color: "#4169e1" },
  { name: "Redis", icon: <SiRedis />, category: "backend", proficiency: 75, color: "#dc382d" },
  { name: "Firebase", icon: <SiFirebase />, category: "backend", proficiency: 85, color: "#ffca28" },
  { name: "Python", icon: <SiPython />, category: "ai", proficiency: 80, color: "#3776ab" },
  { name: "OpenAI / LLMs", icon: <SiOpenai />, category: "ai", proficiency: 85, color: "#00a67e" },
  { name: "Docker", icon: <SiDocker />, category: "devops", proficiency: 78, color: "#2496ed" },
  { name: "AWS", icon: <SiAmazon />, category: "devops", proficiency: 75, color: "#ff9900" },
];

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (catId) => {
    setAnimateBars(false);
    setActiveCategory(catId);
    // Re-trigger animations after filter change
    setTimeout(() => setAnimateBars(true), 100);
  };

  const filteredTech = activeCategory === "all"
    ? TECH_STACK
    : TECH_STACK.filter(t => t.category === activeCategory);

  return (
    <section id="experience" className="section--alt">
      <ScrollReveal>
        <h5>Our Arsenal</h5>
        <h2>Technologies We Master</h2>
      </ScrollReveal>

      <div className="container">
        <ScrollReveal delay={0.1}>
          <div className="tech-category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`tech-category-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="container tech-stack-grid" id="responsive">
        {filteredTech.map((tech, index) => (
          <ScrollReveal key={tech.name} delay={Math.min(index * 0.05, 0.3)}>
            <div
              className="tech-card glass-card"
              style={{ "--tech-color": tech.color }}
            >
            <div className="tech-card-header">
              <div className="tech-icon-wrap">
                {tech.icon}
              </div>
              <div className="tech-info">
                <h4 className="tech-name">{tech.name}</h4>
                <span className="tech-category-label">{tech.category}</span>
              </div>
              <span className="tech-percentage">{tech.proficiency}%</span>
            </div>

            <div className="tech-progress-track">
              <div
                className="tech-progress-fill"
                style={{
                  width: animateBars ? `${tech.proficiency}%` : "0%",
                  background: `linear-gradient(90deg, var(--color-primary), ${tech.color})`,
                }}
              />
            </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
