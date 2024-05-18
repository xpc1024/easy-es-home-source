---
home: true
heroImage: /img/logo.svg
heroText: Easy-Es

tagline: 🚀傻瓜级ElasticSearch搜索引擎ORM框架
actions:
- actionText: 🚀开始使用
  actionLink: /pages/7ead0d/
- actionText: 💘爱发电
  actionLink: https://afdian.net/a/easy-es
  actionClass: action-button-easyes
bannerBg: /img/back.png # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
defaultMode: light
features: # 可选的
  - title: 轻巧强大
    details: 小身躯蕴藏着大能量，几乎零学习成本，几分钟就能上手。却可以完成复杂的ES功能。
  - title: 简单高效
    details: 先进的设计理念，简单至上，即便是不懂ES的小白，也能轻松驾驭，并节省3-80倍代码量。
  - title: 功能丰富
    details: 自动索引托管，自动分页，傻瓜级CRUD，高亮，权重，聚合，IP，GEO地理位置，父子嵌套，应有尽有。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表

postList: none
notices: # 可选的
    - id: Easy-Es-2.0.0
      title: 🚀 Easy-Es v2.0.0 正式版发布！
      content: '<div><ul><li>2024-05</li><li>海量新特性,欢迎试用!</ul></div><p style="text-align: right;"><a href="/pages/2934a3/">查看详情</a></p>'
      isHtmlContent: true
---
<Notice :data="$frontmatter.notices"/>

<br/>

## ⛵赞助商

::: cardList
```yaml
- name: Fast Request
  desc: IDEA版Postman, 便捷, 易用, 为简化API调试而生...
  avatar: /img/sponsor/fastRequest-logo.svg
  link: https://api-buddy.cn/
  bgColor: '#FFB6C1'
  textColor: '#FFFFFF'
  
- name: AgileBPM
  desc: 快速、简洁且强大的低代码工作流开发平台...
  avatar: /img/sponsor/agile-logo.png
  link: https://www.tongzhouyun.com/
  bgColor: '#FFB6C1'
  textColor: '#FFFFFF'  
  
- name: JNPF低代码开发平台
  desc: 技术双引擎系统,无限制业务场景,永久使用权,全源码交付
  avatar: /img/sponsor/jnpf-logo.png
  link: https://www.jnpfsoft.com/index.html?from=easy-es
  bgColor: '#FFB6C1'
  textColor: '#FFFFFF'

- name: 明道云零代码平台
  desc: 快速响应业务需求, 从"IT背锅侠"变成"IT英雄"
  avatar: /img/sponsor/mingdao-logo.jpg
  link: https://www.mingdao.com?s=utm_67&utm_source=easy-es&utm_medium=banner&utm_campaign=IT%E7%BD%91%E7%AB%99&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1
  bgColor: '#1E90FF'
  textColor: '#FFFFFF'

- name: MISBoot低代码开发平台
  desc:  零代码应用快速搭建、 让开发变得更简单...
  avatar: /img/sponsor/mis-logo.png
  link: https://www.misboot.com/?from=easy-es
  bgColor: '#1E90FF'
  textColor: '#FFFFFF'

- name: 云程低代码平台
  desc:  源码交付、 私有化部署、 定制化开发...
  avatar: /img/sponsor/yc-logo.jpg
  link: http://www.yunchengxc.com
  bgColor: '#1E90FF'
  textColor: '#FFFFFF'

```
:::

<style>
  .page-wwads{
    width:100%!important;
    min-height: 0!important;
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

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color:  #FFB6C1;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #FFB6C1;
}
</style>

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="174"></div>

<p align="center">
  <a class="become-sponsor" href="/pages/fb599d/">成为赞助商</a>
</p>

<br/>

## 🍬特性
- **零侵入**：针对ES官方提供的RestHighLevelClient只做增强不做改变，引入EE不会对现有工程产生影响，使用体验如丝般顺滑。
- **损耗小**：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作。
- **自动化**: 全球领先的哥哥你不用动,索引我全自动模式,帮助开发者和运维杜绝索引困扰。
- **智能化:** 根据索引类型和当前查询类型上下文综合智能判断当前查询是否需要拼接.keyword后缀,减少小白误用的可能。
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
<br/>

## ✨最新版本 Latest Version: [![Maven Central](https://img.shields.io/github/v/release/xpc1024/easy-es?include_prereleases&logo=xpc&style=plastic)](https://search.maven.org/search?q=g:io.github.xpc1024%20a:easy-*)

**Maven:**

