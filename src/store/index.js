import Vue from "vue";
import Vuex from "vuex";
import { AUTH_REQUEST, AUTH_LOGOUT, SEARCH } from "./constants";
import axiosConfig from "@/libs/axiosConfig";
import jwtDecode from "jwt-decode";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "",
    username: localStorage.getItem("username") || "",
    users: [],
  },
  getters: {
    isAuthenticated: (state) => state.token != "",
    getRole: (state) => state.role,
    getUsername: (state) => state.username ,
  },
  mutations: {
    [AUTH_REQUEST]: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
      state.username = payload.username;
    },
    [AUTH_LOGOUT]: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
      state.username = payload.username;
    },
  },
  actions: {
    ////   login
    [AUTH_REQUEST]: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axiosConfig
          .post("/user/login", payload.data)
          .then((response) => {
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem(
              "role",
              jwtDecode(response.data.access_token).role
            );
            localStorage.setItem(
              "username",
              jwtDecode(response.data.access_token).username
            );
            commit(AUTH_REQUEST, {
              token: response.data.access_token,
              role: jwtDecode(response.data.access_token).role,
              username: jwtDecode(response.data.access_token).username,
            });
            resolve(response);
          })
          .catch(function (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("username");
            reject(error);
          });
      });
    },
    //// logout
    [AUTH_LOGOUT]: ({ commit }) => {
      return new Promise((resolve) => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        commit(AUTH_LOGOUT, { token: "", role: "", username: "" });
        resolve();
      });
    },
  },

});

export { store };
