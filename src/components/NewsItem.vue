<template>
  <div class="news-item">
    <p class="news-item-title">{{item.title}}</p>
    <p
      class="news-item-details"
    >{{item.points}} points by {{item.user}} {{item.time_ago}} | hide | {{item.comments_count}} comments</p>
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
}
.news-item {
  font-size: 0.9em;
}
.news-item-details {
  font-size: 0.7em;
}
</style>