<template>
<section class="pt-12 sm:pt-24 md:pt-36 lg:pt-48">
  <div
    class="bg-formBack border rounded-2xl bg-contain container mx-auto max-w-7xl py-6 sm:py-8 md:py-10 lg:py-14 px-4 sm:px-5 relative h-[320px] sm:h-[400px] md:h-[440px] lg:h-[480px]"
  >
    <div class="absolute top-0 left-0 w-16 sm:w-20 md:w-24 lg:w-auto">
      <svg
        width="105"
        height="122"
        viewBox="0 0 105 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17" cy="34" r="88" fill="#FCD53A" />
      </svg>
    </div>

    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-44 lg:w-auto">
      <svg
        width="176"
        height="51"
        viewBox="0 0 176 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="88" cy="88" r="88" fill="#FFEBEF" />
      </svg>
    </div>

    <div class="absolute bottom-0 right-0 pb-2 sm:pb-4 md:pb-5 lg:pb-6 w-16 sm:w-20 md:w-24 lg:w-auto">
      <svg
        width="87"
        height="206"
        viewBox="0 0 87 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="103" cy="103" r="103" fill="#1C5CFF" />
      </svg>
    </div>
    <div>
      <h1 class="font-Inter-Bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center pb-3 sm:pb-4 md:pb-5 pt-12 sm:pt-16 md:pt-20 lg:pt-24 ml-14">
        Get the best sent to your <br class="hidden sm:inline"> inbox, every month
      </h1>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center pt-6 sm:pt-8 md:pt-10 gap-3 sm:gap-5">
      <div class="text-input-color font-Inter w-full sm:w-auto">
        <input 
          type="text" 
          placeholder="olivia@untitledui.com"
          class="w-full sm:w-auto h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg"
        >
      </div>
      <div class="text-center w-full sm:w-auto">
        <router-link
          to="#"
          class="font-Inter-SemiBold inline-block w-full sm:w-auto px-4 sm:px-9 py-3 sm:py-4 text-sm sm:text-base text-white border border-lesson-color bg-lesson-color rounded-lg"
        >
          Subscribe
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {};
</script>

<style>
</style>