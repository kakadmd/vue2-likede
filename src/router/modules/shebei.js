import Layout from '@/layout'

export default {
  path: '/vm',
  name: 'vm',
  component: Layout,
  meta: { title: '设备管理', icon: 'gongdan' },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/shebei'),
      meta: { title: '设备管理' }
    },
    {
      path: 'status',
      name: 'status',
      component: () => import('@/views/shebei_status'),
      meta: { title: '设备状态' }
    },
    {
      path: 'type',
      name: 'type',
      component: () => import('@/views/shebei_leiixng'),
      meta: { title: '设备类型' }
    }
  ]
}
