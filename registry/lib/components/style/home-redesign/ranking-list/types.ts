import { getComponentSettings } from '@/core/settings'
import { RankingListLayoutItemSettings } from './layouts/ranking-list-layout-item'

export const rankingListHomeOptions = getComponentSettings('rankingListHome').options as {
  layoutOptions: Record<string, RankingListLayoutItemSettings>
  personalized: boolean
  horizontalWheelScroll: boolean
  [key: string]: any
}