```xml
<dependency>
    <groupId>org.dromara.easy-es</groupId>
    <artifactId>easy-es-boot-starter</artifactId>
    <version>${Latest Version}</version>
</dependency>
```
**Gradle:**

```groovy
compile group: 'org.dromara.easy-es', name: 'easy-es-boot-starter', version: 'Latest Version'
```
<br/>
<br/>

:::tip 版本稳定吗？

在版本发布前,我们针对每项功能我们都有测试用例覆盖,

单元测试用例综合覆盖率超95%,已上线的所有功能均有测试用例覆盖,且经过生产环境和开源社区大量用户使用验证,

另外我们针对整个框架的性能,安全等方面都做了理论分析+实际测试,确保每位用户用得放心,具体可查看文档顾虑粉碎模块.

我们由Star总数超10万的Dromara社区孵化,并有良好的社区答疑群.基本上有问必答，如出现bug,通常2个工作日内必解决.

引入EE即引入了ES所需最小全部依赖,无需再额外去研究和引入ES所需依赖,我们对所有项目透明,代码零侵入,引入不影响您

当前项目的所有功能,底层是RestHighLevelClient,引入后您依旧可以使用RestHighLevelClient全部功能,并且可以

享受到EE为您提供的各种开箱即用的功能和解放双手的智能化套件.

所以,请您放心引入使用！
:::

<br/>
<br/>

## 安全 
<a href="https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/dromara/easy-es.git.svg?size=small"/></a>

我们已接入OSCS墨菲安全扫描ee源码中未被扫描出任何风险项，并且框架采用Apache2.0许可协议，确保人畜无害！ 大家可放心使用，当然如果您仍不放心，我们推荐您在使用前下载ee源码亲自阅读一番，我们是100%开源，是否有风险您一看便知。
<br/>

<a href="https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp" alt="OSCS Status"><img class="no-zoom" src="https://www.oscs1024.com/platform/badge/dromara/easy-es.git.svg?size=large"/></a>

<br/>

## 🎉致谢

Easy-Es自从2021年正式开源以来，获得了很多人的支持。目前已常年稳居同类目各项指标排名第一,这离不开社区小伙伴的支持和意见以及PR,感谢你们!我们会秉承"把简单,易用,方便留给用户,把复杂留给框架"的理念,致力于实现"让天下没有难用的ES"愿景,继续砥砺前行!

<br/>
<br/>

## 🏡代码托管

<a href='https://gitee.com/dromara/easy-es' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/easy-es" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/>
<br/>

## 💪🏻参与开发

欢迎各路好汉一起来参与完善 Easy-Es，我们期待您的 PR！

如果您想贡献，请先查看[参与贡献](/pages/7d828w/)。

<br/>
<br/>

## 📚 知识星球
<div>
    <a href="https://gitee.com/" target="_blank" >
        <img style="zoom:50%;" :src="$withBase('/img/zsxq.png')" >
    </a>
</div>

<br/>
<br/>


## 🤝 Dromara 组织项目

