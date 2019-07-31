<template>
  <div class="comment">
    <p class="comment-title">{{data.user}}</p>
    <p class="comment-content" v-html="data.content" />
    <div class="comment-reply">
      <comment v-for="comment in data.comments" class="reply" :key="comment.id" :data="comment" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style>
.comment-title {
  font-size: 0.8em;
  color: #828282;
}
.comment-content {
  font-size: 0.7em;
  margin-left: 1em;
}
.comment-reply {
  margin-left: 2em;
}
.reply {
  border-left: 0.5px dotted rgba(0, 0, 0, 0.4);
}
</style>
