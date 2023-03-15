import { Executable, VueModule, WithName } from '@/core/common-types'

export interface RankingListLayoutItem extends WithName {
  component: Executable<VueModule>
  grow?: boolean
}
export interface RankingListLayoutItemSettings {
  name: string
  linebreak: boolean
}
