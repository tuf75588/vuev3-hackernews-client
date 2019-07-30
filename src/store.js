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
    [types.APPEND_NEWS_ITEMS](state, newsItems) {
      const unique = {};
      state.newsItems = state.newsItems.concat(newsItems).filter((item) => {
        if (!unique[item.id]) {
          unique[item.id] = true;
          return true;
        }
        return false;
      });
    },
  },
  actions: {
    async [types.GET_NEWS_ITEM]({ commit }, { type, page = 1 }) {
      commit(types.SET_LOADING, true);
      if (page === 1) {
        commit(types.SET_NEWS_ITEM, []);
      }
      const request = await fetch(`${BASE_URL}/${type}?page=${page}`);
      const items = await request.json();
      setTimeout(() => {
        if (page === 1) {
          commit(types.SET_NEWS_ITEM, items);
        } else {
          commit(types.APPEND_NEWS_ITEMS, items);
        }
        commit(types.SET_LOADING, false);
      }, 2000);
    },
  },
});
