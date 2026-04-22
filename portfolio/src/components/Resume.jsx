import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/shanmukhavarma007/resume/raw/main/shanmukha_varma_resume.pdf'
    link.download = 'Shanmukha_Varma_Penmetsa_Resume.pdf'
    link.click()
  }

  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="section-title mx-auto">Resume</h2>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-[var(--color-text-secondary)] text-lg">
            Download my resume to learn more about my experience, education, and skills. 
            I'm currently open to opportunities in AI development and API automation.
          </p>
        </div>

        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary text-lg px-10 py-4"
        >
          <FiDownload className="w-5 h-5" />
          Download Resume
        </motion.button>
      </motion.div>
    </section>
  )
}