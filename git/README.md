# git命令总结

## 移除文件
+ git rm *
## 移动文件
+ git mv file_from file_to
## 查看提交历史
+ git log
+ git log -p 显示每次提交的内容差异
+ git log -2 仅显示最近2次提交
+ git log --stat 查看每次提交的统计信息
+ git log --pretty=oneline 格式化输出提交信息
+ git log --pretty=format:"%h %s" --graph 图像化展示提交历史
+ git log --since=2.weeks 展示近两周的提交记录
+ git log --author=chaofei 展示某个人的提交记录

## 撤销操作
+ git commit --amend  提交未提交的文件
+ git reset --hard file 撤销文件的修改
+ git checkout -- file 撤销文件的修改，慎用

## 远程分支
+ git remote -v 查看远程分支
+ git remote add pb url 添加远程分支，pb是url的别名
+ git fetch pb 直接拉pb/master的分支代码
+ git fetch url 从远程分支拉去本地没有的代码，可以直接合并。
+ git push origin master 推送到远程分支。推的时候，先要拉取代码一下，再push,防止冲突
+ git remote show origin 查看远程分支
+ git remote old_name new_name 远程仓库重命名
+ git remote rm origin 删除远程仓库

## 打标签
+ git tag 列出所有标签
+ git tag -l 'v1.8.5*' 列出指定标签
+ git tag -a v1.4 -m 'my version 1.4' 创建附注标签,-m是存储在标签的信息
+ git tag v1.4-lw 创建轻量标签，直接输入标签名，不需要-a -m 
+ git tag -a v1.2 commitId 给过去提交的打标签
+ git push origin v1.5  推送tag标签到远程
+ git push origin --tags 推送所有tag标签

## 远程分支
+ 拉取远程分支代码：git fetch = git pull + git merge
+ 删除远程分支:git push origin --delete hotfix

## 变基
+ git rebase

## 服务器分支
### 协议
+ 本地协议
+ http协议
+ ssh协议
+ git协议

## 分支切换
+ git checkout a 切换到a分支
+ 如果在切换前，有修改的代码没有提交，直接checkout会失败。此时要么把修改的代码提交，要么git stash 把代码暂时存到中间。git stash 后再git checkout a

+ git stash apply 可以把之前git stash存的代码返回来


## 分支合并

### git merge 或 git rebase

+ git merge
  - bugfix分支从master分支上分出来。在bugfix分支上修改完后，如果master分支在bugfix分支分出后，没有修改过，可以直接在master分支上执行git merge bugfix将bugfix的代码合并到master分支上。
  - 如果master分支在bugfix分支分出后，有了修改，需要把master分支新改的代码和buggix分支上的代码合并
  - 保持修改内容的历史记录，但是历史记录会很复杂

+ git rebase
  - 历史记录简单，是在原有提交的基础上将差异内容反映进去。
因此，可能导致原本的提交内容无法正常运行。


+ 删除分支
  - git branch -d branchname

+ 切换分支
  - git checkout branchname


## 回退到上一个版本

- git reset --hard

## 回退到指定的版本

- git reset --hard commitId

## 查看每次执行的命令

- git reflog

## 将文件内容回退到上次 git add 或者 git commit 前的状态

- git checkout --文件名

## 将缓存区的修改撤销掉

- git reset --hard 文件名称

## 删除文件并提交

- git rm 文件名称 git commit -m 'xxx'

## git和github 远程关联

- git remote add origin 远程的github地址

## 把本地的仓库内容推到github上

- git push -u origin master

## 创建并切换到新分支

- git checkout -b dev

### -b 表示创建并切换，相当于两个命令

- git branch dev  创建dev分支
- git checkout dev 切换到dev分支

## 将dev分支到代码合并到master分支

- 先切换到master分支，然后 git merge dev

## 删除分支

- git branch -d dev

## 查看分支合并情况

- git log --graph --pertty=oneline --abbrev-commit

## 将当前工作内容存储

- git stash

## 恢复stash 的内容

- git stash apply

## 删除 stash的内容

- git stash drop

## 恢复stash的内容并删除

- git stash pop

## 强行删除分支

- git branch -D dev

## 将远程分支和本地分支关联

- git checkout -b dev origin/dev

## 删除远程分支
- git push origin -d 分支名

## 根据远程分支创建本地分支
- git checkout -b 本地分支名 origin/远程分支名

