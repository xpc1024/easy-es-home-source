const head = require('./config/head.js'); // 广告插件检测
const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  title: "Easy-Es",
  description: '傻瓜级ElasticSearch搜索引擎ORM框架',
  base: "/",
  head,
  themeConfig,
  plugins,

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/head.js',
    '.vuepress/config/nav.js',
    '.vuepress/config/htmlModules.js',
    '.vuepress/config/plugins.js',
    '.vuepress/config/themeConfig.js',
  ]
}
