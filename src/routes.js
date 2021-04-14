import Home from './components/Home.vue'
import Bet from './components/bet/Bet.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/bet', component: Bet },
    // { path: '/stocks', component: Stocks },
    { path: '*', redirect: '/' }
]