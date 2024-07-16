<template>
  <div>
    <!-- <Details></Details> -->

    <Details2 :courses="detailsCourse"></Details2>
    <InfosDetails :courses="detailsCourse"></InfosDetails>
    <!-- <div class="mt-96"> -->
    <!-- <div class="mt-56"> -->
    <!-- 
      </div> -->
  </div>
</template>
  
  <script>
import Details from "../components/Details.vue";
import InfosDetails from "../components/InfosDetails.vue";
import Details2 from "../components/Details2.vue";
export default {
  components: {
    Details,
    InfosDetails,
    Details2,
  },

  data() {
    return {
      detailsCourse: [],
      slug: "",
    };
  },

  methods: {
    async getDetails() {
      try {
        const { data } = await this.$axios.get("/getDetails/" + this.$route.params.slug);
        this.detailsCourse = data.data.cours;
        // console.log("Test", this.detailsCourse);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getDetails();
  },
};
</script>
  
  <style>
</style>