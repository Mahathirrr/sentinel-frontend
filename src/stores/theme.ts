import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'mainline-theme'

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light' as Theme,
    initialized: false,
  }),
  actions: {
    init() {
      if (this.initialized) return
      let stored: string | null = null
      try {
        stored = localStorage.getItem(STORAGE_KEY)
      } catch {
        /* storage unavailable */
      }
      if (stored === 'light' || stored === 'dark') {
        this.theme = stored
      } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
      applyTheme(this.theme)
      this.initialized = true
    },
    setTheme(theme: Theme) {
      this.theme = theme
      try {
        localStorage.setItem(STORAGE_KEY, theme)
      } catch {
        /* ignore */
      }
      applyTheme(theme)
    },
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    },
  },
})
