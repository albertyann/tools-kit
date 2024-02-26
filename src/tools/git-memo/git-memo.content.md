## Configuration

全局配置，该位置文件位于 ~/.gitconfig
首先设置自己的用户名和邮箱，每次提交的时候会用到该信心。

```shell
git config --global user.name "[name]"
git config --global user.email "[email]"
```

## Get started

初始化一个 git 库，在工作中，这不是必要的，更多时候从clone开始。
```shell
git init
```

克隆一个代码库。

```shell
git clone [url]

# 如果你使用github，你可以拿到两个地址，https 或者 ssh
git clone https://github.com/THUDM/CogVideo.git
or
git clone git@github.com:THUDM/CogVideo.git
```

## status
查看工作区
```
git status
```

## 拉取代码
查看工作区
```
git pull origin main
# 其中 origin 是库的别名，main 是分支名
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

## 推送代码

```shell
git push origin main

# 命令三件套：拉取代码 pull，提交代码  commit，推送代码 push
# 代码只有 push 之后才会到远端服务器，这样做的原因是代码开发和代码库解耦，没有网络也可以 commit
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