<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'CarWorld',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 12
    }
  }
}
</script>

<style scoped>

</style>
