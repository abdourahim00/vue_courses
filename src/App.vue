<template>
  <div>
    <Header/>
    <Accueil/>
    <Choose></Choose>

    <!-- <router-view/> -->
  </div>  
</template>

<script>
import Header from './components/Header.vue'
import Accueil from './views/Home.vue'
import Choose from './views/Choose.vue';
export default {
  components: {
    Header : Header,
    Accueil : Accueil,
    Choose : Choose,
  }
}
</script>

<style >


</style>
