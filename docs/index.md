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
    <version>${Latest Version}</version>
</dependency>
```
**Gradle:**

```groovy
compile group: 'cn.easy-es', name: 'easy-es-boot-starter', version: 'Latest Version'
```

:::tip 版本稳定吗？

在1.0正式稳定版本发布前,我们所有功能已经面向全球开发者长期试用, 而且针对每项功能我们都有测试用例覆盖.

单元测试用例综合覆盖率超95%,已上线的所有功能均有测试用例覆盖,且经过生产环境和开源社区大量用户使用验证,

另外我们针对整个框架的性能,安全等方面都做了理论分析+实际测试,确保每位用户用得放心,具体可查看文档顾虑粉碎模块.

我们由Star总数超10万的Dromara社区孵化,并有良好的社区答疑群.基本上有问必答，如出现bug,通常2个工作日内必解决.

引入EE即引入了ES所需最小全部依赖,无需再额外去研究和引入ES所需依赖,我们对所有项目透明,代码零侵入,引入不影响您

当前项目的所有功能,底层是RestHighLevelClient,引入后您依旧可以使用RestHighLevelClient全部功能,并且可以

享受到EE为您提供的各种开箱即用的功能和解放双手的智能化套件.

所以,请您放心引入使用！
:::

<br/>

## 安全 
<a href="https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/dromara/easy-es.git.svg?size=small"/></a>

我们已接入[OSCS墨菲安全扫描](https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp)，ee源码中未被扫描出任何风险项，超越100%的项目，确保人畜无害！ 大家可放心使用，当然如果您仍不放心，我们推荐您在使用前下载ee源码亲自阅读一番，我们是100%开源，是否有风险您一看便知。

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

<style>
.friends-item {
  width: 150px;
  height:40px;
  flex:1;
  text-align: center;
  display: inline-block;
  margin: 5px;
}

.friends-item-img {
  object-fit: contain;
  max-width:150px !important;
  height: 100%;
}
</style>

## 🤝 Dromara 组织项目

<p align="center">
<b><a href="https://dromara.org/zh/projects/" target="_blank">为往圣继绝学，一个人或许能走的更快，但一群人会走的更远。</a></b>
</p>

<p >
<a class="friends-item" href="https://hutool.cn/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/hutool2.png')" alt="🍬小而全的Java工具类库，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。">
</a>
<a class="friends-item" href="https://sa-token.dev33.cn/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/sa-token.png')" alt="一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！">
</a>
<a class="friends-item" href="https://liteflow.yomahub.com/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/liteflow2.png')" alt="轻量，快速，稳定，可编排的组件式流程引擎">
</a>
<a class="friends-item" href="https://jpom.top/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/jpom.png')" alt="一款简而轻的低侵入式在线构建、自动部署、日常运维、项目监控软件">
</a>
<a class="friends-item" href="https://gitee.com/dromara/TLog" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/tlog2.png')" alt="一个轻量级的分布式日志标记追踪神器，10分钟即可接入，自动对日志打标签完成微服务的链路追踪">
</a>
<a class="friends-item" href="https://easy-es.cn/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/easy-es2.png')" alt="🚀傻瓜级ElasticSearch搜索引擎ORM框架">
</a>
<a class="friends-item" href="https://gitee.com/dromara/hmily" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/hmily.png')" alt="高性能一站式分布式事务解决方案。">
</a>
<a class="friends-item" href="https://gitee.com/dromara/Raincat" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/raincat.png')" alt="强一致性分布式事务解决方案。">
</a>
<a class="friends-item" href="https://gitee.com/dromara/myth" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/myth.png')" alt="可靠消息分布式事务解决方案。">
</a>
<a class="friends-item" href="https://cubic.jiagoujishu.com/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/cubic.png')" alt="一站式问题定位平台，以agent的方式无侵入接入应用，完整集成arthas功能模块，致力于应用级监控，帮助开发人员快速定位问题">
</a>
<a class="friends-item" href="http://forest.dtflyx.com/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/forest-logo.png')" alt="Forest能够帮助您使用更简单的方式编写Java的HTTP客户端" nf>
</a>
<a class="friends-item" href="https://su.usthe.com/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/sureness.png')" alt="面向 REST API 的高性能认证鉴权框架">
</a>
<a class="friends-item" href="https://gitee.com/dromara/northstar" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/northstar_logo.png')" alt="Northstar盈富量化交易平台">
</a>
<a class="friends-item" href="https://www.jeesuite.com/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/mendmix.png')" alt="开源分布式云原生架构一站式解决方案">
</a>
<a class="friends-item" href="https://www.x-easypdf.cn" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/koalas-rpc2.png')" alt="企业生产级百亿日PV高可用可拓展的RPC框架。">
</a>
<a class="friends-item" href="https://dynamictp.cn/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/dynamic-tp.png')" alt="🔥🔥🔥 基于配置中心的轻量级动态可监控线程池">
</a>
<a class="friends-item" href="https://hertzbeat.com/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/hertzbeat_brand.jpg')" alt="易用友好的云监控系统">
</a>
<a class="friends-item" href="https://maxkey.top/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/maxkey.png')" alt="业界领先的身份管理和认证产品">
</a>
<a class="friends-item" href="https://plugins.sheng90.wang/fast-request/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/fast-request.png')" alt="Idea 版 Postman，为简化调试API而生">
</a>
<a class="friends-item" href="https://async.sizegang.cn/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/gobrs-async.png')" alt="🔥 配置极简功能强大的异步任务动态编排框架">
</a>
<a class="friends-item" href="https://www.x-easypdf.cn" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/x-easypdf.png')" alt="一个用搭积木的方式构建pdf的框架（基于pdfbox）">
</a>
<a class="friends-item" href="http://dromara.gitee.io/image-combiner" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/image-combiner.png')" alt="一个专门用于图片合成的工具，没有很复杂的功能，简单实用，却不失强大">
</a>
<a class="friends-item" href="https://www.herodotus.cn/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/dante-cloud2.png')" alt="Dante-Cloud 是一款企业级微服务架构和服务能力开发平台。">
</a>
<a class="friends-item" href="https://dromara.org/zh/projects/" target="_blank">
	<img class="no-zoom friends-item-img" :src="$withBase('/img/friends/link/dromara.png')" alt="让每一位开源爱好者，体会到开源的快乐。">
</a>

## 🧲友情链接
<div class="friends-item">
  <span style="width: 150px;flex:1;text-align: left">
      <a href="https://gitee.com" target="_blank">
          <img :src="$withBase('/img/external/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://www.oschina.net" target="_blank">
          <img :src="$withBase('/img/external/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://baomidou.com/" target="_blank">
          <img :src="$withBase('/img/external/mp.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
</div>

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="174"></div>
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }

</style>