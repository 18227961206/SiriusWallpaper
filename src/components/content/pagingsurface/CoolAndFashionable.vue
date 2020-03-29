<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'CoolAndFashionable',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 10
    }
  }
}
</script>

<style scoped>

</style>
