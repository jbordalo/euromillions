import Home from './components/Home.vue'
import Bet from './components/bet/Bet.vue'
import Games from './components/Games.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/bet', component: Bet },
    { path: '/games', component: Games },
    { path: '*', redirect: '/' }
]