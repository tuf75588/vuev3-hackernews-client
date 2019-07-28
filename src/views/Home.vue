<template>
  <div class="home">
    <div v-if="loading">
      <h3>Loading..</h3>
    </div>
    <div>
      <news-item v-for="item in items" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { value, onCreated } from "vue-function-api";
import NewsItem from "../components/NewsItem.vue";

export default {
  components: {
    NewsItem
  },
  setup() {
    const BASE_URL = "https://api.hackernews.io";
    const items = value([]);
    const loading = value(true);

    onCreated(async () => {
      const request = await fetch(BASE_URL + "/news?page=1");
      const response = await request.json();
      items.value = response;
      loading.value = false;
      console.log(response);
    });
    return {
      items,
      loading
    };
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
