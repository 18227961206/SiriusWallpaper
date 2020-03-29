<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'MilitaryHeavenAndEarth',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 22
    }
  }
}
</script>

<style scoped>

</style>
