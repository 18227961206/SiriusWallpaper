<template>
  <nav class="header navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
          <span class="icon-bar" style="background-color: white"></span>
          <span class="icon-bar" style="background-color: white"></span>
          <span class="icon-bar" style="background-color: white"></span>
        </button>
        <a class="navbar-brand" href="javascript:void (0)">{{ title }}</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-for="(headerContent,index) in headerData" :key="index" v-if="index < 7">
            <router-link :id="headerContent.id" class="jumpPath" :to="{ name:jumpPath[index] }">{{ headerContent.name }}</router-link>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false">
              更多
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li v-for="(headerContent,index) in headerData" :key="index" v-if="index >= 7">
                <router-link :id="headerContent.id" class="jumpPath" :to="{ name:jumpPath[index] }">{{ headerContent.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'WallpaperHeader',
  data () {
    return {
      title: 'SiriusWallpaper',
      headerData: [],// 顶部导航数据
      // 顶部导航跳转的路由
      jumpPath: ['kZone', 'BeautyModel', 'LoveTheBeautiful', 'SceneryOfLarge', 'SmallAndPureAndFresh',
        'AnimationCartoon', 'StarFashion', 'OfPetAnimals', 'TheGameWallpaper', 'CarWorld', 'CoolAndFashionable',
        'MilitaryHeavenAndEarth', 'ExplosiveSports', 'Texture', 'TheTextControl', 'FlashWallpaper']
    }
  },
  created: function () {
    this.$axios.get('/index.php', {
      params: {
        c: 'WallPaperAndroid',// 参数
        a: 'getAllCategories'// 参数
      }
    })
      .then(data => {
        // console.log(data.data.data)
        this.headerData = data.data.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
  .header {
    border-radius: 0;
    background: linear-gradient(120deg, #00e4d0, #5983e8);
  }

  .navbar-nav>li>.router-link-exact-active,
  .dropdown-menu>li>.router-link-exact-active{
    background: linear-gradient(120deg, #3375e8, #3aaee4);
    color: white;
  }

  .navbar-nav li:hover {
    background: linear-gradient(120deg, #3375e8, #3aaee4);
  }

  .navbar-nav > li > a:hover,
  .navbar-nav > li > .dropdown-menu > ul > a:hover{
    color: white;
  }

  .jumpPath {
    color: #666;
    font-size: 1.3rem;
    font-weight: bolder;
  }

  .dropdown-menu {
    border: none;
    background: linear-gradient(120deg, #00e4d0, #5983e8);
  }

  .dropdown-menu li {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .jumpPath:hover {
    color: white;
    background: linear-gradient(120deg, #3375e8, #3aaee4);
  }

</style>
