import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../views/Home'
import AboutComponent from '../views/About'
import NotFound from '../views/NotFound'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: '/',
    fallback: true,
    routes: [
        {path: '/', component: HomeComponent},
        {path: '/about', component: AboutComponent},
        {path: '*', component: NotFound},
    ]
})
