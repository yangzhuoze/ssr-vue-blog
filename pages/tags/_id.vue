<template>
  <section class="container">
    <h1>{{ tag.name }}</h1>
    <ul>
      <li v-for="(article, index) in tag.articles" :key="index">
        {{ article.title }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(`http://127.0.0.1:8000/blog/tags/${params.name}/`)
    return {
      tag: data
    }
  }
}
</script>

<style scoped>

</style>
