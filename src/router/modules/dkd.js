import Layout from '@/layout'

export default {
  path: '/home',
  name: 'home',
  component: Layout,
  meta: {
    title: '帝可得',
    icon: 'dashboard'
  },
  children: [
    {
      path: '',
      name: '',
      component: () => import('@/views/dashboard'),
      meta: {
        title: '帝可得',
        icon: 'dashboard'
      }
    }
  ]
}
