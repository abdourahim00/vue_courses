<template>
  <section class="pt-5 lg:pt-96 ">
    <div class="container mx-auto max-w-7xl py-14 px-5">
      <h1 class="text-3xl font-Inter-Bold sm:text-3xl mb-5">
        About the course
      </h1>
      <p class="line-clamp-3 text-p-color font-Inter text-lg mb-10">
        {{ courses.description }}
      </p>

      <h1 class="text-3xl font-Inter-Bold sm:text-3xl mb-5">
        What will you learn
      </h1>
      <p class="text-p-color font-Inter text-lg mb-5">
        {{ courses.description }}

      </p>

      <ol class="text-p-color font-Inter text-lg mb-5 list-decimal pl-5">
        <li>{{ courses.description }}</li>
        <li>{{ courses.description }}</li>
        <li>{{ courses.description }}</li>
        <li>
          {{ courses.description }}
        </li>
      </ol>

      <hr class="mt-20" />


      <h1 class="text-4xl font-Inter-Bold sm:text-4xl mt-16">
        Related Courses
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <!-- <FeaturedComponent
          v-for="(course, index) in courses"
          :courses="course"
          :key="index"
        ></FeaturedComponent> -->
        <CoursRecommanded v-for="(cours, index) in recommanded" :courses="cours" :key="index">
        </CoursRecommanded>

      </div>


    </div>
  </section>
</template>

<script>
import CoursRecommanded from './CoursRecommanded.vue';
// import FeaturedComponent from './FeaturedComponent.vue';
export default {
  props: {
      courses : []   
    },
    components:{
        CoursRecommanded,
        // FeaturedComponent
    },
    data(){
      return{
        recommanded: [],
        // id : this.$route.params.id
      }
    },
    methods: {
      async getCoursesRecommanded(){
        try{
          const { data } = await this.$axios.get("/coursesRecommended/" + this.courses.category_id);
          console.log('cours recom data', data);
          console.log('id category', this.courses.category_id);
          this.recommanded = data.data.cours;
          // console.log(this.recommanded);
          } catch(error){
          console.error(error);
        }
      }
    },
    mounted(){
      this.getCoursesRecommanded()
    }
    // created(){
    //   this.getCoursesRecommanded();
    // }
}
</script>

<style>
</style>