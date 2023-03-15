<template>
  <div class="fresh-home-rank-list" :class="{ loading, loaded }">
    <div v-if="!loaded" class="fresh-home-rank-list-loading-container">
      <VLoading v-if="loading" />
      <div v-if="(error || items.length === 0) && !loading" class="fresh-home-rank-list-empty">
        <VEmpty />
        <VButton class="fresh-home-rank-list-refresh-button" round @click="reload">
          <VIcon icon="mdi-refresh" />
          刷新
        </VButton>
      </div>
    </div>
    <template v-if="loaded">
      <div v-if="firstItem" class="fresh-home-rank-list-first-item animation">
        <div class="fresh-home-rank-list-rank-item"></div>
        <a
          class="fresh-home-rank-list-rank-item-title"
          target="_blank"
          :href="firstItem.videoHref"
          :title="firstItem.title"
        >
          {{ firstItem.title }}
        </a>
        <a class="fresh-home-rank-list-cover" target="_blank" :href="firstItem.videoHref">
          <DpiImage
            :src="firstItem.coverUrl"
            :size="{ width: ui.firstCoverWidth, height: ui.firstCoverHeight }"
          />
          <UpInfo
            :up-face-url="firstItem.upFaceUrl"
            :href="firstItem.upHref"
            :up-name="firstItem.upName"
          >
            <template #fallback-icon>
              <VIcon v-bind="upInfoProps" />
            </template>
          </UpInfo>
          <div class="fresh-home-rank-list-stats">
            <VIcon icon="mdi-fire" :size="16" />
            {{ firstItem.points | formatCount }}
          </div>
        </a>
        <div class="fresh-home-rank-list-laser" data-number="1"></div>
      </div>
      <template v-for="(r, i) in excludeFirst">        
        <div
          v-if="i % 2 == 0"
          class="fresh-home-rank-list-second-item animation"
          v-bind:style="{ top: (i + 2) * 150 + 'px', bottom: (i==8 ? (12 - i * 150 + 100) : (12 - i * 150)) + 'px' }"
        >
          <a class="fresh-home-rank-list-rank-item" target="_blank" :href="r.videoHref">
            <div class="fresh-home-rank-list-rank-item-title" :title="r.title">
              {{ r.title }}
            </div>
            <UpInfo :up-face-url="r.upFaceUrl" :href="r.upHref" :up-name="r.upName">
              <template #fallback-icon>
                <VIcon v-bind="upInfoProps" />
              </template>
            </UpInfo>
            <div class="fresh-home-rank-list-stats">
              <VIcon icon="mdi-fire" :size="16" />
              {{ r.points | formatCount }}
              <VIcon icon="play" :size="16" />
              {{ r.playCount | formatCount }}
            </div>
          </a>
          <a class="fresh-home-rank-list-cover" target="_blank" :href="r.videoHref">
            <DpiImage
              :src="r.coverUrl"
              :size="{ width: ui.secondCoverWidth, height: ui.secondCoverHeight }"
            />
          </a>
          <div class="fresh-home-rank-list-laser" :data-number="i + 2"></div>
          <div v-if="i == 8">
          <VButton class="fresh-home-rank-list-backtotop-button" round @click="backtotop">
            <VIcon icon="mdi-arrow-up-bold-circle" />
            回到顶端
          </VButton>
        </div>
        </div>
        <div
          v-else
          class="fresh-home-rank-list-third-item animation"
          v-bind:style="{ top: (i + 2) * 150 + 'px', bottom: 12 - i * 150 + 'px' }"
        >
          <a class="fresh-home-rank-list-rank-item" target="_blank" :href="r.videoHref">
            <div class="fresh-home-rank-list-rank-item-title" :title="r.title">
              {{ r.title }}
            </div>
            <UpInfo :up-face-url="r.upFaceUrl" :href="r.upHref" :up-name="r.upName">
              <template #fallback-icon>
                <VIcon v-bind="upInfoProps" />
              </template>
            </UpInfo>
            <div class="fresh-home-rank-list-stats">
              <VIcon icon="mdi-fire" :size="16" />
              {{ secondItem.points | formatCount }}
              <VIcon icon="play" :size="16" />
              {{ secondItem.playCount | formatCount }}
            </div>
          </a>
          <a class="fresh-home-rank-list-cover" target="_blank" :href="r.videoHref">
            <DpiImage
              :src="r.coverUrl"
              :size="{ width: ui.thirdCoverWidth, height: ui.thirdCoverHeight }"
            />
          </a>
          <div class="fresh-home-rank-list-laser" :data-number="i + 2"></div>
        </div>        
      </template>
    </template>
  </div>
</template>
<script lang="ts">
import UpInfo from '@/components/feeds/UpInfo.vue'
import { formatCount } from '@/core/utils/formatters'
import { DpiImage, VIcon, VLoading, VEmpty, VButton } from '@/ui'
import { requestMixin, cssVariableMixin } from '../../../../mixin'
import { rankListCssVars } from './rank-list'

export default Vue.extend({
  components: {
    DpiImage,
    UpInfo,
    VIcon,
    VLoading,
    VEmpty,
    VButton,
  },
  filters: {
    formatCount,
  },
  mixins: [requestMixin(), cssVariableMixin(rankListCssVars)],
  props: {
    parseJson: {
      type: Function,
      required: true,
    },
    bangumiMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    firstItem() {
      return this.items[0]
    },
    secondItem() {
      return this.items[1]
    },
    thirdItem() {
      return this.items[2]
    },
    upInfoProps() {
      return {
        size: 18,
        icon: this.bangumiMode ? 'mdi-television-classic' : 'up-outline',
        style: {
          transform: this.bangumiMode ? 'translateY(-1px)' : 'none',
        },
      }
    },
    firstRow() {
      return this.items.slice(3, 6)
    },
    secondRow() {
      return this.items.slice(6, 10)
    },
    excludeFirst() {
      return this.items.slice(1, 10)
    },
  },
  methods: {
    backtotop() {
        try {
          window.scrollTo(0,0);
        } catch (error) {
          console.error(error)          
        } 
      },
    },
})
</script>
<style lang="scss">
@import 'common';

