<template>
  <div class="content">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'WallpaperContent',
  data () {
    return {
      transitionName: '',
      switchs: true
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.switchs) {
        this.transitionName = 'slide-left'
        this.switchs = false
      } else {
        this.transitionName = 'slide-right'
        this.switchs = true
      }
    }
  }
}
</script>

<style scoped>
  .content {
    width: 100%;
    min-height: 700px;
    overflow: hidden;
    position: relative;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 1s;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translateX(-100%);
  }

</style>
