<template>
<section class="bg-talent-bg">
  <div class="container mx-auto max-w-7xl py-8 sm:py-14 px-4 sm:px-5">
    <div class="flex flex-col lg:flex-row gap-12 sm:gap-20 lg:gap-44">
      <div class="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
        <div class="absolute bottom-0 left-0 -mb-[35px] -ml-[35px] sm:-mb-[70px] sm:-ml-[70px] z-10 pb-10">
          <svg
            width="70"
            height="70"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sm:w-[140px] sm:h-[140px]"
          >
            <circle cx="70" cy="70" r="70" fill="#175CD3" />
          </svg>
        </div>
        <div class="absolute top-0 right-0 -mt-[21px] -mr-[21px] sm:-mt-[42px] sm:-mr-[42px] z-10">
          <svg
            width="42"
            height="42"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[42px] h-[42px] sm:w-[84px] sm:h-[84px]"
          >
            <circle cx="42" cy="42" r="42" fill="#FCD53A" />
          </svg>
        </div>
        <div class="relative z-20">
          <img
            src="@/assets/images/talented.png"
            alt=""
            class="rounded-2xl w-full"
          />
        </div>
      </div>
      <div class="mt-12 lg:mt-0">
        <div class="pb-4 sm:pb-7">
          <h1 class="text-5xl sm:text-5xl lg:text-5xl font-Inter-Bold leading-tight">
            Talented and Highly Qualified Tutors
          </h1>
        </div>
        
        <div>
          <p class="text-p-color font-Inter text-sm sm:text-base pb-8 sm:pb-14">
            Lorem Ipsum is simply dummy text of the printing and <br class="hidden sm:inline"> typesetting industry. Lorem Ipsum has been the <br class="hidden sm:inline"> industry's standard dummy text ever since the 1500s, <br class="hidden sm:inline"> when an unknown printer took a galley
          </p>
        </div>
        
        <div>
          <router-link
            to="#"
            class="inline-block px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base text-white border border-black bg-black rounded-lg"
          >
            Get Started
          </router-link>
        </div>
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