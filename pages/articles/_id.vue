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
export default {
  async asyncData({ store, route, error}) {
    let id = route.params.id || ''
    const data = await store.dispatch('ARTICLE_DETAIL', id)
    if (!id) {
      error({
        message: 'This page could not be found',
        statusCode: 404
      })
      return false
    }
    return {
      article: data || {}
    }
  }
}
</script>

<style scoped>

</style>
