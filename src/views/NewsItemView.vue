<template>
  <div class="current-news-item">
    <h2 v-if="loading" class="loading">Loading..</h2>
    <div v-if="!loading" class="current-news-item">
      <news-item :item="currentNewsItem" />
    </div>
    <comment v-for="comment in currentNewsItem.comments" :data="comment" :key="comment.id" />
  </div>
</template>

<script>
import { onCreated } from "vue-function-api";
import { useState, useActions, useRouter } from "@u3u/vue-hooks";
import types from "../types";
import NewsItem from "../components/NewsItem";
import Comment from "../components/Comment";
export default {
  components: {
    NewsItem,
    Comment
  },
  setup() {
    const { loading, currentNewsItem } = useState([
      "loading",
      "currentNewsItem"
    ]);
    const { route } = useRouter();
    console.log(currentNewsItem);
    const { GET_NEWS_ITEM } = useActions([types.GET_NEWS_ITEM]);
    onCreated(() => {
      GET_NEWS_ITEM(route.value.params.id);
    });
    return {
      loading,
      currentNewsItem
    };
  }
};
</script>

<style>
.current-news-item {
  counter-reset: news;
  background-color: #f6f6ef;
  padding: 1em;
  height: 100%;
}
.loading {
  height: 100vh;
}
.current-news-item .news-item-title::before {
  content: none;
}
</style>
