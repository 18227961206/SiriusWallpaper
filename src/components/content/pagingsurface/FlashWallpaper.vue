<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'FlashWallpaper',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 1
    }
  }
}
</script>

<style scoped>

</style>
