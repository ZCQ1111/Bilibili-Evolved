import { getComponentSettings } from '@/core/settings'
import { FreshLayoutItemSettings } from './layouts/ranking-list-layout-item'

export const rankingListHomeOptions = getComponentSettings('rankingListHome').options as {
  layoutOptions: Record<string, FreshLayoutItemSettings>
  personalized: boolean
  horizontalWheelScroll: boolean
  [key: string]: any
}
