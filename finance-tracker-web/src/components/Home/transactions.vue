<template>
  <div class="flex items-center justify-between p-4 mb-3 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 transition-all shadow-2xs">
    <div class="flex items-center space-x-4">
      <div :class="['w-11 h-11 rounded-xl flex items-center justify-center shrink-0', transaction.bgColor]">
        <component
          :is="transaction.icon"
          :class="['w-5 h-5', transaction.iconColor]"
        />
      </div>

      <div>
        <h4 class="text-sm font-semibold text-gray-800">
          {{ transaction.title }}
        </h4>
        <p class="text-xs text-gray-400 mt-0.5">
          {{ transaction.time }} • {{ transaction.category }}
        </p>
      </div>
    </div>

    <span
      :class="[
        'text-base font-bold',
        transaction.type === 'income'
          ? 'text-emerald-600'
          : 'text-rose-500'
      ]"
    >
      {{ transaction.type === 'income' ? '+' : '-' }}
      {{ transaction.amount }}
    </span>
  </div>
</template>
<script setup>
defineProps({
  transaction: {
    type: Object,
    required: true,
  },
})
</script>