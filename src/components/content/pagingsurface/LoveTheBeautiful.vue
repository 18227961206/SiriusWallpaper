<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'LoveTheBeautiful',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 30
    }
  }
}
</script>

<style scoped>

</style>
