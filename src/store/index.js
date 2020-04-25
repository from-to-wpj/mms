import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

const  vstore = new Vuex.Store({
    modules: {
        user
    }
})

export default vstore
