<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'AnimationCartoon',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 26
    }
  }
}
</script>

<style scoped>

</style>
