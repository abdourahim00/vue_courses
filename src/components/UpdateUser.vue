<template>
    <div class="bg-gray-100">
      <div class="container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <User></User>
          <div class="col-span-1">
            <div class="bg-white shadow rounded-lg p-6">
              <h2 class="text-xl font-bold mb-4">Update Form</h2>
              <form @submit.prevent="updateUser" class="space-y-4">
                <div class="mb-4">
                  <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    v-model="name"
                  />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 font-bold mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    v-model="email"
                  />
                </div>
                <div class="mb-4">
                  <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    v-model="phone_number"
                  />
                </div>
                <div class="mb-4">
                  <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    class="w-full p-2 border border-gray-300 rounded-lg"
                    v-model="password"
                  />
                </div>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import User from "./User.vue";
import { useAuthStore } from "../stores/auth";
export default {
    data() {
        return {
            auth: useAuthStore(),
            name: '',
            email: '',
            phone_number: null,
            password: '',
        }
    },
    methods: {
        async updateUser() {
            try {
                const response = await this.$axios.patch(`/updateUser/${this.auth.getUser.id}`, {
                    name: this.name,
                    email: this.email,
                    phone_number: this.phone_number,
                    password: this.password,
                }, {
                    headers: {
                        Authorization: `Bearer ${this.auth.getToken}`,
                    },
                });
                const { data } = response;
                console.log(data);
                this.name = data.name;
                this.email = data.email;
                this.phone_number = data.phone_number;
                this.password = data.password;
                this.auth.saveUser(data);
                alert("Utilisateur mis à jour avec succès !");

                return true;

            } catch (error) {
                console.error(error);
                alert("Une erreur s'est produite lors de la mise à jour de l'utilisateur. Veuillez reessayer.");
            }
        },
    },
    components: {
        User,
    },
}

</script>

<style>
</style>