<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'TheGameWallpaper',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 5
    }
  }
}
</script>

<style scoped>

</style>
