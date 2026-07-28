<template>
  <div class="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm space-x-4">
    <!-- Icon Container -->
    <div :class="['w-12 h-12 rounded-xl flex items-center justify-center shrink-0', iconBgColor]">
      <component :is="icon" :class="['w-6 h-6', iconColor]" />
    </div>
    
    <!-- Text Info -->
    <div>
      <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">{{ title }}</p>
      <h3 :class="['text-2xl font-bold mt-1', valueColor]">{{ value }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  icon: Object, // Lucide component / SVG
  iconBgColor: { type: String, default: 'bg-gray-100' },
  iconColor: { type: String, default: 'text-gray-700' },
  valueColor: { type: String, default: 'text-gray-900' }
})
</script>