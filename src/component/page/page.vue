<template>
  <div class="page" :class="{'customBg':pageBackground}">
    <div class="page-top">
      <slot name="top"></slot>
    </div>
    <div class="page-middle">
      <cube-scroll ref="scroll" :options="options" :scrollEvents="scrollEvents"
                   @before-scroll-start="beforeScrollStart" @scroll="scroll"
                   @pulling-down="onPullingDown" @pulling-up="onPullingUp" @forceUpdate="forceUpdate">
        <router-view></router-view>
        <slot></slot>
      </cube-scroll>
    </div>
    <div class="page-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "page",
    data() {
      return {
        scrollEvents: ['scroll', 'before-scroll-start'],
      }
    },
    props: ['pageBackground', 'opt'],
    computed: {
      options() {
        let o = {
          pullDownRefresh: false,
          pullUpLoad: false
        }
        return Object.assign({}, o, this.opt)
      }
    },
    methods: {
      beforeScrollStart() {
        this.$refs.scroll.refresh()
      },
      forceUpdate() {
        this.$refs.scroll.forceUpdate()
      },
      scroll(e) {
        this.$emit('scroll', e)
      },
      onPullingUp(e) {
        console.log("上啦刷新：", e)
      },
      onPullingDown(e) {
        console.log("加载更多：", e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    &.customBg:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 50%;
      display: block;
      background: $bgColor3;
      z-index: -111;
    }
    .page-middle {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
