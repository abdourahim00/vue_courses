<template>
    <div>
      <Details></Details>
      <div class="mt-96">
        <InfosDetails></InfosDetails>
      </div>
      
    </div>
  </template>
  
  <script>
  import Details from "../components/Details.vue";
  import InfosDetails from "../components/InfosDetails.vue";
  export default {
    components: {
     Details: Details,
     InfosDetails: InfosDetails,
    },
  };
  </script>
  
  <style>
  
  </style>