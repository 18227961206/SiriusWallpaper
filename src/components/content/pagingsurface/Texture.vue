<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'Texture',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 32
    }
  }
}
</script>

<style scoped>

</style>
