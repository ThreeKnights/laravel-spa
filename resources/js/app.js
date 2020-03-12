
require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');

Vue.use(VueRouter, VueAxios, Axios);

const router = new VueRouter({
    mode : history,
    routes,
})

new Vue (
   Vue.util.extend(
       { router },
       AppLayout 
   )
).$mount('#app');
