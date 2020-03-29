<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'ExplosiveSports',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 16
    }
  }
}
</script>

<style scoped>

</style>
