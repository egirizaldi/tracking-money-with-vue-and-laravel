import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Utensils,
  Car,
  Banknote,
  ShoppingBag,
  CreditCard,
  Coffee,
} from "lucide-vue-next"

export const currentMonth = "Juli 2026"

export const summaries = [
  {
    id: "saldo",
    title: "Total Saldo",
    value: "Rp 4.250.000",
    icon: Wallet,
    iconBgColor: "bg-gray-100",
    iconColor: "text-gray-800",
    valueColor: "text-gray-900",
  },
  {
    id: "income",
    title: "Pemasukan",
    value: "Rp 7.500.000",
    icon: ArrowUpRight,
    iconBgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-600",
  },
  {
    id: "expense",
    title: "Pengeluaran",
    value: "Rp 3.250.000",
    icon: ArrowDownRight,
    iconBgColor: "bg-rose-50",
    iconColor: "text-rose-500",
    valueColor: "text-rose-500",
  },
]

export const transactionGroups = [
  {
    label: "HARI INI",
    date: "Selasa, 21 Juli 2026",
    transactions: [
      {
        id: "trx-1",
        title: "Nasi Goreng Spesial",
        time: "12:30 WIB",
        category: "Makanan",
        amount: "Rp 35.000",
        type: "expense",
        icon: Utensils,
        bgColor: "bg-orange-50",
        iconColor: "text-orange-500",
      },
      {
        id: "trx-2",
        title: "Grab Ride ke Kantor",
        time: "08:15 WIB",
        category: "Transport",
        amount: "Rp 22.000",
        type: "expense",
        icon: Car,
        bgColor: "bg-blue-50",
        iconColor: "text-blue-500",
      },
    ],
  },
  {
    label: "KEMARIN",
    date: "Senin, 20 Juli 2026",
    transactions: [
      {
        id: "trx-3",
        title: "Fee Freelance Proyek A",
        time: "17:00 WIB",
        category: "Freelance",
        amount: "Rp 500.000",
        type: "income",
        icon: Banknote,
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-500",
      },
      {
        id: "trx-4",
        title: "Minimarket - Belanja Bulanan",
        time: "14:45 WIB",
        category: "Belanja",
        amount: "Rp 245.000",
        type: "expense",
        icon: ShoppingBag,
        bgColor: "bg-purple-50",
        iconColor: "text-purple-500",
      },
    ],
  },
  {
    label: "MINGGU INI",
    date: "Minggu, 20 Juli 2026",
    transactions: [
      {
        id: "trx-5",
        title: "Setoran Gaji",
        time: "08:00 WIB",
        category: "Gaji",
        amount: "Rp 3.000.000",
        type: "income",
        icon: CreditCard,
        bgColor: "bg-sky-50",
        iconColor: "text-sky-500",
      },
      {
        id: "trx-6",
        title: "Ngopi Siang",
        time: "10:15 WIB",
        category: "Hiburan",
        amount: "Rp 28.000",
        type: "expense",
        icon: Coffee,
        bgColor: "bg-amber-50",
        iconColor: "text-amber-500",
      },
    ],
  },
]

const addTransaction = (form) =>{
  if(form.type === "income"){
    transactionGroups[0].transactions.unshift({
      id: `trx-${Date.now()}`,
      title:form.title,
      category:form.category,
      amount:`Rp ${Number(form.amount).toLocaleString("id-ID")}`,
      type:form.type,
      time:new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})+" WIB"
    })
  }
}