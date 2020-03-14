
require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');

// Show the list of post 
const Listpost = Vue.component('Listposts', require('./components/Listpost.vue'));

// add post template
const Addpost = Vue.component('Addpost', require('./components/Addpost.vue'));

//edit post template 
const Editpost = Vue.component('Editpost', require('./components/Editpost.vue'));

// delete post template 
const Deletepost = Vue.component('Deletepost', require('./components/Deletepost.vue'));

// view single post 
const Viewpost = Vue.component('Viewpost', require('./components/Viewpost.vue'));



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
    mode : history,
    routes,
})

new Vue (
   Vue.util.extend(
       { router },
       AppLayout 
   )
).$mount('#app');
