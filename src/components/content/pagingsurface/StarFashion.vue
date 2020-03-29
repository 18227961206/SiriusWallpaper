<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'StarFashion',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 11
    }
  }
}
</script>

<style scoped>

</style>
