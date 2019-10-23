繁星技术文档
====
繁星，集成前端开发、调试、打包于一体，各业务线基于此脚手架独立开发，集中维护。
该项目对底层前端构建进行了统一处理，实现了项目结构自动生成，本地开发环境搭建、打包模块生成的一体化功能。该项目理论上可以放任何项目，但从适用的角度看，更适用于小型项目或单个的活动页面，繁星的特点是小而多，这也是项目命名为繁星的意义。

## 技术说明
+ 该项目是基于vue-cli3脚手架，对vue.config.js进行了扩展，详细可参见该文件配置；
+ 使用eslint对代码规范进行检测，使用prettier+onchange工具对代码风格进行统一约束，使用pre-commit在代码commit时对代码进行eslint和prettier检查；
+ 代码提交时遵循commitlint规范（参考./commitlint.config.js），例如： git commit -m "docs: 更新readme"
+ 创建新的项目使用命令：node createStar.js 子项目名称 执行完命令后会自动在stars目录下生成对应的子项目，同时会在项目根目录下生成一个star.json文件，该文件中的配置指定了当前要操作的子项目名，如果没有此文件，也可执行上面命令创建：node createStar.js 子项目名称，star.json配置如下：
```star.json
{"star":"子项目名"}
```

## 目录说明
* stars 存放所有子项目
  + base 基础子项目，所有子项目基于该项目生成
  + common 用于存放公共模块，包含公共组件和公共js方法等等
  + example 示例项目，公共组件的演示
* webpackPlugins 自定义webpack插件

## 打包说明
- 每次打包前修改stars/子项目/star.config.js中对应的version版本号；
- 打包预发时，执行 npm run pre 会在项目根目录dist-pre目录下根据版本号生成对应的静态资源；
- 打包线上时，执行 npm run build 会在项目根目录dist目录下根据版本号生成对应的静态资源；

## 开发说明
- 开发时，在vue文件中，使用this.$log方法打印日志，这样生产环境不会打印日志
- 优先使用./stars/common/目录中的公共组件和js功能，也可自己在该目录中封装公共模块；

## git分支说明
- 各业务线开发时从master分支新建一个自己的分支，最好将自己的分支push到远程分支，每次上完线需要将该分支和master分支进行合并；
- 默认会有master和common分支，这2个分支提交代码时会进行代码评审，通过后方可进行合并；
- common分支：当自己贡献公共代码时在common分支上面进行修改，然后合并到master分支；
- master分支：将各个稳定代码的分支合并到master分支；

``` bash
# Project setup
npm install

# create star
node createStar.js 子项目名称

# dev
npm start

# 当代码中提示eslint报错时，可执行该命令进行修复
npm run fix

# Compiles and hot-reloads for development
npm run serve

# 预发打包
npm run pre

# 上线打包
npm run build
```
