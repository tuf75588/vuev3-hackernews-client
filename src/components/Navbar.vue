<template>
  <div class="nav-bar">
    <div>
      <img src="https://news.ycombinator.com/y18.gif" alt="logo" class="logo" />
    </div>
    <p>Hacker News</p>
    <router-link to="/">news</router-link>
    <router-link to="/">newest</router-link>
    <router-link to="/">show</router-link>
    <router-link to="/">ask</router-link>
    <router-link to="/">jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  background-color: #ff6600;
  align-items: center;
  justify-content: center;
}
.nav-bar a {
  color: #000;
  text-decoration: none;
  margin: 10px;
}
.nav-bar a::after {
  content: "|";
  margin-left: 10px;
}
.nav-bar p {
  font-size: 1em;
  font-weight: bold;
}
.logo {
  height: 18px;
  width: 18px;
  border: 1px solid #fff;
  margin: 10px;
}
</style>