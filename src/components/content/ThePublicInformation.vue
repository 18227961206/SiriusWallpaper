<template>
  <div class="container-fluid" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="row" id="content">
      <div v-for="(contentImgData,index) in contentImg" :key="index"
           class="col-lg-3 col-md-4 col-sm-4 col-xs-6 contentDiv" style="padding-right: 5px;padding-left: 5px;">
        <a href="#" class="contentDivA">
          <img :src="contentImgData.img_1600_900" :id="contentImgData.id" class="img-responsive contentimg" alt="">
        </a>
        <div class="info" align="center" @mouseenter="enter(index)" @mouseleave="leave(index)">
          <div class="as">
            <div class="infoTitle"><h5>{{ contentImgData.utag }}</h5></div>
            <div class="infos">
              <div class="infoTime"><p>{{ contentImgData.update_time }}</p></div>
              <div class="infoDown">
                <a href="javascript:void (0)" @click="downloadCodeImg(contentImgData.url)" class="downLoadCodeImg">
                  <span class="glyphicon glyphicon-download-alt"></span>
                </a>
               <!-- <a :href="contentImgData.img_1600_900" download="" class="downLoadCodeImg">
                  <span class="glyphicon glyphicon-download-alt"></span>
                </a>-->
              </div>
              <div class="infoCollection" align="left"><a href="#"><i class="fa fa-heart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Paging
      :pageCount="pageCount"
      :marginPages="marginPages"
      :rangePage="rangePage"
      :initPage="initPage"
      @pageEvent="pageEvent">
    </Paging>
  </div>
</template>

<script>

  import download from '../../../static/js/download'
  import Paging from './Paging'

  export default {
    name: 'ThePublicInformation',
    components: {Paging},
    data () {
      return {
        loading: true,
        contentImg: [],
        cid: this.Cid,// 图片分类
        start: 1,// 页数
        count: 20,// 数量
        // 分页数据参数
        pageCount: 10,// 最大显示页数
        marginPages: 1,// 右边显示几个数字页数的范围
        rangePage: 3,// 左边显示几个数字页数的范围
        initPage: 0 // 初始化的页数为第一页
      }
    },
    props: {
      Cid: Number // 图片分类
    },
    created () {
      let numberPages = this.start
      this.fetchData(numberPages)
    },
    methods: {
      fetchData: function () {
        this.loading = true
        this.$axios.get('/index.php', {
          params: {
            c: 'WallPaper', // 参数
            a: 'getAppsByCategory', // 参数
            cid: this.cid, // 图片分类
            start: this.start, // 页数
            count: this.count, // 数量
            from: '360chrome' // 参数
          }
        }).then(data => {
          this.contentImg = []
          this.contentImg = data.data.data
          this.pageCount = Math.ceil(parseInt(data.data.total) / 20) // 分页
          this.loading = false
        }).catch(error => {
          console.log(error)
          this.loading = false
        })
      },
      enter (index) {// 显示图片信息
        $('.as').eq(index).show()
      },
      leave (index) {// 隐藏图片信息
        $('.as').eq(index).hide()
      },
      // 所有页数及上一页、下一页的点击事件，点击时返回点击的页数
      pageEvent: function (numberPages) {
        this.start = numberPages * 20 - 20 + 1
        this.fetchData()
      },
      downloadCodeImg (url) {
        this.loading = true
        var that = this
        // 获取图片名称
        var imagefilename = url.substring(url.lastIndexOf('/') + 1, url.length)
        let image = new Image()
        // 解决跨域 Canvas 污染
        image.setAttribute('crossOrigin', 'anonymous')
        image.onload = function () {
          let canvas = document.createElement('canvas')
          canvas.width = image.width
          canvas.height = image.height
          let context = canvas.getContext('2d')
          context.drawImage(image, 0, 0, image.width, image.height)
          let imageUrl = canvas.toDataURL('image/png') // 得到图片的base64编码数据
          var as = download(imageUrl, imagefilename, 'image/jpg') // 参数传入download
          if (as) {
            that.loading = false
          } else {
            that.loading = false
            alert('下载失败！请重新下载')
          }
        }
        image.src = url
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #content {
    min-height: 700px;
  }

  .contentDiv {
    padding: 5px;
  }

  .info {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .info .infoTitle {
    width: 100%;
  }

  .info .infoTitle h5 {
    color: white;
    font-size: 1.8rem;
    padding-top: 10%;
    font-weight: bolder;
    letter-spacing: 1px;
    text-shadow: 5px 5px 6px #000;
  }

  .info .infos {
    width: 100%;
    display: flex;
    margin-top: 25%;
  }

  .info .infoTime {
    flex: 1;
  }

  .info .infoTime p {
    color: white;
    font-weight: bolder;
    text-shadow: 5px 5px 6px #000;
  }

  .info .infoDown {
    flex: 0.5;
  }

  .info .infoCollection {
    flex: 0.5;
  }

  .info .infoDown a,
  .info .infoCollection a {
    color: white;
    font-size: 2rem;
    opacity: 0.6;
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: black;
    border-radius: 15px;
  }

  .info .infoDown a:hover,
  .info .infoCollection a:hover {
    opacity: 1;
  }

  .as {
    display: none;
  }

  @media (max-width: 850px) {
    .info {
      display: none;
    }

    .info .infoTitle h5 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 600px) {
    .content {
      padding: 5px;
      min-height: 700px;
    }

    .contentDiv {
      padding: 1px;
    }

    .info .infoTitle h5 {
      font-size: 0.8rem;
    }
  }
</style>
