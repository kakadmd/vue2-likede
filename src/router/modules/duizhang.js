import Layout from '@/layout'

export default {
  path: '/report',
  name: 'report',
  component: Layout,
  meta: {
    title: '对账管理',
    icon: 'dashboard'
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/duizhang'),
      meta: { title: '对账管理', icon: 'dashboard' }
    }
  ]
}
