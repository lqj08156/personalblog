const webpack = require("webpack")

/*配置路径的别名，CLI3需要自己创建这个文件*/
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        // 'content': 'components/content',
        // 'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}