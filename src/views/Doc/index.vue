<template>
  <div class="doc">
    <top-nav list-visible @handleClickList="handleClickList" />
    <main class="doc__main">
      <aside class="doc__side" ref="oAside">
        左侧导航栏
      </aside>
      <div class="doc__content">
        右边内容
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import TopNav from '/@comp/top-nav'
  import { ref } from 'vue'

  export default {
    name: 'doc',
    components: {
      TopNav
    },
    setup () {
      const oAside = ref(null)

      const handleClickList = (bol) => {
        oAside.value.style.marginLeft = bol ? 0 : '-200px'
      }

      return {
        handleClickList,
        oAside
      }
    }
  }
</script>

<style scoped lang="scss">
  .doc {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;

    &__main {
      display: flex;
      flex-direction: row;
      height: calc(100% - 60px);
    }

    &__side,
    &__content {
      overflow: auto;
      padding: 10px 20px;
    }

    &__side {
      width: 200px;
      margin-left: 0;
      transition: margin-left 0.2s;
    }

    &__content {
      flex: 1;
      overflow: auto;
    }
  }

  @media screen and (max-width: 900px) {
    .doc {
      &__side {
        margin-left: -200px;
      }
    }
  }
</style>
