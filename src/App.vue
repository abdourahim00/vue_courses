<template>
  <div>
    <Header></Header>
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { useAuthStore } from "./stores/auth";
export default {
  components: {
    Header: Header,
  },
  data(){
    return{
      auth: useAuthStore(),
    }
  },
  methods: {
    async getAuthUser() {
      // console.log(this.auth.getIsAuthenticated);
      if (this.auth.getIsAuthenticated) {
        try {
          // this.$axios.defaults.headers = {
          //   Authorization: `Bearer ${this.auth.getToken}`,
          // };
          const { data } = await this.$axios.get("/user", {
            headers: {
              Authorization: `Bearer ${this.auth.getToken}`,
            },
          });
          const token = data.data.token;
          this.$axios.defaults.headers = {
            Authorization: `Bearer ${token}`,
          };
          // console.log("test", this.$axios.defaults.headers);
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  beforeMount(){
    this.getAuthUser();
  }
};
</script>

<style>
</style>
