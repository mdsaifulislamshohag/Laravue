import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        appname: 'Laravue',
        registration: [],
        user: {
            name: '',
            email: '',
        }
    },
    getters: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    }

});
