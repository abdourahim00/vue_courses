<template>
  <div class="bg-gray-100 p-6 flex justify-center items-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full flex flex-col items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5aCMO24e6ZTz7_TTUdoqiclVyuhAzV0kFw&s"
        alt="User Avatar"
        class="w-32 h-32 bg-gray-300 rounded-full mb-4"
      />
      <h1 class="text-2xl font-bold text-gray-900">{{ user.name }}</h1>
      <hr class="my-6 border-t border-gray-300 w-full" />
      <div>
        <span class="text-gray-700 uppercase font-semibold tracking-wider mb-2 block">Infos</span>
        <ul class="list-disc list-inside">
          <li class="mb-2 text-gray-600">Email: {{ user.email }}</li>
          <li class="mb-2 text-gray-600">Tel: {{ user.phone_number }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { useAuthStore } from "@/stores/auth";

export default {
  data() {
    return {
      user: {},
      auth: useAuthStore(),
    };
  },

  methods: {
    async getUserDetails() {
      try {
        const { data } = await this.$axios.get(
          "/getUserDetails/" + this.auth.getUser.id,
          {
            headers: {
              Authorization: `Bearer ${this.auth.token}`,
            },
          }
        );

        this.user = data.data.user;

        // console.log("User:", this.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
  },

  mounted() {
    this.getUserDetails();
  },
};
</script>
  
  <style>
</style>
  