import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved user preference, otherwise check OS preference
    const savedMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const shouldBeDark = savedMode ? savedMode === 'true' : prefersDark
    setIsDarkMode(shouldBeDark)
    updateDocumentClass(shouldBeDark)
  }, [])

  const updateDocumentClass = (isDark: boolean) => {
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
    updateDocumentClass(newMode)
  }

  return { isDarkMode, toggleTheme }
}
