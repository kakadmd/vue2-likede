import Layout from '@/layout'

export default {
  path: '/policy',
  name: 'policy',
  component: Layout,
  meta: {
    title: '策略管理',
    icon: 'dashboard'
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/celve'),
      meta: { title: '策略管理' }
    }
  ]
}
