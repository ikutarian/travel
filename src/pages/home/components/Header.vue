<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  /* 各类非 js 直接引用（import require）静态资源，依赖相对路径加载问题，要用 ~ 语法 */
  @import '~@styles/varibles.styl' /* 引入stylus的全局配置文件 */

  .header
    display: flex
    line-height: .86rem
    background-color: $bgColoe /* 使用stylus全局配置的内容 */
    color: #fff
    .header-left
      width: .64rem
      float: left
      .icon-back
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>