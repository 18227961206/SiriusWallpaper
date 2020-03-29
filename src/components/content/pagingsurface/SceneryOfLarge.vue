<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'SceneryOfLarge',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 9
    }
  }
}
</script>

<style scoped>

</style>
