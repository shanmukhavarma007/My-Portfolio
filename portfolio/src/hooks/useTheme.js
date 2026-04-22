import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDark(false)
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.body.classList.toggle('light')
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  return { isDark, toggleTheme }
}
