import { registerAndGetData } from '@/plugins/data'

const defaultRegistryBranches = ['master', 'preview', 'rankinglist-homepage']
export const [registryBranches] = registerAndGetData('settingsPanel.registryBranches', [
  ...defaultRegistryBranches,
])
