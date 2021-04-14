const state = {
	games: [{ title: 'My First Game', description: 'Test Game', numbers: [1, 2, 3, 4, 5], stars: [6, 7] }],
}

const getters = {
	games(state) {
		return state.games;
	}
}

const mutations = {
	'ADD_GAME'(state, game) {
		// { id, title, description, numbers, stars }
		state.games.push(game);
	},
}

const actions = {
	addGame: ({ commit }, game) => {
		console.log("log: saving game");
		// { id, title, description, numbers, stars }
		const gameToAdd = {
			id: state.games.length,
			...game,
		}
		console.log(gameToAdd);
		commit('ADD_GAME', gameToAdd);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}