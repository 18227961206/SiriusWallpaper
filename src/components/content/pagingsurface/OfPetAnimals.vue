<template>
  <div>
    <ThePublicInformation :Cid="Cid"/>
  </div>
</template>

<script>

import ThePublicInformation from '../ThePublicInformation'
export default {
  name: 'OfPetAnimals',
  components: {ThePublicInformation},
  data () {
    return {
      Cid: 14
    }
  }
}
</script>

<style scoped>

</style>
