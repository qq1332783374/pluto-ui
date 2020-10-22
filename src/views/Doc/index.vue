<template>
  <div class="doc">
    <top-nav list-visible @handleClickList="handleClickList" />
    <main class="doc__main">
      <aside class="doc__side" ref="oAside">
        <h3>文档</h3>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h3>组件</h3>
        <ol>
          <li>
            <router-link to="/doc/button">按钮</router-link>
          </li>
        </ol>
      </aside>
      <div class="doc__content">
        <router-view />
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
      box-shadow: 0 0 1px rgba(0,0,0,0.25);
      line-height: 1.8;

      ol,
      li {
        list-style: none;
      }

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
