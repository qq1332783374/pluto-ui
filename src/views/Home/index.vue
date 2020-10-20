<template>
  <div class="home">
    <top-nav :list-visible="false"/>
    <main>
      <div class="banner">
        <h1>Pluto UI</h1>
        <h2>来自冥王星的UI</h2>
        <p>
          <a>GitHub</a>
          <a>开始</a>
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import TopNav from '/@comp/top-nav'

  export default {
    name: 'home',
    components: {
      TopNav
    }
  }
</script>

<style scoped lang="scss">
  .home {
    .banner {
      text-align: center;
    }
  }
</style>
