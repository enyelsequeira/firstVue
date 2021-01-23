import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    ladingStatus: 'Loading cards',
    allCards: [],
    profile: {},
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.ladingStatus = status;
    },
    SET_CARDS(state, cards) {
      state.allCards = cards;
    },
    SET_AVATAR_INFO(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    fetchCards(context) {
      context.commit('SET_LOADING_STATUS', 'loading');
      axios.get('http://localhost:5000/api/cards').then((res) => {
        console.log(res.data);
        context.commit('SET_LOADING_STATUS', 'not Loading');
        context.commit('SET_CARDS', res.data);
      });
    },

  },
  modules: {
  },
  getters: {
    getCards: (state) => state.allCards,
  },
});
