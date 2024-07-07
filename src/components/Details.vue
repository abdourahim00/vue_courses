<template>
  <section class="bg-choose-bg border border-black">
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
    <div class="max-w-7xl py-14 px-5">
      <div class="flex gap-12">
        <div class="ml-20 mt-10">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-Inter-Bold mb-5">
            Advanced Funnels with
            Google Analytics
          </h1>
          <p class="text-p-color font-Inter text-2xl mb-5">
            Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat
            feugiat <br />
            congue viverra facilisis.
          </p>
          <div class="flex items-center gap-4 mb-10">
            <img src="@/assets/images/avatar1.png" alt="" class="w-10 h-10" />
            <p class="text-p-color font-Inter text-sm">by Albert Flores</p>
          </div>
          <div class="relative">
            <div class="absolute">
              <img
                src="@/assets/images/img-details.png"
                alt=""
                class="rounded-3xl"
              />
            </div>
            <div class="absolute top-44 ml-80">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="white" />
                <path d="M56 40L32 26.1436V53.8564L56 40Z" fill="#1C5CFF" />
              </svg>
            </div>
          </div>
        </div>
        <div class="absolute right-0 mt-10 bg-white border rounded-2xl mr-40 pb-5">
          <div class="p-6">
            <p class="text-2xl font-Inter-Bold sm:text-xl mb-3">$99.00 USD</p>
            <p class="text-p-color font-Inter text-xs mb-4">
              Provide most popular courses that your want <br>
              to join and lets start the course for the most <br>
              simply way in here
            </p>
            <div class="text-center">
              <router-link
                to="/cart"
                class="inline-block px-12 py-4 text-sm text-white border border-black bg-black rounded-lg mb-5"
              >
                Add to Cart
              </router-link>
            </div>
            <div class="flex gap-44 mt-6">
              <div class="flex flex-col gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Graph icon"
                >
                  <path
                    d="M6 13V15M10 9V15M14 5V15M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  test
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Clock icon"
                >
                  <path
                    d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Video icon"
                >
                  <path
                    d="M21 4.93137C21 4.32555 21 4.02265 20.8802 3.88238C20.7763 3.76068 20.6203 3.69609 20.4608 3.70865C20.2769 3.72312 20.0627 3.93731 19.6343 4.36569L16 8L19.6343 11.6343C20.0627 12.0627 20.2769 12.2769 20.4608 12.2914C20.6203 12.3039 20.7763 12.2393 20.8802 12.1176C21 11.9774 21 11.6744 21 11.0686V4.93137Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H11.2C12.8802 1 13.7202 1 14.362 1.32698C14.9265 1.6146 15.3854 2.07354 15.673 2.63803C16 3.27976 16 4.11984 16 5.8V10.2C16 11.8802 16 12.7202 15.673 13.362C15.3854 13.9265 14.9265 14.3854 14.362 14.673C13.7202 15 12.8802 15 11.2 15H5.8C4.11984 15 3.27976 15 2.63803 14.673C2.07354 14.3854 1.6146 13.9265 1.32698 13.362C1 12.7202 1 11.8802 1 10.2V5.8Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Columns icon"
                >
                  <path
                    d="M1 19L1 2M1 11H8.4C8.96005 11 9.24008 11 9.45399 10.891C9.64215 10.7951 9.79513 10.6422 9.89101 10.454C10 10.2401 10 9.96005 10 9.4V2.6C10 2.03995 10 1.75992 9.89101 1.54601C9.79513 1.35785 9.64215 1.20487 9.45399 1.10899C9.24008 1 8.96005 1 8.4 1H2.6C2.03995 1 1.75992 1 1.54601 1.10899C1.35785 1.20487 1.20487 1.35785 1.10899 1.54601C1 1.75992 1 2.03995 1 2.6V11ZM10 3H16.4C16.9601 3 17.2401 3 17.454 3.10899C17.6422 3.20487 17.7951 3.35785 17.891 3.54601C18 3.75992 18 4.03995 18 4.6V11.4C18 11.9601 18 12.2401 17.891 12.454C17.7951 12.6422 17.6422 12.7951 17.454 12.891C17.2401 13 16.9601 13 16.4 13H11.6C11.0399 13 10.7599 13 10.546 12.891C10.3578 12.7951 10.2049 12.6422 10.109 12.454C10 12.2401 10 11.9601 10 11.4V3Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p class="text-p-color font-Inter-SemiBold mb-2">
              Intermediate
            </p>
            <p class="text-p-color font-Inter-SemiBold mb-2">
              6hr 48
            </p>
            <p class="text-p-color font-Inter-SemiBold mb-2">
              40 
            </p>
            <p class="text-p-color font-Inter-SemiBold mb-2">
              English
            </p>
            
              </div>
             
            </div>
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