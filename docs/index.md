---
home: true
heroImage: /img/logo.svg

tagline: 🚀傻瓜级ElasticSearch搜索引擎ORM框架
actionText: 开始使用 →
actionLink: /pages/ec7460/
bannerBg: /img/back.png # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 轻巧强大
    details: 小身躯蕴藏着大能量，几乎零学习成本，几分钟就能上手。却可以完成复杂的ES功能。
  - title: 简单高效
    details: 先进的设计理念，简单至上，即便是不懂ES的小白，也能轻松驾驭，并节省3-8倍代码量。
  - title: 功能丰富
    details: 自动索引托管，自动分页，傻瓜级CRUD，高亮，权重，聚合，IP，GEO地理位置，父子嵌套，应有尽有。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

<br/><br/>

<p align="center">
  <a class="become-sponsor" href="/pages/fb599d/">支持这个项目</a>
</p>

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color:  #FF9797;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #FF9797;
}
</style>

<br/>

## 🍬特性
- **零侵入**：针对ES官方提供的RestHighLevelClient只做增强不做改变，引入EE不会对现有工程产生影响，使用体验如丝般顺滑。
- **损耗小**：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作。
- **自动化**: 全球领先的哥哥你不用动,索引我全自动模式,帮助开发者和运维杜绝索引困扰。
- **强大的 CRUD 操作**：内置通用 Mapper，仅仅通过少量配置即可实现大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求。
- **支持 Lambda 形式调用**：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错段。
- **支持主键自动生成**：支持多种主键策略，可自由配置，完美解决主键问题。
- **支持 ActiveRecord 模式**：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作。
- **支持自定义全局通用操作**：支持全局通用方法注入（ Write once, use anywhere ）。
- **内置分页插件**：基于RestHighLevelClient 物理分页，开发者无需关心具体操作，且无需额外配置插件，写分页等同于普通 List 查询,比MP的PageHelper插件用起来更简单，且保持与其同样的分页返回字段,无需担心命名影响。
- **MySQL功能全覆盖**:MySQL中支持的功能通过EE都可以轻松实现。
- **支持ES高阶语法**:支持聚合,嵌套,父子类型,高亮搜索,分词查询,权重查询,Geo地理位置查询,IP查询等高阶语法，应有尽有。
- **良好的拓展性**:底层仍使用RestHighLevelClient，可保持其拓展性，开发者在使用EE的同时，仍可使用RestHighLevelClient的所有功能。

<br/>

## ✨最新版本 Latest Version: [![Maven Central](https://img.shields.io/github/v/release/xpc1024/easy-es?include_prereleases&logo=xpc&style=plastic)](https://search.maven.org/search?q=g:io.github.xpc1024%20a:easy-*)

**Maven:**

```xml
<dependency>
    <groupId>cn.easy-es</groupId>
    <artifactId>easy-es-boot-starter</artifactId>
    <version>Latest Version</version>
</dependency>
```
**Gradle:**

```groovy
compile group: 'cn.easy-es', name: 'easy-es-boot-starter', version: 'Latest Version'
```

:::tip 版本稳定吗？

在1.0正式稳定版本发布前,我们所有功能已经面向全球开发者长期试用, 而且针对每项功能我们都有测试用例覆盖.

另外我们针对整个框架的性能,安全等方面都做了理论分析+实际测试,确保每位用户用得放心.

我们由Star总数超10万的Dromara社区孵化,并有良好的社区答疑群。基本上有问必答，如出现bug，通常2个工作日内必解决。

所以，请放心使用！
:::

<br/>

## 🎉致谢

Easy-Es自从2021年开源以来，获得了很多人的支持。目前社区群答疑总计超500人，收获Star超2K， 尽管这算不上很多,但对于ES这种高门槛,低频使用的工具,已经算得上优秀了,而且开源至今时间不超半年，

这离不开社区小伙伴的支持和意见以及PR,感谢你们!我们会秉承"把简单,易用,方便留给用户,把复杂留给框架"的理念,致力于实现"让天下没有难用的ES"愿景,继续砥砺前行!


<br/>

## 🏡代码托管

<a href='https://gitee.com/dromara/easy-es' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/easy-es" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/>

## 💪🏻参与开发

欢迎各路好汉一起来参与完善 Easy-Es，我们期待您的 PR！

如果您想贡献，请先查看[参与开发](/pages/ae4dd5/)。

<br/>

## 🍭架构图

<img :src="$withBase('/img/eejg.svg')" style="zoom: 120%">

<br/>

## 🧲友情链接
<span style="width: 150px;flex:1;text-align: left">
    <a href="https://gitee.com" target="_blank">
        <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://www.oschina.net" target="_blank">
        <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/TLog" target="_blank">
        <img :src="$withBase('/img/link/tlog-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sa-token" target="_blank">
        <img :src="$withBase('/img/link/satoken-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sureness" target="_blank">
        <img :src="$withBase('/img/link/sureness-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<span style="width: 150px;text-align: left">
    <a href="https://liteflow.yomahub.com/" target="_blank">
        <img :src="$withBase('/img/link/lite-flow.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hutool" target="_blank">
        <img :src="$withBase('/img/link/hutool-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/forest" target="_blank">
        <img :src="$withBase('/img/link/forest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/MaxKey" target="_blank">
        <img :src="$withBase('/img/link/maxkey-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<span style="width: 150px;text-align: left">
    <a href="https://baomidou.com/" target="_blank">
        <img :src="$withBase('/img/link/mp.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<!-- AD 
<div class="wwads-cn wwads-horizontal page-ad" data-id="129" style="width:100%;max-height:80px;min-height:auto;"></div>
<style>
  .page-ad img{width:80px!important;}
  /* .pageT .wwads-content{display:flex;align-items: center;}
  .pageT .wwads-poweredby{display:none!important;}
  .pageT .wwads-hide{display:none!important;} */
</style>
-->