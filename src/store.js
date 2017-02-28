/**
 * Created by Pamo on 2017/2/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    hotmovenum:0,
};

const mutations ={

};

const actions ={

};

const getters ={
    hotmovenum(state) {
        return state.hotmovenum
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})