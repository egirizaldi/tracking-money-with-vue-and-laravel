import { createRouter,createWebHistory } from "vue-router";
import homeView from "@/components/Home/homeView.vue";
import anggaranview from "@/components/Anggaran/anggaranview.vue";
import laporanView from "@/components/Laporan/laporanView.vue";
import profilView from "@/components/Profil/profilView.vue";

const routes = [
    {
        path:'/',
        name:'beranda',
        component:homeView
    },
    {
        path:'/laporan',
        name:'Laporan',
        component:laporanView
    },
    {
        path:'/anggaran',
        name:'Anggaran',
        component:anggaranview
    },
    {
        path:'/profile',
        name:'Profile',
        component:profilView
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router