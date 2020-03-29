import Vue from 'vue'
import Router from 'vue-router'
import WallpaperHeader from '@/components/header/WallpaperHeader'
import WallpaperContent from '@/components/content/WallpaperContent'
import WallpaperFooter from '@/components/footer/WallpaperFooter'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/WallpaperHeader',
      name: 'WallpaperHeader',
      component: WallpaperHeader
    },
    {
      path: '/',
      name: 'WallpaperContent',
      component: WallpaperContent,
      redirect: '/WallpaperContent/kZone',
      children: [
        {
          path: '/WallpaperContent/kZone',
          name: 'kZone',
          component: () => import('../components/content/pagingsurface/kZone.vue')
        },
        {
          path: '/WallpaperContent/BeautyModel',
          name: 'BeautyModel',
          component: () => import('../components/content/pagingsurface/BeautyModel')
        },
        {
          path: '/WallpaperContent/LoveTheBeautiful',
          name: 'LoveTheBeautiful',
          component: () => import('../components/content/pagingsurface/LoveTheBeautiful')
        },
        {
          path: '/WallpaperContent/SceneryOfLarge',
          name: 'SceneryOfLarge',
          component: () => import('../components/content/pagingsurface/SceneryOfLarge')
        },
        {
          path: '/WallpaperContent/SmallAndPureAndFresh',
          name: 'SmallAndPureAndFresh',
          component: () => import('../components/content/pagingsurface/SmallAndPureAndFresh')
        },
        {
          path: '/WallpaperContent/AnimationCartoon',
          name: 'AnimationCartoon',
          component: () => import('../components/content/pagingsurface/AnimationCartoon')
        },
        {
          path: '/WallpaperContent/StarFashion',
          name: 'StarFashion',
          component: () => import('../components/content/pagingsurface/StarFashion')
        },
        {
          path: '/WallpaperContent/OfPetAnimals',
          name: 'OfPetAnimals',
          component: () => import('../components/content/pagingsurface/OfPetAnimals')
        },
        {
          path: '/WallpaperContent/TheGameWallpaper',
          name: 'TheGameWallpaper',
          component: () => import('../components/content/pagingsurface/TheGameWallpaper')
        },
        {
          path: '/WallpaperContent/CarWorld',
          name: 'CarWorld',
          component: () => import('../components/content/pagingsurface/CarWorld')
        },
        {
          path: '/WallpaperContent/CoolAndFashionable',
          name: 'CoolAndFashionable',
          component: () => import('../components/content/pagingsurface/CoolAndFashionable')
        },
        {
          path: '/WallpaperContent/MilitaryHeavenAndEarth',
          name: 'MilitaryHeavenAndEarth',
          component: () => import('../components/content/pagingsurface/MilitaryHeavenAndEarth')
        },
        {
          path: '/WallpaperContent/ExplosiveSports',
          name: 'ExplosiveSports',
          component: () => import('../components/content/pagingsurface/ExplosiveSports')
        },
        {
          path: '/WallpaperContent/Texture',
          name: 'Texture',
          component: () => import('../components/content/pagingsurface/Texture')
        },
        {
          path: '/WallpaperContent/TheTextControl',
          name: 'TheTextControl',
          component: () => import('../components/content/pagingsurface/TheTextControl')
        },
        {
          path: '/WallpaperContent/FlashWallpaper',
          name: 'FlashWallpaper',
          component: () => import('../components/content/pagingsurface/FlashWallpaper')
        }
      ]
    },
    {
      path: '/WallpaperFooter',
      name: 'WallpaperFooter',
      component: WallpaperFooter
    }
  ]
})
