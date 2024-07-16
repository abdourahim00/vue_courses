<template>
<router-link :to="`/details/${courses.slug}`" class="block">
  <div class="item">
    <div class="relative">
      <img
        :src="courses.image"
        alt=""
        class="w-full border-t border-x rounded-t-xl"
      />
      <div
        class="absolute ml-5 left-0 bottom-[176px] sm:bottom-[160px] lg:bottom-[176px]"
      >
        <button class="bg-price-bg px-2 rounded-full text-sm">
          {{ courses.price }}
        </button>
      </div>
    </div>
    <div
      class="bg-white pt-5 px-5 pb-7 shadow-xl border border-t-0 rounded-b-xl"
    >
      <h2 class="font-Inter-SemiBold text-xl sm:text-2xl mb-2">{{ courses.title }}</h2>
      <p class="text-lesson-color font-Inter text-xs mb-2">{{ courses.lessonCount }}</p>
      <p class="text-p-color font-Inter text-sm mb-4">
        {{ courses.description }}
      </p>
      <div class="flex items-center gap-4">
        <img src="/src/assets/images/avatar1.png" alt="" class="w-10 h-10" />
        <p class="text-p-color font-Inter text-sm">
        by Albert Flores
        </p>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  // props : {
  //   courses : Object,
  // }
  props: {
    courses: { type: Object, required: true },
  },
};
</script>

<style>
</style>