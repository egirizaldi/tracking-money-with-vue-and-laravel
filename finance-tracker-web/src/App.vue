<script setup>
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue';
import AddTransactionModal from './components/addTransaction/addTransaction.vue';
import { addTransaction as addTransactionToList } from './components/Home/homeData.js';

const isModalOpen = ref(false)

const handleSaveTransaction = (newTransaction) => {
  addTransactionToList(newTransaction)
}


</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    
    <Sidebar @open-modal="isModalOpen=true"/>
    <div class="w-64 h-screen"></div>
    <main class="flex-1 p-8 overflow-y-auto">
      <router-view />
    </main>
    <AddTransactionModal
      :is-open="isModalOpen"
      @close="isModalOpen=false"
      @submit="handleSaveTransaction"
    />

  </div>
 
</template>
