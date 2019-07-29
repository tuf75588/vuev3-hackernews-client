import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';

Vue.use(Vuex);
const BASE_URL = 'https://api.hackernews.io';

export default new Vuex.Store({
  state: {
    newsItems: [],
    currentNewsItem: {},
    loading: false,
  },
  mutations: {
    [types.SET_NEWS_ITEM](state, newsItems) {
      state.newsItems = newsItems;
    },
    [types.SET_CURRENT_NEWS_ITEM](state, newsItem) {
      state.setCurrentNewsItem = newsItem;
    },
    [types.SET_LOADING](state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async [types.GET_NEWS_ITEM]({ commit }, { type, page = 1 }) {
      commit(types.SET_LOADING, true);
      const request = await fetch(`${BASE_URL}/${type}?page=${page}`);
      const items = await request.json();
      commit(types.SET_NEWS_ITEM, items);
      commit(types.SET_LOADING, false);
    },
  },
});
