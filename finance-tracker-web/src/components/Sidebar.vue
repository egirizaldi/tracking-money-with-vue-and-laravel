<script setup>
import { ref } from 'vue'

const emit = defineEmits(['open-modal'])

// (Opsional) Jika menggunakan Vue Router, ganti ref ini dengan useRoute()

const menus = [
  {
    name: 'Beranda',
    path: '/',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    name: 'Laporan',
    path: '/laporan',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    name: 'Anggaran',
    path: '/anggaran',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  }
]

// Data profil user (bisa dipisah ke props/store nanti)
const user = ref({
  name: 'Budi Santoso',
  role: 'Premium Member',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
})

// Function untuk handle klik Tambah Transaksi
const handleAddTransaction = () => {
  emit('open-modal')
}
</script>

<template>
  <aside class="fixed top-0 left-0 w-64 h-screen z-40 bg-white border-r border-gray-100 flex flex-col justify-between p-6 select-none shrink-0">
    <!-- Top Section: Logo & Navigation -->
    <div class="space-y-8">
      <!-- Brand Logo -->
      <div class="px-2 flex items-center">
        <img 
          src="./icons/logo.png" 
          alt="UangKu Logo" 
          class="h-10 w-auto object-contain"
        />
      </div>

      <!-- Navigation Menu -->
      <nav class="space-y-1.5">
        <router-link 
          v-for="item in menus" 
          :key="item.name"
          :to="item.path"
          v-slot="{isActive, navigate}"
          custom
        >
          <a 
            :href="item.path"
            @click="navigate"
            :class="['flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm transition-all duration-200 cursor-pointer',
              isActive
                ? 'bg-[#52f0a8] text-gray-800 font-semibold shadow-xs'
                : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900'
            ]"
          >
            <svg 
              class="w-5 h-5 shrink-0" 
              :class="isActive ? 'text-gray-800' : 'text-gray-600'" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
            </svg>
            <span>{{ item.name }}</span>
          </a>
        </router-link>
      </nav>
    </div>

    <!-- Bottom Section: Action Button & User Profile -->
    <div class="space-y-5 border-t border-gray-100 pt-5">
      <!-- Button Tambah Transaksi -->
      <button 
        @click="handleAddTransaction"
        class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
      >
        <svg 
          class="w-5 h-5 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
        </svg>
        <span class="text-sm">Transaksi Baru</span>
      </button>

      <!-- User Profile -->
      <div class="flex items-center gap-3 px-2 py-6">
        <img 
          :src="user.avatar" 
          :alt="`${user.name} Profile`" 
          class="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div class="flex flex-col min-w-0">
          <span class="text-sm font-bold text-gray-900 truncate">{{ user.name }}</span>
          <span class="text-xs text-gray-400 font-medium truncate">{{ user.role }}</span>
        </div>
      </div>
    </div>
  </aside>
</template>