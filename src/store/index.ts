import {createStore} from 'vuex';

export default createStore<{count: number}>({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
    },
    actions: {},
    modules: {},
});
