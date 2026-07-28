<script setup>
import { Calendar, ChevronDown } from "lucide-vue-next"
import SummaryCard from "./summaryCard.vue"
import TransactionItem from "./transactions.vue"
import FilterBar from "./filterBar.vue"
import { summaries, transactionGroups, currentMonth } from "./homeData.js"
</script>
<template>
  <div class="min-h-screen bg-slate-50/50 p-6 md:p-10 font-sans text-gray-800">
    <div class="max-w-5xl mx-auto space-y-6">
      
      <!-- Header Section -->
      <header class="flex items-center justify-between px-2 py-2">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Catatan Keuangan Harian</h1>
          <p class="text-sm text-gray-500 mt-0.5">Kelola finansial Anda dengan bijak.</p>
        </div>

        <!-- Month Filter Button -->
        <button class="flex items-center space-x-2 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 transition-colors">
          <Calendar class="w-3.5 h-3.5 text-gray-500" />
          <span>{{ currentMonth }}</span>
          <ChevronDown class="w-3.5 h-3.5 text-gray-400" />
        </button>
      </header>

      <!-- Summary Cards Grid -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-2">
        <SummaryCard 
          v-for="item in summaries"
          :key="item.title"
          v-bind="item"
        />

      </section>

      <!-- Main Transactions Card Container -->
      <main class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        
        <!-- Search & Filter -->
        <FilterBar />

        <div class="space-y-6">
          <div
            v-for="group in transactionGroups"
            :key="group.label"
            class="mb-6"
          >
            <div class="flex items-center space-x-2 mb-4 py-2">
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {{ group.label }} — {{ group.date }}
              </span>
            </div>

            <div class="space-y-3">
              <TransactionItem
                v-for="transaction in group.transactions"
                :key="transaction.id"
                :transaction="transaction"
              />
            </div>
          </div>
        </div>

        <!-- Footer / Load More -->
        <div class="pt-4 border-t border-gray-50 text-center">
          <button class="inline-flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors">
            <span>Lihat Transaksi Lainnya</span>
            <ChevronDown class="w-4 h-4" />
          </button>
        </div>

      </main>

    </div>
  </div>
</template>

