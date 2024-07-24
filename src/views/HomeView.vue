<template>
  <div>
    <Home></Home>
    <Choose></Choose>
    <Category></Category>
    <Featured></Featured>
    <Talented></Talented>
    <Form></Form>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Choose from "../components/Choose.vue";
import Category from "../components/Category.vue";
import Featured from "../components/Featured.vue";
import Talented from "../components/Talented.vue";
import Form from "../components/FormComponent.vue";
import { useAuthStore } from "../stores/auth";
export default {
  data(){
    return{
      auth: useAuthStore(),
    }
  },
  components: {
    Home: Home,
    Choose: Choose,
    Category: Category,
    Featured : Featured,
    Talented : Talented,
    Form : Form,
  },
};
</script>

<style>

</style>