.fresh-home-rank-list {
  position: relative;
  flex: 1;
  width: 400px;
  overflow: hidden;
  min-height: var(--panel-height);
  height: var(--panel-height);
  padding: var(--padding);
  margin: calc(0px - var(--padding));

  --offset-second: calc(
    3 * var(--padding) + var(--rank-item-title-height) + var(--first-cover-height) +
      var(--rank-item-margin)
  );
  --offset-third: calc(
    var(--offset-second) + var(--second-cover-height) + var(--padding) + var(--rank-item-margin)
  );
  --animation-timing: cubic-bezier(0.22, 0.61, 0.36, 1);

  & &-stats {
    @include h-center(12px);
    font-size: 12px;
    opacity: 0.5;
    margin: 0 10px;
    .be-icon {
      margin-right: -8px;
    }
  }
  & &-rank-item {
    @include card(12px);
    @include v-stretch();
    border-radius: var(--home-card-radius);
    justify-content: space-between;
    padding: 10px 0;
    height: var(--rank-item-height);
    opacity: 0.95;
    z-index: -1;

    &-title {
      @include semi-bold();
      transition: color 0.2s ease-out;
      line-height: var(--rank-item-title-height);
      box-sizing: content-box;
      &:hover {
        color: var(--theme-color) !important;
      }
    }
    .be-up-info {
      align-self: flex-start;
    }
  }
  & &-first-item {
    @keyframes first-animation {
      0% {
        transform: translateY(54px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @include v-stretch();
    animation: 0.4s var(--animation-timing) first-animation paused both;
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    height: calc(100% - 2 * var(--padding));
    width: calc(100% - 2 * var(--padding));
    .fresh-home-rank-list-rank-item {
      position: absolute;
      top: 0;
      width: 100%;
      &-title {
        @include single-line();
        padding: var(--padding) 14px;
      }
    }
    .be-up-info,
    .fresh-home-rank-list-stats {
      position: absolute;
      background-color: #0008;
      color: white;
      border-radius: 8px;
    }
    .be-up-info {
      bottom: 6px;
      left: 6px;
      padding: 3px 6px;
      .be-up-info-cover-fallback {
        height: 18px;
        margin-left: 0;
      }
    }
    .fresh-home-rank-list-stats {
      opacity: 1;
      margin: 0;
      padding: 4px 6px;
      bottom: 6px;
      right: 6px;
    }
  }
  & &-second-item {
    @keyframes second-animation {
      0% {
        transform: translateY(28px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @include v-stretch();
    animation: 0.4s var(--animation-timing) second-animation paused both;
    position: absolute;
    // top: var(--offset-second);
    // bottom: var(--padding);

    .fresh-home-rank-list-rank-item {
      position: absolute;
      width: 230px;
      top: var(--padding);
      left: 146px;
      padding-left: 22px;
      &-title {
        @include max-line(2);
        margin-bottom: auto;
        padding: 0 12px;
      }
      .be-up-info {
        margin: 4px 8px;
      }
    }
  }
  & &-third-item {
    @keyframes third-animation {
      0% {
        transform: translateY(14px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @include v-stretch();
    animation: 0.4s var(--animation-timing) third-animation paused both;
    position: absolute;
    // top: var(--offset-third);
    right: var(--padding);
    // bottom: var(--padding);
    .fresh-home-rank-list-rank-item {
      position: absolute;
      width: 254px;
      top: var(--padding);
      right: 121px;
      padding-right: 18px;
      &-title {
        @include max-line(2);
        margin-bottom: auto;
        padding: 0 12px;
      }
      .be-up-info {
        margin: 4px 8px;
      }
    }
  }
  & &-cover {
    @include card(12px);
    cursor: pointer;
    display: inline-table;
    align-self: center;
    box-shadow: none;
    overflow: hidden;
    transform-origin: bottom;
    transition: 0.2s ease-out;
    position: relative;

    img {
      transition: 0.2s ease-out;
    }
    &:hover img {
      transform: scale(1.05);
    }
    &:hover {
      transform: scale(1.025);
    }
  }
  & &-laser {
    position: relative;
    align-self: center;
    flex: 1;
    width: 4px;
    border-radius: 2px;
    background-image: linear-gradient(to bottom, var(--theme-color) 0%, var(--theme-color-10) 100%);
    &::after {
      content: attr(data-number);
      @include absolute-center();
      @include h-center();
      justify-content: center;
      top: 0;
      font-weight: bold;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--theme-color);
      color: var(--foreground-color);
    }
  }
  & &-loading-container {
    @include v-center();
    justify-content: center;
    padding: var(--padding);
    border-radius: var(--home-card-radius);
    border: 2px dashed #8884;
    height: 100%;
  }
  & &-empty {
    @include v-center(12px);
    justify-content: center;
    .be-button {
      padding: 4px 10px 4px 6px !important;
      &:hover .be-icon {
        transform: rotate(1turn);
      }
    }
    .be-icon {
      margin-right: 6px;
      transition: 0.5s ease-out;
    }
  }
  & &-backtotop-button {
    .be-icon {
      transition-duration: 0.5s;
    }
    &:hover .be-icon {
      transform: rotate(1turn);
    }
  }
  &.loaded {
    @include no-scrollbar();
    overflow: initial;
    .animation {
      animation-play-state: running;
    }
  }
}
</style>