<p>
<b><a href="https://dromara.org/zh/projects/" target="_blank">为往圣继绝学,一个人或许能走的更快,但一群人会走的更远!</a></b>
</p>
<div>
    <a href="https://easy-es.cn/" target="_blank" style="width:15%;  padding:10px 10px 10px 0;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/easy-es.png')" class="no-zoom" title="🚀傻瓜级ElasticSearch搜索引擎ORM框架">
    </a>
    <a href="https://hutool.cn/" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/hutool.svg')" class="no-zoom" title="🍬小而全的Java工具类库，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。">
    </a>
    <a href="https://sa-token.dev33.cn/" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/sa-token.png')" class="no-zoom" title="一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！">
    </a>
    <a href="https://gitee.com/dromara/liteFlow" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/lite-flow.png')" class="no-zoom" title="轻量，快速，稳定，可编排的组件式流程引擎">
    </a>
    <a href="https://hertzbeat.com/" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/hertzbeat-logo.png')" class="no-zoom" title="易用友好的云监控系统">
    </a>
    <a href="http://forest.dtflyx.com/" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/forest-logo.png')" class="no-zoom" title="Forest能够帮助您使用更简单的方式编写Java的HTTP客户端" nf>
    </a>
    <a href="https://dromara.gitee.io/fast-request/" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/fastRequest.png')" class="no-zoom" title="Idea版postman神器">
    </a>
    <a href="https://gitee.com/dromara/Raincat" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/raincat-logo.png')" class="no-zoom" title="强一致性分布式事务解决方案。">
    </a>
    <a href="https://gitee.com/dromara/myth" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/myth-logo.png')" class="no-zoom" title="可靠消息分布式事务解决方案。">
    </a>
    <a href="https://su.usthe.com/" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/sureness-logo.png')" class="no-zoom" title="面向 REST API 的高性能认证鉴权框架">
    </a>
    <a href="https://www.jeesuite.com/" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/mendmix-logo.png')" class="no-zoom" title="开源分布式云原生架构一站式解决方案">
    </a>
    <a href="https://gitee.com/dromara/northstar" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/northstar-logo.png')" class="no-zoom" title="Northstar盈富量化交易平台">
    </a>
    <a href="http://maxkey.top/" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/maxkey-logo.png')" class="no-zoom" title="业界领先的身份管理和认证产品">
    </a>
    <a href="https://www.herodotus.cn/" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/dantecloud.png')" class="no-zoom" title="Dante-Cloud 是一款企业级微服务架构和服务能力开发平台。">
    </a>
    <a href="https://dynamictp.cn/" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/dynamictp-logo.png')" class="no-zoom" title="🔥🔥🔥 基于配置中心的轻量级动态可监控线程池">
    </a>
    <a href="https://www.x-easypdf.cn" target="_blank" style="width:15%;  padding:10px 0 10px 10px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/easypdf.png')" class="no-zoom" title="一个用搭积木的方式构建pdf的框架（基于pdfbox）">
    </a>
    <a href="https://async.sizegang.cn/" target="_blank" style="width:15%;  padding:10px 10px 10px 0;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/gobrs-async.png')" class="no-zoom" title="🔥 配置极简功能强大的异步任务动态编排框架">
    </a>
    <a href="https://gitee.com/dromara/koalas-rpc" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/koalas-logo.png')" class="no-zoom" title="企业生产级百亿日PV高可用可拓展的RPC框架。">
    </a>
    <a href="http://dromara.gitee.io/image-combiner" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/imageCombiner.png')" class="no-zoom" title="一个专门用于图片合成的工具，没有很复杂的功能，简单实用，却不失强大">
    </a>
    <a href="https://gitee.com/dromara/TLog" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/tlog-logo.png')" class="no-zoom" title="一个轻量级的分布式日志标记追踪神器，10分钟即可接入，自动对日志打标签完成微服务的链路追踪">
    </a>
    <a href="https://cubic.jiagoujishu.com/" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/cubic-logo.png')" class="no-zoom" title="一站式问题定位平台，以agent的方式无侵入接入应用，完整集成arthas功能模块，致力于应用级监控，帮助开发人员快速定位问题">
    </a>
    <a href="https://gitee.com/dromara/hmily" target="_blank" style="width:15%; height:40px;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/hmily-logo.png')" class="no-zoom" title="高性能一站式分布式事务解决方案。">
    </a>
    <a href="https://jpom.top/" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/jpom-logo.png')" class="no-zoom" title="一款简而轻的低侵入式在线构建、自动部署、日常运维、项目监控软件">
    </a>
    <a href="https://gitee.com/dromara/go-view" target="_blank" style="width:15%;  padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/goview-logo.png')" class="no-zoom" title="让每一位开源爱好者，体会到开源的快乐">
    </a>
</div>

<br/>
<br/>

## 🧲友情链接
<div>
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
  <span style="width: 150px;text-align: left">
      <a href="https://www.mingdao.com?s=utm_68&utm_source=easy-es&utm_medium=referral&utm_campaign=friendLink&utm_content=website_footer
" target="_blank">
          <img :src="$withBase('/img/external/md.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://www.misboot.com/?from=easy-es" target="_blank">
          <img :src="$withBase('/img/external/mis-friend.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="http://www.yunchengxc.com" target="_blank">
          <img :src="$withBase('/img/external/yc.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://gitee.com/dromara/Akali" target="_blank">
          <img :src="$withBase('/img/external/akali.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://www.jnpfsoft.com/index.html?from=easy-es" target="_blank">
          <img :src="$withBase('/img/sponsor/jnpf.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
</div>

<br/>

<style lang="stylus">
.action-button-easyes
    margin-left 0.7rem
    margin-top 0.5rem
    display inline-block
    font-size 1.2rem
    background-color #FFB6C1
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color 0.1s ease
    box-sizing border-box
    border-bottom 1px solid #A63939
    color #000000
    &:hover
        background-color lighten(#FFB6C1, 10%)
</style>
