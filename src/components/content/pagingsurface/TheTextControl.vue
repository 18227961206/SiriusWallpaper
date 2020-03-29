<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'TheTextControl',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 35
    }
  }
}
</script>

<style scoped>

</style>
