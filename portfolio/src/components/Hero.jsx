import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'

const HIRE_ME_LINK = "mailto:22l31a04c8@gmail.com?subject=Hiring Inquiry&body=Hi Shanmukha, I would like to discuss an opportunity with you."

export default function Hero() {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent-glow)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,255,136,0.05)_0%,_transparent_50%)]" />
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/3 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--color-accent)] font-medium mb-4 tracking-wider uppercase text-sm">
            AI-First Developer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-[var(--font-outfit)] mb-6"
        >
          Shanmukha Varma{' '}
          <span className="gradient-text">Penmetsa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-4"
        >
          API Automation Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10"
        >
          Building AI-powered automation systems using APIs, LLMs, and no-code tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            <FiArrowDown />
            View Projects
          </a>
          
          <a 
            href="https://github.com/shanmukhavarma007/resume/blob/main/shanmukha_varma_resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FiDownload />
            View / Download Resume
          </a>
          
          <a href={HIRE_ME_LINK} className="btn-secondary">
            <FiMail />
            Hire Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}