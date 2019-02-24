<template>
  <div class="search">
    <div class="m-container search-wrapper">
      <cube-input class="search-input" v-model="val" :clearable="clearable">
        <div slot="append" class="cubeic-search search-icon" @click="doSearch"></div>
      </cube-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        val: this.value || '',
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    },
    props: ['value'],
    methods: {
      doSearch() {
        console.log("111", this.val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    &-wrapper {
      border-radius: 50px;
      overflow: hidden;
    }
    &-input {
      padding-left: 20px;
    }
    &-icon {
      width: .36rem;
      font-size: .22rem;
    }
    .cube-input::after {
      border: none;
    }
  }
</style>
