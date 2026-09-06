<script setup lang="ts">
import DashedLine from '@/components/DashedLine.vue'
import ResourceAllocationItem from './ResourceAllocationItem.vue'
import type { ResourceItem } from './resource-types'

const topItems: ResourceItem[] = [
  {
    title: 'Reusable issue templates.',
    description:
      'Draft lightning-fast documents with our Smart Instructions and Templates.',
    images: [
      {
        src: '/resource-allocation/templates.webp',
        alt: 'Issue template interface',
        width: 495,
        height: 186,
      },
    ],
    className:
      'flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
    fade: [''],
  },
  {
    title: 'Simplify your stack.',
    description: 'No more Confluence, SharePoint, or Microsoft Word.',
    images: [
      { src: '/logos/jira.svg', alt: 'Jira logo', width: 48, height: 48 },
      { src: '/logos/excel.svg', alt: 'Excel logo', width: 48, height: 48 },
      { src: '/logos/notion.svg', alt: 'Notion logo', width: 48, height: 48 },
      { src: '/logos/word.svg', alt: 'Word logo', width: 48, height: 48 },
      { src: '/logos/monday.svg', alt: 'Monday logo', width: 48, height: 48 },
      {
        src: '/logos/drive.svg',
        alt: 'Google Drive logo',
        width: 48,
        height: 48,
      },
      { src: '/logos/jira.svg', alt: 'Jira logo', width: 48, height: 48 },
      { src: '/logos/asana.svg', alt: 'Asana logo', width: 48, height: 48 },
    ],
    className:
      'flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0',
    fade: [],
  },
]

const bottomItems: ResourceItem[] = [
  {
    title: 'Graveyard it.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
    images: [
      {
        src: '/resource-allocation/graveyard.webp',
        alt: 'Graveyard interface',
        width: 305,
        height: 280,
      },
    ],
    className:
      '[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
    fade: ['bottom'],
  },
  {
    title: 'Task discussions.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    images: [
      {
        src: '/resource-allocation/discussions.webp',
        alt: 'Task discussions interface',
        width: 320,
        height: 103,
      },
    ],
    className:
      'justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3',
    fade: [''],
  },
  {
    title: 'Notifications.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    images: [
      {
        src: '/resource-allocation/notifications.webp',
        alt: 'Notifications interface',
        width: 305,
        height: 280,
      },
    ],
    className:
      '[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2',
    fade: ['bottom'],
  },
]
</script>

<template>
  <section id="resource-allocation" class="overflow-hidden pb-28 lg:pb-32">
    <div class="">
      <h2
        class="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Mainline your resource allocation and execution
      </h2>

      <div class="mt-8 md:mt-12 lg:mt-20">
        <DashedLine
          orientation="horizontal"
          class="container scale-x-105"
        />

        <!-- Top Features Grid - 2 items -->
        <div class="relative container flex max-md:flex-col">
          <ResourceAllocationItem
            v-for="(item, i) in topItems"
            :key="i"
            :item="item"
            :is-last="i === topItems.length - 1"
          />
        </div>
        <DashedLine
          orientation="horizontal"
          class="container max-w-7xl scale-x-110"
        />

        <!-- Bottom Features Grid - 3 items -->
        <div class="relative container grid max-w-7xl md:grid-cols-3">
          <ResourceAllocationItem
            v-for="(item, i) in bottomItems"
            :key="i"
            :item="item"
            :is-last="i === bottomItems.length - 1"
            class="md:pb-0"
          />
        </div>
      </div>
      <DashedLine
        orientation="horizontal"
        class="container max-w-7xl scale-x-110"
      />
    </div>
  </section>
</template>
