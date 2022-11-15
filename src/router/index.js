import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import DashBoard from '../views/DashBoard.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import ProjectAdd from '../views/ProjectAdd.vue'
import Member from '../views/Member.vue'
import Demo from '../views/Demo.vue'
import Notice from '../views/Notice.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/dashboard', name: 'DashBoard', component: DashBoard },
  { path: '/projectdetail', name: 'ProjectDetail', component: ProjectDetail },
  { path: '/projectadd', name: 'ProjectAdd', component: ProjectAdd },
  { path: '/member', name: 'Member', component: Member },
  { path: '/demo', name: 'Demo', component: Demo },
  { path: '/notice', name: 'Notice', component: Notice },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
