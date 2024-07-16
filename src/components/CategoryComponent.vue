<template>
  <div class="item col-span-6 sm:col-span-3">
    <div>
      <img :src="categoryImg[0].imageSrc" alt="" />
    </div>

    <div class="pt-5">
      <p class="font-Inter-Bold">{{ categories.name }}</p>
      <p class="text-p-color font-Inter text-xs">Course : 18</p>
    </div>
  </div>
</template>

<script>
import categoryImage from "@/assets/images/category.png";
import category2Image from "@/assets/images/category2.png";
import category3Image from "@/assets/images/category3.png";
import category4Image from "@/assets/images/category4.png";
export default {
  props: {
    categories: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      categoryImg: [
        {
          imageSrc: categoryImage,
        },
        {
          imageSrc: category2Image,
        },
        {
          imageSrc: category3Image,
        },
        {
          imageSrc: category4Image,
        },
      ],
    };
  },
};
</script>

<style>
</style>