import { BrandGit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'VIM memo',
  path: '/vim-memo',
  description: 'VIM常用命令',
  keywords: ['git', 'push', 'force', 'pull', 'commit', 'amend', 'rebase', 'merge', 'reset', 'soft', 'hard', 'lease'],
  component: () => import('./vim-memo.vue'),
  icon: BrandGit,
});
