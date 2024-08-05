<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-start bg-gray-100 p-6 space-y-6 lg:space-y-0 lg:space-x-6"
  >
    <!-- User Component -->
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full lg:w-1/3">
      <User />
    </div>

    <!-- Purchased Courses Table -->
    <div class="w-full lg:w-2/3 overflow-x-auto bg-white shadow-lg rounded-lg">
      <h1 class="text-center text-3xl font-bold sm:text-3xl mb-5 p-6">
        Liste des cours achetés
      </h1>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Course Title</th>
            <th scope="col" class="px-6 py-3">Course Description</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cours in cours" :key="cours.id" class="bg-white border-b">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {{ cours.title }}
              </td>
              <td class="px-6 py-4">{{ cours.description }}</td>
              <td class="px-6 py-4">
                <router-link
                  :to="/details/ + cours.slug"
                  class="text-blue-500 hover:text-blue-700"
                  >Details</router-link
                >
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import User from "./User.vue";
export default {
  components: { User },
  data() {
    return {
      store: useAuthStore(),
      cours: {},
      message: "Cours deja achete",
      // isBought: null,
    };
  },
  methods: {
    async getCoursesBoughtByUser() {
      try {
        const { data } = await this.$axios.get(
          "/payment/success/" + this.store.getUser.id,
          {
            headers: {
              Authorization: `Bearer ${this.store.getToken}`,
            },
          }
        );
        this.cours = data.data.courses;
        // this.isBought = data.data.is_bought;
        
        console.log("Courses achetés : ", this.cours);
      } catch (error) {
        console.error("Erreur lors de la récupération des cours :", error);
      }
    },
  },

  mounted() {
    this.getCoursesBoughtByUser();
  },
};
</script>

<style>
</style>