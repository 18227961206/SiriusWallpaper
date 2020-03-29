<template>
  <div align="center">
    <div class="paginate_container">
      <paginate
        :page-count="pageCount"
        :margin-pages="marginPages"
        :page-range="rangePage"
        :initial-page="initPage"
        :click-handler="pageEvent"
        prev-text="上一页"
        next-text="下一页"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'next-item'"
        :next-link-class="'next-link-item'">
      </paginate>
    </div>
  </div>
</template>

<script>
import paginate from "vuejs-paginate"
export default {
  name: 'Paging',
  props:{
    pageCount: Number,
    marginPages: Number,
    rangePage: Number,
    initPage: Number
  },
  components: { paginate },
  methods: {
    pageEvent: function(numberPages) {
      this.$emit("pageEvent", numberPages);
    }
  }
}
</script>

<style scoped>

</style>
