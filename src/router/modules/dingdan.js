import Layout from '@/layout'

export default {
  path: '/order',
  name: 'index',
  component: Layout,
  meta: {
    title: '订单管理',
    icon: 'dingdan'
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/dingdan'),
      meta: { title: '订单管理' }
    }
  ]
}
