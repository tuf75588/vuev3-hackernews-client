<template>
  <div class="home">
    <div v-if="loading" class="loading-div">
      <h3>Loading..</h3>
    </div>
    <div>
      <news-item v-for="item in newsItems" :item="item" :key="item.id" />
    </div>
    <div v-if="!loading">
      <p class="more" @click="loadMore">More</p>
    </div>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { value, watch, onCreated } from "vue-function-api";
import NewsItem from "../components/NewsItem.vue";
import { useState, useActions, useRouter } from "@u3u/vue-hooks";
import types from "../types";
export default {
  components: {
    NewsItem
  },

  setup() {
    const { route } = useRouter();
    console.log(route);
    const { loading, newsItems } = useState(["loading", "newsItems"]);
    const actions = useActions([types.GET_NEWS_ITEM]);
    const currentPage = value(1);

    watch(
      () => route.value.params.type,
      type => {
        setCurrentType(type);
      }
    );
    onCreated(() => {
      setCurrentType(route.value.params.type);
    });

    function setCurrentType(type) {
      currentPage.value = 1;
      actions.GET_NEWS_ITEM({
        type,
        page: currentPage.value
      });
    }

    function loadMore() {
      console.log("loading more stories!");
      currentPage.value += 1;
      actions.GET_NEWS_ITEM({
        type: route.value.params.type,
        page: currentPage.value
      });
    }
    return {
      loading,
      newsItems,
      loadMore
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
.more {
  color: #828282;
  cursor: pointer;
}
.loading-div {
  height: 100vh;
}
</style>
