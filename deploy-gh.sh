#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 确保 vuepress 安装了
yarn add -D vuepress@next

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:1847905557/QuintessenceAllInOne.git master:gh-pages

cd -