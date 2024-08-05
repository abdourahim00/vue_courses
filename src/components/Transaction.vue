<template>
    <div class="flex flex-col lg:flex-row justify-center items-start bg-gray-100 p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <!-- User Component -->
      <div class="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full lg:w-1/3">
        <User />
      </div>
  
      <!-- Transactions Table -->
      <div class="w-full lg:w-2/3 overflow-x-auto bg-white shadow-lg rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Course Title</th>
              <th scope="col" class="px-6 py-3">Payment Date</th>
              <th scope="col" class="px-6 py-3">Payment Method</th>
              <th scope="col" class="px-6 py-3">Order Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in allTransactions" :key="transaction.payment_id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ transaction.course_title }}
              </th>
              <td class="px-6 py-4">{{ formatDate(transaction.payment_date) }}</td>
              <td class="px-6 py-4">{{ transaction.payment_method }}</td>
              <td class="px-6 py-4">{{ transaction.order_total }} F CFA</td>
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
    components:{
        User
    },
    data() {
      return {
        store: useAuthStore(),
        allTransactions: [],
      };
    },
    methods: {
      async getTransaction() {
        try {
          const { data } = await this.$axios.get('/transaction/' + this.store.getUser.id, {
            headers: {
              Authorization: `Bearer ${this.store.getToken}`,
            },
          });
          this.allTransactions = data.data.transactions;
        //   console.log(this.allTransactions);
        } catch (error) {
          console.error(error);
        }
      },
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
      },
      formatCurrency(amount) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
      }
    },
    mounted() {
      this.getTransaction();
    },
  };
  </script>
  
  <style>
  </style>