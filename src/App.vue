<template>
  <div>
    <Header />
    <Accueil />
    <Choose></Choose>
    <Category></Category>
    <Featured></Featured>
    

    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Accueil from "./views/Home.vue";
import Choose from "./views/Choose.vue";
import Category from "./views/Category.vue";
import Featured from "./views/Featured.vue";
export default {
  components: {
    Header: Header,
    Accueil: Accueil,
    Choose: Choose,
    Category: Category,
    Featured : Featured
  },
};
</script>

<!-- <style src="@/assets/css/style.css">
</style> -->
