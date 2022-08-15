# 注意： 当前项目暂时不会维护了，后续我会开放出来更加强大简洁的管理系统。

## vue-system-admin

###   [在线体验地址](http://175.24.95.198/)
###   [仓库地址](https://github.com/FTLLOVE/vue-system-admin)

### [开发的API文档](https://php-admin-ui.netlify.app/)

## 预览图

### 登录页

<img src="https://per.kelantu.com/file/20200829170621-FtGHKy2UWMiV3hEjvFOIAfDbejkd?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:BGRSirt_PScdJ0XvLZ00ieXc59g=" style="widht: 619px; height: 300px;margin-top: 20px" />

### 主面板

<img src="https://per.kelantu.com/file/20200829170621-FpitKu6oQIRSN8zSKIqTP6hfLI5a?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:cXqOfHgtj9phhy6NMViWYK9fdeI=" style="widht: 619px; height: 300px;margin-top: 30px"/>

### 基本表格

<img src="https://per.kelantu.com/file/20200829170621-FjLffhxAjnrdtzZGu4mvd_vXEBoG?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:r79y72pg-PjxONcGrcrqR0ScMNc=" style="widht: 619px; height: 300px;margin-top: 30px"/>

### 基本表单

<img src="https://per.kelantu.com/file/20200829170621-Fhdc2QmTCbdO7igO43YGok6HgOwJ?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:90jyyH_PmAP_SdtA4btGMLdUhLY=" style="widht: 619px; height: 300px;margin-top: 30px" />

### 表单详情

<img src="https://per.kelantu.com/file/20200829170621-FgqJX5sFj3fW4vD9YtnHz3LG4y2F?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:K7xnN40XnfYq9Kn4I3jASkVqRYA=" style="widht: 619px; height: 300px;margin-top: 30px" />

### markdown编辑器

<img src="https://per.kelantu.com/file/20200829170622-FrGdlPejYPXEiP5gJ7uccFjxNw7i?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:DgNDkIX9blEPTRMW3oS4Cbb-PRc=" style="widht: 619px; height: 300px;margin-top: 30px" />

### 文件上传

<img src="https://per.kelantu.com/file/20200829170622-Fv0J0Vh0cHutPBkE8WA6tefjuMGb?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:QOoFUbKkWz7fbhiEK4AK-Gx91TI=" style="widht: 619px; height: 300px;margin-top: 30px" />

### charts图标

<img src="https://per.kelantu.com/file/20200829170622-FmnQO8odgM2kRd82QWLVhnIfiWmw?imageMogr2/strip/interlace/1&e=1599004800&token=fcI92Ad84zrdox_zJW-1BhHYB-txBmuiZ8NIfvQu:wo8qNHXXlzLmqSILPeTCseUP7Xk=" style="widht: 619px; height: 300px;margin-top: 30px" />

## 说明
> ### 各位同行如果觉得这个项目还阔以的话，可以给我点个”☆“，三克油。
> ### 本项目会一直更新下去,一直开源。

> ### 原来一直是使用的是别人的Vue管理系统，可是又觉得与其用别人的东西，自己还不如花点时间和精力去开发一套自己的管理系统，并且切合着实际的项目经验去使用各个组件，这才有了*vue-system-admin*的诞生，小而精，小而全，才是我的初衷。而随着经验和场景的增加，也会不断的去使用更多好用的经验和技巧。本项目使用的数据都是静态数据，尚未发送请求获取数据。当前项目会写一个电子版的文档出来。当前本项目仅仅在登录的时候使用了真实的接口，不用担心，注意后面的小彩蛋哦。

## 技术栈

```tex
Vue2.6.11 + ElementUI2.13.2 + vue-router3.4.3 + echarts4.8.0 + v-charts1.19.0 + mavon-editor2.6.17
```

## 功能点

- [x] 登录
- [x] 基本表格
- [x] 基本表单
- [x] 表单详情
- [x] markdown编辑器
- [x] 文件上传
- [x] charts图表
- [x] 发送请求
- [x] axios封装
- [x] API封装
- [ ] 未完待续

## 项目结构

```
.
├── public                                      // 公共文件夹
│   ├── favicon.ico                             // 网站头部的图标文件
│   ├── index.html                              // 程序入口HTML文件
├── screen                                      // README.md的图片文件
├── src                                         // 源码文件夹
│   ├── api                                     // API文件
│   ├── assets                                  // 资源文件夹
│   │   └── css                                 // css文件夹
│   │       └── main.css                        // 公共css文件
│   │   └── images                              // images文件夹
│   │       └── login_bg.jpg                    // 登录页面背景图
│   │       └── logo.png                        // logo
│   │   └── theme                               // 自定义主题文件夹
│   │       └── font                            // 主题字体文件夹
│   │       └── index.css                       // 主题css
│   ├── components                              // 自定义组件文件夹
│   │   └── common                              // 公共组件
│   │       └── commonHeader.vue                // 导航栏头部组件
│   │       └── commonSiderbar.vue              // 侧边栏组件
│   │       └── commonTags.vue                  // 标签卡组件
│   │   └── Home.vue                            // 组件合并（中心页）
│   ├── pages                                   // 所有页面文件夹
│   │   └── charts                              // 图表
│   │       └── index.vue
│   │   └── dashboard                           // 主面板
│   │       └── index.vue
│   │   └── form                                // 基本表单
│   │       └── index.vue
│   │   └── form-detail                         // 表单详情
│   │       └── index.vue
│   │   └── login                               // 登录
│   │       └── index.vue
│   │   └── markdown                            // markdown
│   │       └── index.vue
│   │   └── table                               // 基本表格
│   │       └── index.vue
│   │   └── upload                              // 上传
│   │       └── index.vue
│   ├── router                                  // 路由
│   │   └── index.js										
│   ├── service                                 // 业务处理
│   │   └── axios.js                            // axios封装										
│   │   └── bus.js                              // bus总线
│   ├── utils                                   // 工具
│   │   └── httpUtil.js                         // http请求封装		
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，配置文件
├── .gitignore                                  // git忽略提交的文件
├── package.json                                // 项目依赖文件管理
├── README.md                                   // README.md
├── babel.config.js                             // babel配置文件
├── vue.config.js                               // 项目配置文件
.
```

## 克隆项目

```
git clone https://github.com/FTLLOVE/vue-system-admin.git
```

## 依赖安装

```
yarn install or npm install
```

## 编译启动项目
```
yarn serve or npm run serve
```

## 打包部署
```
yarn build or npm run build
```

## 小彩蛋
> ### 后面会有实战项目，一点一滴的编写一个项目。不仅仅有前端，还有后端，而后端会采用不同的语言，比如Java，PHP, NodeJS, Golang。当前前端也会有不同的项目，比如使用React打造的轻量简洁的中后台管理系统。使用NextJS,NuxtJS等技术开发不同技术栈的非SPA项目。
> ### 如果你觉得这就没了，那可能让你失望了，每个项目都会有配套的电子版的文档发布出来，

