/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-01-06 14:45:51
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-01-06 14:49:49
 * @FilePath: \react\omit\omit.js\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current' // 针对当前node版本进行编译，删除该行可能导致`npm start`报错
        }
      }
    ]
  ]
}