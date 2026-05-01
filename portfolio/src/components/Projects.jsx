import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'

const MAIN_GITHUB = "https://github.com/shanmukhavarma007/"

const projects = [
  {
    title: 'AI LeadFlow — Automated CRM',
    description: 'End-to-end automated CRM system that captures, processes, and responds to leads using automation tools. Webhook-based lead capture with real-time response system.',
    tech: ['Zapier', 'REST API', 'Webhook', 'Make'],
    liveLink: 'https://github.com/shanmukhavarma007/Auto_CRM',
    githubLink: 'https://github.com/shanmukhavarma007/Auto_CRM',
    featured: true,
  },
  {
    title: 'AI Customer Support Chatbot',
    description: 'LLM-powered AI chatbot for handling user queries and automating responses with conversational flow handling.',
    tech: ['LLM API', 'REST API', 'Node.js'],
    liveLink: 'https://github.com/shanmukhavarma007/AI-Chat-bot',
    githubLink: 'https://github.com/shanmukhavarma007/AI-Chat-bot',
  },
  {
    title: 'REST API Project',
    description: 'A well-documented REST API built with Express.js featuring authentication, CRUD operations, and comprehensive error handling.',
    tech: ['Express.js', 'MongoDB', 'JWT'],
    liveLink: 'https://shanmukhavarma007.github.io/api/',
    githubLink: 'https://github.com/shanmukhavarma007/api',
  },
  {
    title: 'Expense Tracker',
    description: 'A modern expense tracking application with categorization, charts, and export functionality. Track your spending with ease.',
    tech: ['React', 'Vercel', 'Chart.js'],
    liveLink: 'https://expense-tracker-chi-two-44.vercel.app/',
    githubLink: 'https://github.com/shanmukhavarma007/expense-tracker',
  },
  {
    title: 'Gmail to Telegram Automation',
    description: 'An n8n-powered workflow that automatically forwards important Gmail emails to Telegram for instant notifications.',
    tech: ['n8n', 'Gmail API', 'Telegram'],
    liveLink: 'https://creators.n8n.io/workflows/15182',
    githubLink: 'https://github.com/shanmukhavarma007/gmail-telegram-automation',
  },
  {
    title: 'Skin Cancer Detection',
    description: 'A machine learning model trained to detect skin cancer from images with high accuracy. Early detection can save lives.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    liveLink: 'https://colab.research.google.com/drive/1v9sfKwuVr7jdDaIjlvChtTStey95_ICU',
    githubLink: 'https://github.com/shanmukhavarma007/skin-cancer-detection',
  },
  {
    title: 'Joke Box App',
    description: 'An interactive web application that delivers random jokes. Built with fun UI animations and joke categories.',
    tech: ['React', 'API', 'Framer Motion'],
    liveLink: 'https://shanmukhavarma007.github.io/joke-box/',
    githubLink: 'https://github.com/shanmukhavarma007/joke-box',
  },
]

export default function Projects() {
  const getGithubLink = (link) => {
    return link || MAIN_GITHUB
  }

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`card group flex flex-col ${project.featured ? 'border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30' : ''}`}
          >
            {project.featured && (
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent-glow)] px-3 py-1 rounded-full">
                  <FiExternalLink className="w-3 h-3" />
                  Featured Project
                </span>
              </div>
            )}
            <div className="mb-4">
              <h3 className="text-xl font-semibold font-[var(--font-outfit)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="project-badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-3"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={getGithubLink(project.githubLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2 px-3"
              >
                <FiGithub className="w-4 h-4" />
                View Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}