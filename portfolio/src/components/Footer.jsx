import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'

const LINKEDIN = "https://www.linkedin.com/in/shanmukhavarma-penmetsa/"
const GITHUB = "https://github.com/shanmukhavarma007"
const EMAIL = "mailto:22l31a04c8@gmail.com"

const socialLinks = [
  { name: 'LinkedIn', icon: FiLinkedin, href: LINKEDIN },
  { name: 'GitHub', icon: FiGithub, href: GITHUB },
  { name: 'Email', icon: FiMail, href: EMAIL },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]" />
              </a>
            ))}
          </div>

          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} Shanmukha Varma Penmetsa. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg-primary)] hover:shadow-lg hover:shadow-[var(--color-accent-glow)] transition-all"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}