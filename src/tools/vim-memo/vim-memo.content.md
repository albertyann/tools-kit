## 光标移动
```shell
j # 向下
k # 向上
h # 向左
l # 向右
$ # 光标移动到行尾（End），注意要按Shift键
0 # 光标移动到行首（Home）
^ # 光标移动到行首第一个非空白字符（Home），注意要按Shift键
```

## 窗口跳转
```shell
ctrl-w w    # 跳到下一个窗口
ctrl-w h    # 跳到左侧窗口
ctrl-w l    # 跳到右侧窗口
ctrl-w j    # 跳到下方的窗口
ctrl-w k    # 跳到上方的窗口
```

## 比较两个文件
```shell
vim -d file1 file2

or
# 已经打开了文件file1，再打开另一个文件file2进行比较
:vert diffsplit file2

or
# 分别在两个窗口里面输入命令
:diffthis
```

## 替换
```shell
:%s/^M$//g # 去掉行尾的^M。
:%s/^M//g # 去掉所有的^M。
:%s/^M/[ctrl-v]+[enter]/g # 将^M替换成回车。
:%s/^M/r/g # 将^M替换成回车。
```

## 配置vim

首字符引号(")是注释

```shell
Vim ~/.vimrc

"显示行号
set nu

"启动时隐去援助提示
set shortmess=atI

"语法高亮
syntax on

"不需要备份
set nobackup

set nocompatible

"没有保存或文件只读时弹出确认
set confirm

"鼠标可用
set mouse=a

"tab缩进
set tabstop=4
set shiftwidth=4
set expandtab
set smarttab

"文件自动检测外部更改
set autoread

"c文件自动缩进
set cindent

"自动对齐
set autoindent

"智能缩进
set smartindent

"高亮查找匹配
set hlsearch

"显示匹配
set showmatch

"显示标尺，就是在右下角显示光标位置
set ruler

"去除vi的一致性
set nocompatible

"设置键盘映射，通过空格设置折叠
nnoremap <space> @=((foldclosed(line('.')<0)?'zc':'zo'))<CR>
""""""""""""""""""""""""""""""""""""""""""""""
"不要闪烁
set novisualbell

"启动显示状态行
set laststatus=2

"浅色显示当前行
autocmd InsertLeave * se nocul

"用浅色高亮当前行
autocmd InsertEnter * se cul

"显示输入的命令
set showcmd

"被分割窗口之间显示空白
set fillchars=vert:/
set fillchars=stl:/
set fillchars=stlnc:/

" vundle 环境设置
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
"vundle管理的插件列表必须位于 vundle#begin() 和 vundle#end() 之间
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'altercation/vim-colors-solarized'
Plugin 'tomasr/molokai'
Plugin 'vim-scripts/phd'
Plugin 'Lokaltog/vim-powerline'
Plugin 'octol/vim-cpp-enhanced-highlight'
Plugin 'Raimondi/delimitMate'
" 插件列表结束
call vundle#end()
filetype plugin indent on

" 配色方案
set background=dark
colorscheme torte
"colorscheme molokai
"colorscheme phd

" 禁止显示菜单和工具条
set guioptions-=m
set guioptions-=T

" 总是显示状态栏
set laststatus=2

" 禁止折行
set nowrap

" 设置状态栏主题风格
let g:Powerline_colorscheme='solarized256'

syntax keyword cppSTLtype initializer_list

" 基于缩进或语法进行代码折叠
"set foldmethod=indent
set foldmethod=syntax
" 启动 vim 时关闭折叠代码
set nofoldenable

"允许用退格键删除字符
set backspace=indent,eol,start

"编码设置
set encoding=utf-8

"共享剪切板
set clipboard=unnamed

" Don't write backup file if vim is being called by "crontab -e"
au BufWrite /private/tmp/crontab.* set nowritebackup nobackup
" Don't write backup file if vim is being called by "chpass"
au BufWrite /private/etc/pw.* set nowritebackup nobackup

" 高亮空白字符
highlight ExtraWhitespace ctermbg=red guibg=red
autocmd BufWinEnter * match ExtraWhitespace /\s\+$\| \+\ze\t\+\|\t\+\zs \+/

```