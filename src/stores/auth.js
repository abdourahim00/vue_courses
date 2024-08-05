import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
// import axios from 'axios';
import setAuthHeader from "../utils/setAuthHeader";

export const useAuthStore = defineStore({
    id: "auth",

    state: () => ({
        auth: useLocalStorage("auth", {
            isAuthenticated: false,
            user: {},
            token: "",
            isLoggedIn: false,
        }),
    }),

    getters: {
        getUser: (state) => state.auth.user,
        getIsLoggedIn: (state) => state.auth.isLoggedIn,
        getIsAuthenticated: (state) => state.auth.isAuthenticated,
        getToken: (state) => state.auth.token,
    },

    actions: {

        async saveInLocalStorage(auth){
            this.auth = auth; 
        },

        async saveUser(user) {
            this.auth.user = user;
        },
        // async userLogin(email, password) {
        //     try {
        //         const { data } = await this.$axios.post("/login", {
        //             email,
        //             password,
        //         });
        //         console.log("Réponse du serveur:", data);
        //         if (data.status == 200) {
        //             this.auth.isLoggedIn = true;
        //             this.auth.user = data.data.user;
        //             alert("Connexion réussie!");
        //             return true;
        //         }
        //     } catch (error) {
        //         console.log(error);
        //         alert("Connexion échouée!");
        //         return false;
        //     }
        // },
        // async verifyOTP(otp) {
        //     console.log(otp);
        //     try {
        //         const { data } = await axios.post("/verifyOTP", {
        //             otp: otp,
        //         });
        //         if (data.status == 200) {
        //             this.auth.isAuthenticated = true;
        //             this.auth.token = data.data.token;
        //             setAuthHeader(this.auth.token);
        //             alert("OTP valide ! Vous êtes maintenant connecté.");
        //             return true;
        //         }
        //     } catch (error) {
        //         console.log(error);
        //         alert("OTP invalide !");
        //         return false;
        //     }
        // },

        // async logout() {
        //     try {
        //         const { data } = await axios.get("/logout");
        //         console.log("Réponse du serveur:", data);
        //         if (data.status == 200) {
        //             this.auth.isAuthenticated = false;
        //             this.auth.user = {};
        //             this.auth.token = "";
        //             this.auth.isLoggedIn = false;
        //             alert("Deconnexion … !");
        //             return true;
        //         }
        //     } catch (error) {
        //         console.log(error);
        //         alert("Deconnexion échouée !");
        //         return false;
        //     }
        // }
    }
});
