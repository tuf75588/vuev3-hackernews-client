<template>
  <div class="home">
    <h1>Hello?</h1>
    {{items}}
  </div>
</template>

<script>
// @ is an alias to /src
import { value, onCreated } from "vue-function-api";
export default {
  setup() {
    const BASE_URL = "https://api.hackernews.io";
    const items = value([]);
    const loading = value(true);

    onCreated(async () => {
      const request = await fetch(BASE_URL + "/news?page=1");
      const response = await request.json();
      items.value = response;
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
}
</style>
