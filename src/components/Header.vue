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
          <li>
            <router-link
              to="/"
              class="px-5 py-2 text-color-tertiaire border border-color-border-button rounded-lg"
            >
              Contact
            </router-link>
          </li>
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
        <li>
          <router-link
            to="/"
            class="block px-5 py-2 text-color-tertiaire border border-color-border-button rounded-lg"
          >
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style>
</style>
