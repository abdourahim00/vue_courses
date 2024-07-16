<template>
  <section class="mb-5">
        <div class="text-center pt-20">
            <h1 class="font-Inter-Bold text-5xl mb-5">Courses categories</h1>
        </div>
      <p class="text-p-color text-center">
        Provide most popular courses that your want to join and lets start the
        course for <br> the most simply way in here
      </p>

      <div class="container mx-auto max-w-7xl py-14 px-5">
    <div class="grid grid-cols-6 sm:grid-cols-12 gap-4 justify-items-center">

        <CategoryComponent v-for="(category,index) in allCategory"
        :categories="category" :key="index"></CategoryComponent>
        <!-- <div class="item col-span-6 sm:col-span-3">
            <div>
                <img src="@/assets/images/category.png" alt="">
                <p class="font-Inter-Bold">Design</p>
                <p class="text-p-color font-Inter text-xs">Course : 18</p>
            </div>
        </div>

        <div class="item col-span-6 sm:col-span-3">
            <div>
                <img src="@/assets/images/category2.png" alt="">
            </div>
            <div class="pt-5">
                <p class="font-Inter-Bold">Development</p>
                <p class="text-p-color font-Inter text-xs">Course : 18</p>
            </div>
        </div>

        <div class="item col-span-6 sm:col-span-3">
            <div>
                <img src="@/assets/images/category3.png" alt="">
            </div>
            <div class="pt-5">
                <p class="font-Inter-Bold">Marketing</p>
                <p class="text-p-color font-Inter text-xs">Course : 18</p>
            </div>
        </div>

        <div class="item col-span-6 sm:col-span-3">
            <div>
                <img src="@/assets/images/category4.png" alt="">
            </div>
            <div class="pt-5">
                <p class="font-Inter-Bold">Personal Development</p>
                <p class="text-p-color font-Inter text-xs">Course : 18</p>
            </div>
        </div> -->

    </div>
</div>


  </section>
</template>

<script>
// import axios 
import CategoryComponent from './CategoryComponent.vue';
// import categoryImage from '@/assets/images/category.png'
// import category2Image from '@/assets/images/category2.png'
// import category3Image from '@/assets/images/category3.png'
// import category4Image from '@/assets/images/category4.png'
export default {
    components:{
        CategoryComponent : CategoryComponent
    },

    data(){
        return{
            allCategory : [],
        }
    },
    methods: {
        async getCategory(){
            try {
                const {data} = await this.$axios.get('/category');

                // console.log("res",data);
                this.allCategory = data.data.categories;
                // console.log('test', this.allCategory);
            } catch (error) {
                console.error(error);
            }
        }
    },
    created(){
        this.getCategory()
    }

}
</script>

<style>
</style>