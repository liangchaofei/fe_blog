<!--
 * @Author: your name
 * @Date: 2019-07-10 09:49:52
 * @LastEditTime : 2020-01-22 11:09:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Fe_Log/git/git命令总结.md
 -->
# git命令总结

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

