
import Layout from '@/layout'

export default {
  path: '/sku',
  name: 'sku',
  component: Layout,
  meta: { title: '商品管理', icon: 'shangpin' },
  children: [
    {
      path: 'sku-class',
      name: 'sku-class',
      component: () => import('@/views/shangpin_leixing'),
      meta: { title: '商品类型' }
    },
    {
      path: 'sku',
      name: 'sku',
      component: () => import('@/views/shangpin_guanli'),
      meta: { title: '商品管理' }
    }
  ]
}
