<template>
  <div id="app">
    <WallpaperHeader/>
    <WallpaperContent/>
    <WallpaperFooter/>
  </div>
</template>

<script>

import WallpaperHeader from './components/header/WallpaperHeader'
import WallpaperContent from './components/content/WallpaperContent'
import WallpaperFooter from './components/footer/WallpaperFooter'

export default {
  name: 'App',
  components: {WallpaperFooter, WallpaperContent, WallpaperHeader}
}
</script>

<style>

</style>
