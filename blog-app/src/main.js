import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import store from "./store"
import attemptToAuthoriseTokens from "./helpers/authorise-tokens";

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

store.dispatch("auth/initAuth")

attemptToAuthoriseTokens();

Vue.config.productionTip = false