import Layout from '@/layout'

export default {
  path: '/user',
  name: 'user',
  component: Layout,
  meta: { title: '人员管理', icon: 'renyuan' },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/renyuan_list'),
      meta: { title: '人员列表' }
    },
    {
      path: 'user-task-stats',
      name: 'user-task-stats',
      component: () => import('@/views/renxiao'),
      meta: { title: '人效统计' }
    },
    {
      path: 'user-work',
      name: 'user-work',
      component: () => import('@/views/gongzuoliang'),
      meta: { title: '工作量列表' }
    }
  ]
}
