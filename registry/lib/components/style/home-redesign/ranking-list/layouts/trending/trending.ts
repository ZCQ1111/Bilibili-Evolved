import { RankingListLayoutItem } from '../ranking-list-layout-item'

export const trending: RankingListLayoutItem = {
  name: 'trending',
  displayName: '热门视频',
  grow: true,
  component: () => import('./Trending.vue').then(m => m.default),
}
