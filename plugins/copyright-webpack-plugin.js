class CopyrightWebpackPlugin {
  constructor() {
    console.log('plugin is used')
  }

  /**
   * 插件执行逻辑
   * @param compiler   webpack实例
   * webpack钩子 https://www.webpackjs.com/api/compiler-hooks/
   */
  apply(compiler) {
    // 使用webpack的emit钩子compiler
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', () => {
      console.log('compiler')
    })
    // 使用webpack的emit钩子emit
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, cb) => {
      console.log('emit')
      const copyrightText = 'copyright by 江户川'
      // 输出文件
      debugger
      compilation.anssets['copyright.txt'] = {
        source: function() {
          return copyrightText
        },
        size: function() {
          return copyrightText.length
        }
      }
      cb();
    })
  }
}

module.exports = CopyrightWebpackPlugin
