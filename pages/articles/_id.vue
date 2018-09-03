<template>
  <div class="cocoa-content">
    <div class="front-matter">
      <div class="title-container">
        <div class="page-heading">{{ article.title }}</div>
      </div>
      <div class="cocoa-meta">
        <div class="cocoa-date" :title="article.created_time">
          Created：{{ article.created_time | moment().format("ll") }}
        </div>
        <div>
          <div class="middot"></div>
          <div class="cocoa-date" :title="article.modified_time">
            Modified：{{ article.modified_time | moment().format("ll") }}
          </div>
        </div>
      </div>
    </div>
    <div class="cocoa-markdown" v-html="article.body"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData({params}) {
      let {data} = await axios.get(`http://127.0.0.1:8000/blog/articles/${params.id}/`)
      return {
        article: data
      }
    }
  }
</script>

<style scoped>

</style>
