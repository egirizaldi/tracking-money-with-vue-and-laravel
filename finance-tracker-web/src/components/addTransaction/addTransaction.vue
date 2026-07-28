<template>
  <!-- Backdrop / Overlay Background -->
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4"
    @click.self="closeModal"
  >
    <!-- Modal Card Container -->
    <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
      
      <!-- Modal Header -->
      <div class="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
        <h2 class="text-xl font-bold text-gray-900 leading-tight">
          Tambah Transaksi<br />Baru
        </h2>
        <button 
          @click="closeModal" 
          class="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Modal Body Form -->
      <form @submit.prevent="handleSubmit" class="p-6 space-y-5">
        
        <!-- Toggle Tipe Transaksi (Pengeluaran / Pemasukan) -->
        <div class="p-1 bg-slate-100/80 rounded-xl flex items-center gap-1">
          <button
            type="button"
            @click="form.type = 'expense'"
            :class="[
              'flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer',
              form.type === 'expense' 
                ? 'bg-white text-rose-600 shadow-xs' 
                : 'text-gray-500 hover:text-gray-800'
            ]"
          >
            <MinusCircle class="w-4 h-4" />
            <span>Pengeluaran</span>
          </button>

          <button
            type="button"
            @click="form.type = 'income'"
            :class="[
              'flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer',
              form.type === 'income' 
                ? 'bg-white text-emerald-600 shadow-xs' 
                : 'text-gray-500 hover:text-gray-800'
            ]"
          >
            <PlusCircle class="w-4 h-4" />
            <span>Pemasukan</span>
          </button>
        </div>

        <!-- Input Nominal -->
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">Nominal</label>
          <div class="flex items-baseline border-b-2 border-gray-200 focus-within:border-gray-900 pb-1.5 transition-colors">
            <span class="text-lg font-bold text-gray-500 mr-2">Rp</span>
            <input 
              v-model="form.amount"
              type="text" 
              placeholder="50.000"
              class="w-full text-2xl font-bold text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-300"
            />
          </div>
        </div>

        <!-- Input Judul Transaksi -->
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1.5">Judul Transaksi</label>
          <input 
            v-model="form.title"
            type="text" 
            placeholder="misal: Beli Kopi" 
            class="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
          />
        </div>

        <!-- Row: Kategori & Tanggal -->
        <div class="grid grid-cols-2 gap-3">
          <!-- Kategori Dropdown -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Kategori</label>
            <div class="relative">
              <select 
                v-model="form.category"
                class="w-full appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-gray-900 cursor-pointer"
              >
                <option value="" disabled selected>Pilih Kategori</option>
                <option value="makanan">Makanan</option>
                <option value="transport">Transport</option>
                <option value="belanja">Belanja</option>
                <option value="tagihan">Tagihan</option>
              </select>
              <ChevronDown class="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <!-- Input Tanggal -->
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Tanggal</label>
            <div class="relative">
              <input 
                v-model="form.date"
                type="date" 
                class="w-full pl-3.5 pr-9 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-gray-900 cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
              />
              <Calendar class="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <!-- Input Catatan -->
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1.5">Catatan (Opsional)</label>
          <textarea 
            v-model="form.note"
            rows="3"
            placeholder="Tambahkan rincian lainnya..." 
            class="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none"
          ></textarea>
        </div>

        <!-- Modal Footer Actions -->
        <div class="flex items-center gap-3 pt-3 border-t border-gray-100">
          <button 
            type="button" 
            @click="closeModal"
            class="flex-1 py-2.5 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button 
            type="submit" 
            class="flex-1 py-2.5 px-4 bg-black hover:bg-gray-800 text-white font-semibold text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Simpan Transaksi
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { X, MinusCircle, PlusCircle, ChevronDown, Calendar } from 'lucide-vue-next'

// Control Modal via props atau internal ref
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'submit'])

// State Form
const form = ref({
  type: 'expense', // 'expense' atau 'income'
  amount: '',
  title: '',
  category: '',
  date: '',
  note: ''
})

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('submit', { ...form.value })
  closeModal()
}

</script>