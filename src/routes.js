import { createWebHistory, createRouter } from 'vue-router'

import PageHome from './views/Home.vue'
import PageCases from './views/Cases.vue'
import PageCaseProud from './views/CaseProud.vue'

const routes = [
  { path:'/', component: PageHome },
  { path:'/cases', component: PageCases },
  { path:'/cases/proud', component: PageCaseProud },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router