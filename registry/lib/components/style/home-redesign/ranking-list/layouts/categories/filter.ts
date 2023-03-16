import { categories } from '@/components/utils/categories/data'
// import supportedNames from './supported-names.json'

/* const excludedNames = [
  '推广',
  '正在直播',
  '番剧动态',
  '国产原创相关',
  '漫画',
  '课堂',
  '专栏',
  '特别推荐',
] */
// 先在这里过滤一下我要看的，之后看看怎么配置
const includedNames = ['动画', '音乐', '舞蹈', '鬼畜']
export const supportedCategories = Object.fromEntries(
  Object.entries(categories).filter(([name]) => {
    if (includedNames.includes(name)) {
      return true
    }
    return false
  }),
)
