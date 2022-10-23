require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routes';
import {
    store
} from './store';

// Components
import nav from "./components/nav.vue";


// App
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        'site-nav': nav,
    },
    watch: {
        '$route'(to, from) {
            document.title = to.meta.title || 'WebEx';
        }
    },
});
