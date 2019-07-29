<template>
  <div class="home">
    <div v-if="loading">
      <h3>Loading..</h3>
    </div>
    <div>
      <news-item v-for="item in newsItems" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { value, onCreated } from "vue-function-api";
import NewsItem from "../components/NewsItem.vue";
import { useState, useActions } from "@u3u/vue-hooks";
import types from "../types";
export default {
  components: {
    NewsItem
  },
  setup() {
    const { loading, newsItem } = useState(["loading", "newsItem"]);
    const actions = useActions([types.GET_NEWS_ITEM]);
    onCreated(() => {
      actions.GET_NEWS_ITEM({
        type: "news",
        page: 1
      });
    });
  }
};
</script>
<style>
.home {
  background-color: #f6f6ef;
  counter-reset: news;
  padding: 1em;
}
</style>
