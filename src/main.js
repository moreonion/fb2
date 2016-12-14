// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import Backend from './backend-stub.js'
import store from './store'

const backend = new Backend()

Vue.mixin({
  methods: {
    b (obj) {
      // mix the backend into obj
      obj.backend = backend
      return obj
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: (h) => h(App),
  backend
})
