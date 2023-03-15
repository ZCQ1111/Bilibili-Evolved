import { defineComponentMetadata } from '@/components/define'
import { contentLoaded } from '@/core/life-cycle'
import { addComponentListener } from '@/core/settings'
import { getNumberValidator, mountVueComponent } from '@/core/utils'
import { homeUrls } from '../urls'

export const component = defineComponentMetadata({
  name: 'rankingLsitHome',
  displayName: '排行榜首页',
  urlInclude: homeUrls,
  tags: [componentsTags.style],
  entry: () => {
    addComponentListener(
      'rankingListHome.maxWidth',
      (width: number) => {
        document.documentElement.style.setProperty('--home-max-width-override', `${width}px`)
      },
      true,
    )
    contentLoaded(async () => {
      const RankingListHome = await import('./RankingListHome.vue')
      const rankingListHome = mountVueComponent(RankingListHome)
      document.body.appendChild(rankingListHome.$el)
    })
  },
  options: {
    layoutOptions: {
      displayName: '版块设置',
      defaultValue: {
        trending: {
          linebreak: true,
        },
        feeds: {
          linebreak: true,
        },
        categories: {
          linebreak: true,
        },
      },
      hidden: true,
    },
    personalized: {
      displayName: '个性化推荐',
      defaultValue: true,
    },
    horizontalWheelScroll: {
      displayName: '启用横向滚动',
      defaultValue: true,
    },
    maxWidth: {
      displayName: '最大宽度 (px)',
      defaultValue: 1440,
      validator: getNumberValidator(1000, 3000),
    },
  },
  unload: () => document.body.classList.add('home-redesign-off'),
  reload: () => document.body.classList.remove('home-redesign-off'),
  instantStyles: [
    {
      name: 'fresh-home-hide-original',
      style: () => import('../hide-original.scss'),
    },
  ],
})
