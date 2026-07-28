<template>
  <div class="flex flex-col md:flex-row gap-3 mb-6">
    <!-- Search Bar -->
    <div class="relative flex-1">
      <LucideSearch class="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
      <input 
        type="text" 
        placeholder="Cari transaksi..." 
        class="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-gray-400"
      />
    </div>

    <!-- Filter Dropdown 1 -->
    <div class="relative min-w-[140px]">
      <select class="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none cursor-pointer font-medium">
        <option>Semua Tipe</option>
        <option>Pemasukan</option>
        <option>Pengeluaran</option>
      </select>
      <LucideChevronDown class="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>

    <!-- Filter Dropdown 2 -->
    <div class="relative min-w-[130px]">
      <select class="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none cursor-pointer font-medium">
        <option>Kategori</option>
        <option>Makanan</option>
        <option>Transport</option>
        <option>Freelance</option>
        <option>Belanja</option>
      </select>
      <LucideChevronDown class="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  </div>
</template>

<script setup>
import { Search as LucideSearch, ChevronDown as LucideChevronDown } from 'lucide-vue-next'
</script>