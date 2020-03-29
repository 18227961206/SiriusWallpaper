<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'kZone',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 36
    }
  }
}
</script>

<style scoped>

</style>
