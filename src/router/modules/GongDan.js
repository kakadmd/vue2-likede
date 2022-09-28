import Layout from '@/layout'

export default {
  path: '/task',
  name: 'task',
  component: Layout,
  meta: { title: '工单管理', icon: 'gongdan' },
  children: [
    {
      path: 'business',
      name: 'business',
      component: () => import('@/views/yunying'),
      meta: { title: '运营工单' }
    },
    {
      path: 'operation',
      name: 'operation',
      component: () => import('@/views/yunwei'),
      meta: { title: '运维工单' }
    }
  ]
}
