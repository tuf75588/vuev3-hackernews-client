<template>
  <div class="news-item">
    <p class="news-item-title">{{item.title}}</p>
    <p class="news-item-details">
      {{item.points}} points by {{item.user}} {{item.time_ago}} |
      <router-link
        :to="{
          name: 'news-item',
          params: {
            id: item.id,
          }
        }"
      >{{item.comments_count}} comments</router-link>
    </p>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>

<style>
.news-item-title::before {
  counter-increment: news;
  content: counter(news) ". ";
  color: #828282;
}
.news-item {
  font-size: 0.9em;
}
.news-item-details {
  font-size: 0.7em;
  margin-left: 2em;
  color: #828282;
}
</style>