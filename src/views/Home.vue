<template>
  <section class="font-Inter relative">
    <div class="absolute left-0">
      <svg
        width="177"
        height="194"
        viewBox="0 0 177 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1" cy="1" r="150" fill="#FCD53A" />
      </svg>
    </div>
    <div class="absolute bottom-0 right-0">
      <svg
        width="382"
        height="201"
        viewBox="0 0 382 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="247" cy="247" r="247" fill="#1C5CFF" />
      </svg>
    </div>

    <div class="container mx-auto max-w-7xl py-14">
      <div class="flex flex-col lg:flex-row gap-32 relative">
        <div class="flex flex-col justify-center">
          <div>
            <h1 class="text-7xl font-Inter-light">
              Explore Live <br />
              Creative Classes
            </h1>
          </div>
          <div class="my-5">
            <p class="text-p-color font-Inter-SemiBold">
              Choose from over 2,000+ courses on topics like user interface
              design, <br />
              graphic design, front-end development, and much more...
            </p>
          </div>
          <div class="flex gap-3">
            <div>
              <router-link
                to="#"
                class="px-5 py-2.5 text-white border border-black bg-black rounded-lg block"
              >
                Get Started
              </router-link>
            </div>
            <div>
              <router-link
                to="#"
                class="px-5 py-2.5 text-color-tertiaire border border-color-border-button rounded-lg block"
              >
                Learn More
              </router-link>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="">
            <img
              src="../assets/images/img1.png"
              alt="img"
              class="rounded-2xl"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>