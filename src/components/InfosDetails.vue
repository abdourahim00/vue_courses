<template>
  <section class="pt-5 lg:pt-96 ">
    <div class="container mx-auto max-w-7xl py-14 px-5">
      <h1 class="text-3xl font-Inter-Bold sm:text-3xl mb-5">
        About the course
      </h1>
      <p class="text-p-color font-Inter text-lg mb-10">
        Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis
        donec massa aliquam <br />
        id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        viverra praesent felis <br />
        consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac
        mauris bibendum nulla <br />
        placerat. Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
        euismod laoreet urna, <br />
        feugiat et. Euismod sem purus rutrum in. Tortor varius a bibendum nisl
        et tellus. Aliquet <br />
        elit senectus iaculis netus gravida.
      </p>

      <h1 class="text-3xl font-Inter-Bold sm:text-3xl mb-5">
        What will you learn
      </h1>
      <p class="text-p-color font-Inter text-lg mb-5">
        Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis
        donec massa aliquam <br />
        id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        viverra praesent felis <br />
        consequat pellentesque turpis et quisque platea. Eu, elit ut nunc ac
        mauris bibendum nulla <br />
        placerat. Sagittis sit eu sit massa sapien,
      </p>

      <ol class="text-p-color font-Inter text-lg mb-5 list-decimal pl-5">
        <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
        <li>At urna condimentum mattis pellentesque id nibh.</li>
        <li>Magna etiam tempor orci eu lobortis elementum.</li>
        <li>
          Bibendum est ultricies integer quis. Semper eget duis at tellus.
        </li>
      </ol>

      <hr class="mt-20" />


      <h1 class="text-4xl font-Inter-Bold sm:text-4xl mt-16">
        Related Courses
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <FeaturedComponent
          v-for="(course, index) in courses"
          :courses="course"
          :key="index"
        ></FeaturedComponent>
      </div>


    </div>
  </section>
</template>

<script>
import FeaturedComponent from './FeaturedComponent.vue';
export default {
    components:{
        FeaturedComponent : FeaturedComponent,
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
          avatarSrc: "/src/assets/images/avatar1.png",
          author: "Albert Flores",
        },
    ]
    }
}
};
</script>

<style>
</style>