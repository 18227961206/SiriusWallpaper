<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'BeautyModel',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 6
    }
  }
}
</script>

<style scoped>

</style>
