import { createWebHistory, createRouter } from 'vue-router'

import PageHome from './views/Home.vue'
import PageCases from './views/Cases.vue'
import PageCaseProud from './views/CaseProud.vue'
import PageCaseComingSoon from './views/CaseComingSoon.vue'

const routes = [
  { path:'/', component: PageHome },
  { path:'/cases', component: PageCases },
  { path:'/cases/proud', component: PageCaseProud },
  { path:'/cases/coffeebreakgame', component: PageCaseComingSoon },
  { path:'/cases/themilliondollargame', component: PageCaseComingSoon },
  { path:'/cases/:catchAll(.*)', component: PageCaseComingSoon },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router