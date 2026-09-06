import { storeToRefs } from 'pinia'

import { useThemeStore } from '@/stores/theme'

/**
 * Reactive theme accessor (Vue equivalent of `next-themes`).
 * Default: light. If the user never picked a theme, the system
 * preference is respected.
 */
export function useTheme() {
  const store = useThemeStore()
  const { theme } = storeToRefs(store)
  return {
    theme,
    setTheme: store.setTheme,
    toggleTheme: store.toggleTheme,
    initTheme: store.init,
  }
}
