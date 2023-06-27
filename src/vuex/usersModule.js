import axios from "axios";


export const usersModule = {
    state: {
        users: []
    },
    actions: {
        GET_USERS({commit}) {
            return axios("http://localhost:3000/users", {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_USER', response.data )
                })
        }
    },
    mutations: {
        SET_USER(state, users) {
            state.users = users;
        }
    },
    getters: {
        USERS(state){
            return state.users;
        }
    },
    namespaced: true
}