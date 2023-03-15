<template>
  <div class="fresh-home-categories">
    <div class="fresh-home-header">
      <div class="fresh-home-header-title">排行榜</div>
    </div>
    <div class="fresh-home-categories-contents">
      <div
        v-for="t of tabs"
        :key="t.name"
        :data-name="t.name"
        class="fresh-home-categories-content"
      >
        <component :is="content" :region="t" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ArrayContent } from '@/core/common-types'
import { Reorder } from '@/core/reorder'
import { ascendingSort } from '@/core/utils/sort'
import { VButton, VIcon } from '@/ui'
import { rankingListHomeOptions } from '../../types'
import { supportedCategories } from './filter'
import { getContent } from './content/content'

const tabs = Object.entries(supportedCategories).map(([name, category]) => ({
  id: category.code as number,
  name,
  displayName: name,
  category,
  href: category.link,
  order: 0,
}))
type TabType = ArrayContent<typeof tabs>
export default Vue.extend({
  components: {
    VButton,
    VIcon,
  },
  data() {
    const orderMap = (rankingListHomeOptions.categoriesOrder ?? {}) as Record<string, number>
    const orderedTabs = [...tabs].sort(ascendingSort(t => orderMap[t.name]))
    return {
      tabs: orderedTabs,
      isReordering: false,
      reorder: null,
      selectedTab: orderedTabs[0],
      // 动态和番剧的排行榜没啥差别，可以不改
      content: getContent(orderedTabs[0].name),
    }
  },
  mounted() {
    const tabsContainer = this.$refs.tabs as HTMLElement
    const reorder = new Reorder(tabsContainer)
    reorder.addEventListener('reorder', ({ detail: items }) => {
      const newOrder = Object.fromEntries(
        items.map(it => {
          const name = it.element.getAttribute('data-name') as string
          return [name, it.order]
        }),
      )
      console.log(items, newOrder)
      rankingListHomeOptions.categoriesOrder = newOrder
    })
    this.reorder = reorder
  },
  methods: {
    toggleReorder() {
      this.reorder.toggle()
      this.isReordering = this.reorder.enabled
    },
    selectTab(tab: TabType) {
      if (this.isReordering) {
        return
      }
      if (this.selectedTab === tab) {
        window.open(tab.href, '_blank')
        return
      }
      this.selectedTab = tab
      this.content = getContent(tab.name)
    },
  },
})
</script>
<style lang="scss">
@import 'common';

.fresh-home-categories {
  @include v-stretch();
  --fresh-home-categories-column-gap: 28px;
  --fresh-home-categories-header-gap: 12px;
  &-content {
    font-size: 14px;
  }
  .fresh-home-categories-contents {
    display: flex;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(4, 25%);
  }
}
</style>
