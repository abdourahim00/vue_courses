<template>
  <section class="bg-choose-bg">
    <div class="text-center">
      <h1 class="font-Inter-Bold text-4xl pt-16 mb-5">Featured Courses</h1>
    </div>
    <p class="text-p-color text-center">
      Provide most popular courses that your want to join and lets start the
      course for <br />
      the most simply way in here
    </p>

    <div class="container mx-auto max-w-7xl py-14 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- <div class="item">
      <div class="relative">
        <img src="@/assets/images/featured.png" alt="" class="w-full border-t border-x rounded-t-xl" />
        <div class="absolute ml-5 left-0 bottom-[176px] sm:bottom-[160px] lg:bottom-[176px]">
          <button class="bg-price-bg px-2 rounded-full text-sm">$99.0</button>
        </div>
      </div>
      <div class="bg-white pt-5 px-5 pb-7 shadow-xl border border-t-0 rounded-b-xl">
        <h2 class="font-Inter-SemiBold text-xl sm:text-2xl mb-2">The Complete Copywriting</h2>
        <p class="text-lesson-color font-Inter text-xs mb-2">17 Lesson</p>
        <p class="text-p-color font-Inter text-sm mb-4">
          Provide most popular courses that your want 
          to join and lets start the course for the most 
          simply way in here
        </p>
        <div class="flex items-center gap-4">
          <img src="@/assets/images/avatar1.png" alt="" class="w-10 h-10" />
          <p class="text-p-color font-Inter text-sm">
            by Albert Flores
          </p>
        </div>
      </div>
    </div> -->
        <!-- <FeaturedComponent
          v-for="(course, index) in courses"
          :key="index"
          :imageSrc="course.imageSrc"
          :price="course.price"
          :title="course.title"
          :lessonCount="course.lessonCount"
          :description="course.description"
          :avatarSrc="course.avatarSrc"
          :author="course.author"
        >
        </FeaturedComponent> -->
        <FeaturedComponent
          v-for="(course, index) in courses"
          :courses="course"
          :key="index"
        ></FeaturedComponent>

        <!-- <div class="item">
      <div class="relative">
        <img src="@/assets/images/featured.png" alt="" class="w-full border-t border-x rounded-t-xl" />
        <div class="absolute ml-5 left-0 bottom-[176px] sm:bottom-[160px] lg:bottom-[176px]">
          <button class="bg-price-bg px-2 rounded-full text-sm">$99.0</button>
        </div>
      </div>
      <div class="bg-white pt-5 px-5 pb-7 shadow-xl border border-t-0 rounded-b-xl">
        <h2 class="font-Inter-SemiBold text-xl sm:text-2xl mb-2">The Complete Copywriting</h2>
        <p class="text-lesson-color font-Inter text-xs mb-2">17 Lesson</p>
        <p class="text-p-color font-Inter text-sm mb-4">
          Provide most popular courses that your want 
          to join and lets start the course for the most 
          simply way in here
        </p>
        <div class="flex items-center gap-4">
          <img src="@/assets/images/avatar2.png" alt="" class="w-10 h-10" />
          <p class="text-p-color font-Inter text-sm">
            by Albert Flores
          </p>
        </div>
      </div>
    </div> -->

        <!-- <div class="item">
      <div class="relative">
        <img src="@/assets/images/featured.png" alt="" class="w-full border-t border-x rounded-t-xl" />
        <div class="absolute ml-5 left-0 bottom-[176px] sm:bottom-[160px] lg:bottom-[176px]">
          <button class="bg-price-bg px-2 rounded-full text-sm">$99.0</button>
        </div>
      </div>
      <div class="bg-white pt-5 px-5 pb-7 shadow-xl border border-t-0 rounded-b-xl">
        <h2 class="font-Inter-SemiBold text-xl sm:text-2xl mb-2">The Complete Copywriting</h2>
        <p class="text-lesson-color font-Inter text-xs mb-2">17 Lesson</p>
        <p class="text-p-color font-Inter text-sm mb-4">
          Provide most popular courses that your want 
          to join and lets start the course for the most 
          simply way in here
        </p>
        <div class="flex items-center gap-4">
          <img src="@/assets/images/avatar3.png" alt="" class="w-10 h-10" />
          <p class="text-p-color font-Inter text-sm">
            by Albert Flores
          </p>
        </div>
      </div>
    </div> -->
      </div>
    </div>
    <div class="flex justify-center pb-24">
      <router-link
        to="#"
        class="px-5 py-2.5 text-white border border-black bg-black rounded-lg"
      >
        View All courses
      </router-link>
    </div>
  </section>
</template>

<script>
import FeaturedComponent from "./FeaturedComponent.vue";
export default {
  components: {
    FeaturedComponent: FeaturedComponent,
  },
  data() {
    return {
      courses: [
        {
          imageSrc: "/src/assets/images/featured.png",
          price: "$99.0",
          title: "The Complete Copywriting",
          lessonCount: "17 Lesson",
          description:
            "Provide most popular courses that your want to join and lets start the course for the most simply way in here",
          avatarSrc: "/src/assets/images/avatar1.png",
          author: "Albert Flores",
        },
        {
          imageSrc: "/src/assets/images/featured.png",
          price: "$99.0",
          title: "The Complete Copywriting",
          lessonCount: "17 Lesson",
          description:
            "Provide most popular courses that your want to join and lets start the course for the most simply way in here",
          avatarSrc: "/src/assets/images/avatar2.png",
          author: "Albert Flores",
        },
        {
          imageSrc: "/src/assets/images/featured.png",
          price: "$99.0",
          title: "The Complete Copywriting",
          lessonCount: "17 Lesson",
          description:
            "Provide most popular courses that your want to join and lets start the course for the most simply way in here",
          avatarSrc: "/src/assets/images/avatar3.png",
          author: "Albert Flores",
        },
      ],
    };
  },
};
</script>

<style>
</style>