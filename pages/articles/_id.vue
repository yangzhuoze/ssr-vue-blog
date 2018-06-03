<template>
  <section class="container">
    <h1>{{ article.title }}</h1>
    <p>Created: {{ article.created_time }}</p>
    <p>Modified: {{ article.modified_time }}</p>
    <div v-html="article.body"></div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(`http://127.0.0.1:8000/blog/articles/${params.id}/`)
    return {
      article: data
    }
  }
}
</script>

<style scoped>

</style>
