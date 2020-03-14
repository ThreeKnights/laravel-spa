
require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue').default;

// Show the list of post 
const Listpost = Vue.component('Listposts', require('./components/Listpost.vue')).default;

// add post template
const Addpost = Vue.component('Addpost', require('./components/Addpost.vue')).default;

//edit post template 
const Editpost = Vue.component('Editpost', require('./components/Editpost.vue')).default;

// delete post template 
const Deletepost = Vue.component('Deletepost', require('./components/Deletepost.vue')).default;

// view single post 
const Viewpost = Vue.component('Viewpost', require('./components/Viewpost.vue')).default;



Vue.use(VueRouter, VueAxios, Axios);

const routes = [
    {
        name : 'Listpost',
        path : '/',
        component : Listpost
    },
    {
        name : 'Addpost',
        path : '/add-post',
        component : Addpost
    },
    {
        name : 'Editpost',
        path : '/edit/:id',
        component : Editpost
    },
    {
        name : 'Deletepost',
        path : '/post-delete',
        component : Deletepost
    },
    {
        name : 'Viewpost',
        path : '/view/:id',
        component : Viewpost
    }
];

const router = new VueRouter({
    mode : 'history',
    routes : routes,
})

new Vue (
   Vue.util.extend(
       { router },
       AppLayout 
   )
).$mount('#app');
