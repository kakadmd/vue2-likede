
import Layout from '@/layout'

export default {
  path: '/node',
  name: 'node',
  component: Layout,
  meta: { title: '点位管理', icon: 'dianwei' },
  children: [
    {
      path: 'region',
      name: 'region',
      component: () => import('@/views/quyu'),
      meta: { title: '区域管理' }
    },
    {
      path: 'node',
      name: 'node',
      component: () => import('@/views/dianweiguanli'),
      meta: { title: '点位管理' }
    },
    {
      path: 'partner',
      name: 'partner',
      component: () => import('@/views/hezuo'),
      meta: { title: '合作商管理' }
    }
  ]
}
