import Vue from 'vue';
import Vuex from 'vuex';

import bets from './modules/bets.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		bets,
	}
})