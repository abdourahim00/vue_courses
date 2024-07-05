<template>
  <div>
    <Home></Home>
    <Choose></Choose>
    <Category></Category>
    <Featured></Featured>
    <Talented></Talented>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Choose from "../components/Choose.vue";
import Category from "../components/Category.vue";
import Featured from "../components/Featured.vue";
import Talented from "../components/Talented.vue";
export default {
  components: {
    Home: Home,
    Choose: Choose,
    Category: Category,
    Featured : Featured,
    Talented : Talented,
  },
};
</script>

<style>

</style>