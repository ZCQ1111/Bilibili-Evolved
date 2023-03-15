import { registerAndGetData } from '@/plugins/data'
import { categories } from './categories/categories'
import { feeds } from './feeds/feeds'
import { trending } from './trending/trending'

const builtInLayouts = [trending, feeds, categories]
export const [layouts] = registerAndGetData('homeRedesign.rankinglist.layouts', [...builtInLayouts])
