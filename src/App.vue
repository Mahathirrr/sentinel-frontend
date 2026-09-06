<script setup lang="ts">
import { onMounted } from 'vue'

import FooterBlock from '@/components/blocks/FooterBlock.vue'
import Navbar from '@/components/blocks/Navbar.vue'
import { useTheme } from '@/composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <FooterBlock />
</template>
