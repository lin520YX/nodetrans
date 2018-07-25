## git 本地操作
- 不停的创造文件备份（没有提示）（git可以管理代码保证代码不丢失，记住历史不会丢失）
- 团队协作，两人修改同一文件，手动解决，可以实现自动合并
- 分支管理系统
## 分布式
- svn，git的区别
- svn 集中式：需要一台中央服务器
- git 速度比svn快
- svn 中每个文件夹都有一个文件。svn，git有一个单独的文件夹。git

## 配置用户（不配置用户不能提交代码）
git config --list
git config --global user.name 'your name'
git config --global user.email  'your email'


## linux
- pwd print  working directory
cat 1.html 查看文件的内容
vi 编辑
i 插入 esc 推出edit :q！强制退出
:wq 保存退出

git status 查看状态
红色表示在工作区
git add ./-A -->暂存
git rm --cached . -r -->删除暂存

//回滚
git checkout filename
git reset Head filename

//回滚历史版本
git reset --hard dasdjashd
git reflog 查看所有版本
git reset --hard HEAD^ 上一个版本


//分支 git branch  查看分支
//创建分支 git branch dev
// 切换分支 git checkout dev
## 删除分支
```
git branch -D dev

```