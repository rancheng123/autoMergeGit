#!/bin/bash

# 启动调试模式
set -x



#测试 start
#echo -e $1
#echo -e "{{{{{{{{{     $1     }}}}}}}}}}}}}"
#echo -e "{{{{{{{{{     $2     }}}}}}}}}}}}}"
#exit
#测试 end



echo -e "----------------------------  合并流程     开始 ------------------------------------------------"


# 源分支
origin_branch=$1
remote_origin_branch="origin/$1"

# 目标分支
target_branch=$2


# 切到 目标分支
git checkout $target_branch


# 如果上一个命令 出错，中断后面流程
if [ $? -ne 0 ] ;
 then
 echo -e "+++++++++++++++++++++  切到 ${target_branch}  失败 +++++++++++++++++++++"
 exit
fi


echo -e "+++++++++++++++++++++  切到 ${target_branch}  完成 +++++++++++++++++++++"











#合并源分支 到当前分支
git merge $remote_origin_branch

# 如果上一个命令 出错，中断后面流程
if [ $? -ne 0 ] ;
 then
 echo -e "+++++++++++++++++++++  合并 ${remote_origin_branch} 到 当前分支${target_branch}  失败 +++++++++++++++++++++"
 exit
fi

echo -e "+++++++++++++++++++++  合并 ${remote_origin_branch} 到 当前分支${target_branch}  完成 +++++++++++++++++++++"


git pull
echo -e "+++++++++++++++++++++  pull 当前分支${target_branch}  完成 +++++++++++++++++++++"


git push
echo -e "+++++++++++++++++++++  push 当前分支${target_branch}  完成 +++++++++++++++++++++"




# 切回 源分支
git checkout $origin_branch

echo -e "+++++++++++++++++++++  切回 ${origin_branch}  完成  +++++++++++++++++++++"

echo -e "----------------------------  合并流程     结束 ------------------------------------------------"