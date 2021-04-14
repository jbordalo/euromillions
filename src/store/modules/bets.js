const state = {
	games: [],
}

const getters = {
	games(state) {
		return state.games;
	}
}

const mutations = {
	'ADD_GAME'(state, game) {
		const record = state.stocks.find(element => element.id == stockId);

		// TODO add checks

		// { gameId, gameTitle, gameNumbers, gameStars }
		state.games.push(game);
	},
}

const actions = {
	addGame: ({ commit }, order) => {
		console.log("log: buying stock");
		commit('ADD_GAME', order);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}