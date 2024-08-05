<template>
  <div class="font-Inter bg-white w-full top-0 z-10 shadow-md px-4 md:px-28">
    <div class="flex justify-between items-center">
      <div class="logo py-5">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="logo" />
        </router-link>
      </div>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="block md:hidden focus:outline-none"
      >
        <svg
          class="w-6 h-6 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <nav class="hidden md:block">
        <ul class="flex items-center space-x-7">
          <router-link
            to="/"
            class="px-2 py-7 text-color-primary font-Inter-Medium"
            >Home</router-link
          >
          <router-link
            to="/"
            class="px-2 py-7 text-color-second font-Inter-Medium"
            >About</router-link
          >
          <router-link
            to="/"
            class="px-2 py-7 text-color-second font-Inter-Medium"
            >Courses</router-link
          >
          <router-link
            to="/"
            class="px-2 py-7 text-color-second font-Inter-Medium"
            >Teacher</router-link
          >
          <router-link
            to="/"
            class="px-2 py-7 text-color-second font-Inter-Medium"
            >Blog</router-link
          >
          <div v-if="auth.getIsAuthenticated">
            <li>
              <button
                @click="logout"
                class="block px-5 py-2 text-color-tertiaire border border-color-border-button rounded-lg"
              >
                Deconnexion
              </button>
            </li>
          </div>
          <div v-if="auth.getIsAuthenticated">
            <router-link
              to="/user"
              class="px-6 py-7 text-color-primary font-Inter-Medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
                ></path>
              </svg>
            </router-link>
          </div>

          <div v-if="!auth.getIsAuthenticated">
            <li>
              <router-link
                to="/connexion"
                class="block px-5 py-2 text-color-tertiaire border border-color-border-button rounded-lg"
              >
                Connexion
              </router-link>
            </li>
          </div>
        </ul>
      </nav>
    </div>

    <div :class="{ hidden: !isMenuOpen }" class="md:hidden">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <router-link to="/" class="text-color-primary font-Inter-Medium"
          >Home</router-link
        >
        <router-link to="/" class="text-color-second font-Inter-Medium"
          >About</router-link
        >
        <router-link to="/" class="text-color-second font-Inter-Medium"
          >Courses</router-link
        >
        <router-link to="/" class="text-color-second font-Inter-Medium"
          >Teacher</router-link
        >
        <router-link to="/" class="text-color-second font-Inter-Medium"
          >Blog</router-link
        >
        <div v-if="auth.getIsAuthenticated">
          <li>
            <button
              @click="isLogout"
              class="block px-5 py-2 text-color-tertiaire border border-color-border-button rounded-lg"
            >
              Deconnexion
            </button>
          </li>
        </div>

        <div v-if="!auth.getIsAuthenticated">
          <li>
            <router-link
              to="/connexion"
              class="block px-5 py-2 text-color-tertiaire border border-color-border-button rounded-lg"
            >
              Connexion
            </router-link>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import { useAuthStore } from "../stores/auth";

export default {
  data() {
    return {
      isMenuOpen: false,
      auth: useAuthStore(),
    };
  },
  methods: {
    async logout() {
      try {
        const { data } = await axios.get("/logout");
        console.log("Réponse du serveur:", data);
        if (data.status == 200) {
          this.auth.isAuthenticated = false;
          this.auth.user = {};
          this.auth.token = "";
          this.isLoggedIn = false;
          alert("Deconnexion … !");
          return true;
        }
      } catch (error) {
        console.log(error);
        alert("Deconnexion échouée !");
        return false;
      }
    },
  },
};
</script>

<style>
</style>
