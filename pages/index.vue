<template>
  <div class="cocoa-content">
    <div class="page-heading">Latest Posts</div>
    <ul>
      <li v-for="(article, index) in articles" :key="index" class="cocoa-post-item">
        <span class="cocoa-meta">
          <time :datetime="article.created_time">{{ article.created_time | moment().format("ll") }}</time>
        </span>
        <nuxt-link :to="{ name: 'articles-id', params: { id: article.uid } }">
          <span>{{ article.title }}</span>
        </nuxt-link>
      </li>
    </ul>
    <!--<ul>-->
      <!--<li v-for="(tag, index) in tags" :key="index">-->
        <!--<nuxt-link :to="{ name: 'tags-id', params: { name: tag.name } }">{{ tag.name }}</nuxt-link>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<p><nuxt-link to="/">Home</nuxt-link></p>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ query, error }) {
    let tags_res = await axios.get('http://127.0.0.1:8000/blog/tags/')
    let articles_res = await axios.get('http://127.0.0.1:8000/blog/articles/')
    return {
      tags: tags_res.data,
      articles: articles_res.data
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
