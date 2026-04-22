import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi'

const EMAIL = "mailto:22l31a04c8@gmail.com"
const LINKEDIN = "https://www.linkedin.com/in/shanmukhavarma-penmetsa/"
const GITHUB = "https://github.com/shanmukhavarma007/"

const socialLinks = [
  {
    name: 'Email',
    icon: FiMail,
    href: EMAIL,
    label: '22l31a04c8@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: LINKEDIN,
    label: 'linkedin.com/in/shanmukhavarma-penmetsa',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    href: GITHUB,
    label: 'github.com/shanmukhavarma007',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    const mailtoLink = `mailto:22l31a04c8@gmail.com?subject=Portfolio Contact - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.open(mailtoLink, '_blank')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[var(--color-text-secondary)] text-lg mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Feel free to reach out through any of these platforms or use the contact form.
          </p>

          <div className="space-y-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group"
              >
                <div className="p-3 rounded-lg bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/30 group-hover:border-[var(--color-accent)] transition-colors">
                  <link.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="card space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitted}
            className="btn-primary w-full justify-center disabled:opacity-70"
          >
            {isSubmitted ? (
              <>
                <FiCheck className="w-5 h-5" />
                Sent!
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}