import { RankingListLayoutItem } from '../ranking-list-layout-item'

export const categories: RankingListLayoutItem = {
  name: 'categories',
  displayName: '分区',
  grow: true,
  component: () => import('./Categories.vue').then(m => m.default),
}
