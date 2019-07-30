import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NewsItem from './components/NewsItem.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/news' },
    {
      path: '/item/:id',
      name: 'news-item',
      component: NewsItem,
    },
    {
      path: '/:type',
      name: 'home',
      component: Home,
    },
  ],
});
