import { motion } from 'framer-motion'
import { FiCode, FiTool, FiCpu } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Programming',
    icon: FiCode,
    skills: ['Python', 'JavaScript', 'C'],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: ['Postman', 'Git', 'n8n'],
  },
  {
    title: 'AI Tools',
    icon: FiCpu,
    skills: ['OpenCode', 'Claude Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/30">
                <category.icon className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-semibold font-[var(--font-outfit)]">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 p-8 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-center"
      >
        <p className="text-[var(--color-text-secondary)]">
          Always learning and exploring new AI tools and technologies to stay at the forefront of innovation.
        </p>
      </motion.div>
    </section>
  )
}