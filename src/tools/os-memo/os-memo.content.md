## Configuration

全局配置，该位置文件位于 ~/.gitconfig

```shell
git config --global user.name "[name]"
git config --global user.email "[email]"
```

## Get started

初始化一个 git 库

```shell
git init
```

克隆一个代码库

```shell
git clone [url]
```

## Commit

提交所有的修改

```shell
git commit -am "[commit message]"
```

对上次提交添加新的修改

```shell
git commit --amend --no-edit
```

## I’ve made a mistake

修改最近一次提交的备注

```shell
git commit --amend
```

撤消最近的提交并保留更改

```shell
git reset HEAD~1
```

Undo the `N` most recent commit and keep changes
撤消最近的N次提交并保留更改

```shell
git reset HEAD~N
```

Undo most recent commit and get rid of changes
撤消最近的提交并删除更改


```shell
git reset HEAD~1 --hard
```

Reset branch to remote state
将分支重置为远程状态

```shell
git fetch origin
git reset --hard origin/[branch-name]
```

## Miscellaneous

将本地 master 分支改名为 main

```shell
git branch -m master main
```

## Alias

git 命令别名

```shell
[alias]
    ci  = commit
    co  = checkout
    st  = status
    br  = branch
    cp  = cherry-pick
    fa  = fetch --all
    ba  = branch -a
    lg = log --stat
    lgg = log --graph
    wdiff = diff --color-words
    ppm = pull origin master
    sp = stash
    spp = stash pop
[core]
    editor = vim
[push]
    default = simple
[credential]
    helper = store
```