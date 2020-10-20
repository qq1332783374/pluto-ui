<template>
  <header class="top-nav">
    <div
      class="top-nav__mobile"
      v-if="listVisible"
      @click="handleClickList"
    >
      <svg class="top-nav__mobile-icon">
        <use xlink:href="#icon-list1"></use>
      </svg>
    </div>
    <router-link to="/" tag="div" class="top-nav__logo">
      <svg class="top-nav__logo-icon">
        <use xlink:href="#icon-huabanfuben"></use>
      </svg>
      <span>Pluto UI</span>
    </router-link>
    <ui class="top-nav__list">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ui>
  </header>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    name: 'top-nav',
    props: {
      listVisible: {
        type: Boolean,
        default: () => true
      }
    },
    setup (props, ctx) {
      const isListVisible = ref(false)

      const handleClickList = () => {
        isListVisible.value = !isListVisible.value
        ctx.emit('handleClickList', isListVisible.value)
      }
      return {
        isListVisible,
        handleClickList
      }
    }
  })
</script>

<style scoped lang="scss">
  .top-nav {
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    padding: 10px 60px;
    position: relative;
    z-index: 20;

    ul,
    li {
      list-style: none;
    }

    &__mobile {
      display: none;
      position: absolute;
      left: 60px;
      top: 10px;
      bottom: 10px;
      cursor: pointer;

      &-icon {
        width: 20px;
        height: 20px;
      }
    }

    &__logo:visited {
      color: #304455;
    }

    &__logo {
      text-decoration: none;
      position: absolute;
      left: 60px;
      top: 10px;
      bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: left 0.2s;

      &-icon {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }

      span {
        font-size: 24px;
        font-weight: bold;
      }
    }

    &__list {
      position: absolute;
      height: 100%;
      right: 60px;
      top: 10px;
      bottom: 10px;
      line-height: 40px;
      display: flex;
      flex-direction: row;

      li {
        cursor: pointer;
        margin-left: 20px;

        a {
          text-decoration: none;
        }

        a:visited {
          color: #304455;
          cursor: pointer;
        }

        a.router-link-active,
        a.router-link-exact-active {
          color: #2b99ff;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .top-nav {
      padding: 10px 20px;

      &__mobile {
        left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__logo {
        left: 50%;
        transform: translateX(-50%);

        span {
          display: none;
        }
      }

      &__list {
        left: 20px;
        display: none;
      }
    }
  }
</style>
