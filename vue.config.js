module.exports = {
    css: {
         // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: false,
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#c6281f',
            'link-color': '#c6281f'
          },
          javascriptEnabled: true
        },
      }
    },
  
    chainWebpack: config => {
      const svgRule = config.module.rule('svg')
  
      // 清除已有的所有 loader。
      // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      svgRule.uses.clear()
  
      // 添加要替换的 loader
      svgRule
        .use('vue-svg-loader')
          .loader('vue-svg-loader')
    },

    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  
  }
  