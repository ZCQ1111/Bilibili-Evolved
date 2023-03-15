import { RankingListLayoutItem } from '../ranking-list-layout-item'

export const feeds: RankingListLayoutItem = {
  name: 'feeds',
  displayName: '动态',
  grow: true,
  component: () => import('./Feeds.vue').then(m => m.default),
}
