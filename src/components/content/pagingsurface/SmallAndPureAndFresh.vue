<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'SmallAndPureAndFresh',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 15
    }
  }
}
</script>

<style scoped>

</style>
