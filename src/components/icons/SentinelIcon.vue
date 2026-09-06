<script setup lang="ts">
interface Props {
  size?: number | string
  iconClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
})
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    :class="props.iconClass"
  >
    <defs>
      <linearGradient id="sentinel-shield-face" x1="24" y1="6" x2="24" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#818CF8" />
        <stop offset="1" stop-color="#4338CA" />
      </linearGradient>
      <linearGradient id="sentinel-shield-shine" x1="16" y1="10" x2="32" y2="22" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFFFFF" stop-opacity="0.55" />
        <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
      </linearGradient>
      <filter id="sentinel-shield-shadow" x="-25%" y="-15%" width="150%" height="150%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#312E81" flood-opacity="0.35" />
      </filter>
    </defs>

    <ellipse cx="24" cy="41" rx="10" ry="2" fill="#312E81" opacity="0.18" />

    <path
      d="M24 7L11 13v8.5c0 7.2 5.5 13.2 13 15.5 7.5-2.3 13-8.3 13-15.5V13L24 7Z"
      fill="#3730A3"
      transform="translate(0 2)"
      opacity="0.35"
    />

    <path
      d="M24 6L11 12v8.5c0 7.2 5.5 13.2 13 15.5 7.5-2.3 13-8.3 13-15.5V12L24 6Z"
      fill="url(#sentinel-shield-face)"
      filter="url(#sentinel-shield-shadow)"
    />

    <path
      d="M24 9L15 13.5v6.8c0 4.8 3.6 8.8 9 10.4 5.4-1.6 9-5.6 9-10.4v-6.8L24 9Z"
      fill="url(#sentinel-shield-shine)"
    />

    <path
      d="M19 23.5l3 3 7-7.5"
      stroke="#FFFFFF"
      stroke-width="2.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
