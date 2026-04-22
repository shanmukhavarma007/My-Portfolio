import { motion } from 'framer-motion'
import { FiCpu, FiLink, FiZap, FiCode } from 'react-icons/fi'

const features = [
  {
    icon: FiCpu,
    title: 'AI-First Approach',
    description: 'Leveraging AI as the primary tool for development, using OpenCode and Claude Code to accelerate workflow and build smarter solutions.',
  },
  {
    icon: FiLink,
    title: 'API Integration',
    description: 'Building robust RESTful APIs and integrating multiple services through seamless automation pipelines.',
  },
  {
    icon: FiZap,
    title: 'Workflow Automation',
    description: 'Creating efficient automated workflows with n8n, connecting apps and services to eliminate repetitive tasks.',
  },
  {
    icon: FiCode,
    title: 'Modern Tools',
    description: 'Proficient with Postman for API testing, Git for version control, and modern development environments.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[var(--color-text-secondary)] text-lg mb-6">
            I'm an <span className="text-[var(--color-accent)] font-medium">AI-first developer</span> passionate about building 
            intelligent automation solutions. My approach combines cutting-edge AI tools with solid engineering fundamentals 
            to create efficient, scalable applications.
          </p>
          <p className="text-[var(--color-text-secondary)] text-lg mb-6">
            Specializing in <span className="text-[var(--color-accent)] font-medium">API automation</span> and workflow optimization, 
            I help businesses streamline their operations through smart integrations. Whether it's connecting APIs, automating 
            business processes, or building ML-powered applications — I bring ideas to life with code.
          </p>
          <p className="text-[var(--color-text-secondary)] text-lg">
            When I'm not coding, you'll find me exploring new AI tools, contributing to open source, or building automation 
            workflows that make life easier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card flex gap-4 items-start"
            >
              <div className="p-3 rounded-lg bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/30">
                <feature.icon className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="font-semibold font-[var(--font-outfit)] mb-1">{feature.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}