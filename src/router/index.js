import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import ComoFunciona from '@/views/ComoFuncionaView.vue'
import Vender from '@/views/VenderView.vue'
import Comprar from '@/views/ComprarView.vue'
import Sobre from '@/views/SobreView.vue'
import Contacto from '@/views/ContactoView.vue'

const routes = [
  { path: '/',          name: 'home',    component: Home },
  { path: '/como',      name: 'como',    component: ComoFunciona },
  { path: '/vender',    name: 'vender',  component: Vender },
  { path: '/comprar',   name: 'comprar', component: Comprar },
  { path: '/sobre',     name: 'sobre',   component: Sobre },
  { path: '/contacto',  name: 'contacto',component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  }
})

export default router
