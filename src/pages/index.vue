<template>
  <page :page-background="true">
    <search slot="top" :value="22"></search>
    <div class="mbanner">
      <div class="m-container">
        <div class="mbanner-main">
          <cube-slide ref="slide" :data="banner" @change="changePage">
            <cube-slide-item v-for="(item, index) in banner" :key="index" @click.native="clickHandler(item, index)">
              <img class="cube-slide-img" :src="item.srcUrl">
            </cube-slide-item>
          </cube-slide>
          <div class="cube-slide-con">
            <div class="cube-slide-con-item">
              <h3>"博爱甬城·助您黔程"结对助学</h3>
              <p>公募机构：宁波市红十字会</p>
            </div>
            <div class="cube-slide-con-item">
              <p>累计帮扶</p>
              <p>100位</p>
            </div>
          </div>
        </div>
        <p class="mbanner-footer">捐赠1000-3000元，资助一名贵州省黔西南州寒门学子，帮助他们克服家庭困难，顺利完成学业。</p>
      </div>
    </div>
    <div style='height: 500px;background: pink'></div>
  </page>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        value: "",
        banner: []
      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      },
      resizeHandler(e) {
        this.$refs.slide.refresh()
      },
    },
    created() {
      this.$http.get("/sys/ad/page").then(res => {
        this.banner = res.items
      }).catch(err => {
        console.log(err)
      })
    },
    mounted() {
      window.addEventListener("resize", (e) => this.resizeHandler(e))
    },
    destroyed() {
      window.removeEventListener('resize', e => this.resizeHandler(e))
    }
  }
</script>
<style lang="scss" scoped>
  .mbanner {
    position: relative;
    background: #fff;
    &:after {
      width: 100%;
      height: 1.5rem;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: $bgColor3;
    }

    &-main {
      position: relative;
      z-index: 1;
      padding: 10px;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, .3);
      .cube-slide-img {
        width: 100%;
      }
      .cube-slide-con {
        display: flex;
        justify-content: space-between;
        &-item {
          display: flex;
          flex-direction: column;
        }
      }
    }
    &-footer {
      color: #999
    }
  }
</style>
<style lang="scss">
  .cube-slide-dots {
    bottom: 12px !important;
    & > span {
      opacity: .3 !important;;
      width: 24px !important;
      height: 3px !important;
      margin: 0 2px !important;
      background: #fff !important;
      transition: all .3s;
      &.active {
        opacity: 1 !important;
      }
    }
  }
</style>
