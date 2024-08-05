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
    <div class="container mx-auto max-w-7xl py-14 px-5 relative">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-8">
          <h1 class="text-3xl md:text-5xl lg:text-5xl font-Inter-Bold mb-5">
            {{ courses.title }}
          </h1>

          <p class="text-p-color font-Inter text-xl mb-5">
            {{ courses.description }}
          </p>

          <div class="flex items-center gap-4 mb-10">
            <img src="@/assets/images/avatar1.png" alt="" />
            <p class="text-p-color font-Inter text-sm">by Albert Flores</p>
          </div>
          <a
            :href="'https://127.0.0.1:8000/api/video/getVideo/' + courses.id"
            class="w-full" :class="{ hidden: !payment }"
          >
            <div class="relative lg:-mb-[30rem]">
              <img
                :src="courses.image"
                alt=""
                class="max-w-full rounded-3xl w-[80%] h-[100%]"
              />
              <div class="absolute left-[40%] top-[40%] right[50%]">
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
          </a>
          <div class="grid grid-cols-12 absolute" :class="{ hidden: payment }">
            <div class="cols-span-12 relative">
              <iframe width="800" height="500" src="https://www.youtube.com/embed/OS_TVKWDJos?si=r9KQz-0gVdyJN5Qq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="lg:col-span-1 col-span-12"></div>
        <div
          class="lg:col-span-3 col-span-12 bg-white rounded-2xl shadow-xl w-[100%] h-[80%]"
          :class="{ hidden: !payment }"
        >
          <div>
            <div class="p-4">
              <p class="text-2xl font-Inter-Bold sm:text-xl mt-5 mb-5">
                {{ courses.price }} F CFA
              </p>
              <p class="text-p-color font-Inter text-sm mb-5">
                Provide most popular courses that your want to join and lets
                start the course for the most simply way in here
              </p>
              <div v-if="auth.getIsAuthenticated" class="text-center">
                <button
                  @click="addToOrder"
                  class="inline-block px-16 py-3 text-sm text-white border border-black bg-black rounded-xl mb-5 w-full"
                >
                  Buy Now
                </button>
              </div>
              <div v-else class="text-center">
                <router-link
                  to="/connexion"
                  class="inline-block px-16 py-3 text-sm text-white border border-black bg-black rounded-xl mb-5 w-full"
                >
                  Se Connecter
                </router-link>
              </div>

              <div class="">
                <div class="flex flex-col">
                  <div class="mb-4">
                    <div class="flex justify-between">
                      <div class="flex gap-1">
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 13V15M10 9V15M14 5V15M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                              stroke="#667085"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p class="text-p-color font-Inter text-sm">
                            Course Level
                          </p>
                        </div>
                      </div>
                      <div>
                        <p
                          class="text-p-color font-Inter-SemiBold text-sm text-right"
                        >
                          Intermediate
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="flex justify-between">
                      <div class="flex gap-1">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="#667085"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p class="text-p-color font-Inter text-sm">
                            Course Duration
                          </p>
                        </div>
                      </div>
                      <div>
                        <p
                          class="text-p-color font-Inter-SemiBold text-sm text-right"
                        >
                          6hr 48m
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="flex justify-between">
                      <div class="flex gap-1">
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 8.93137C22 8.32555 22 8.02265 21.8802 7.88238C21.7763 7.76068 21.6203 7.69609 21.4608 7.70865C21.2769 7.72312 21.0627 7.93731 20.6343 8.36569L17 12L20.6343 15.6343C21.0627 16.0627 21.2769 16.2769 21.4608 16.2914C21.6203 16.3039 21.7763 16.2393 21.8802 16.1176C22 15.9774 22 15.6744 22 15.0686V8.93137Z"
                              stroke="#667085"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2 9.8C2 8.11984 2 7.27976 2.32698 6.63803C2.6146 6.07354 3.07354 5.6146 3.63803 5.32698C4.27976 5 5.11984 5 6.8 5H12.2C13.8802 5 14.7202 5 15.362 5.32698C15.9265 5.6146 16.3854 6.07354 16.673 6.63803C17 7.27976 17 8.11984 17 9.8V14.2C17 15.8802 17 16.7202 16.673 17.362C16.3854 17.9265 15.9265 18.3854 15.362 18.673C14.7202 19 13.8802 19 12.2 19H6.8C5.11984 19 4.27976 19 3.63803 18.673C3.07354 18.3854 2.6146 17.9265 2.32698 17.362C2 16.7202 2 15.8802 2 14.2V9.8Z"
                              stroke="#667085"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p class="text-p-color font-Inter text-sm">Lesons</p>
                        </div>
                      </div>
                      <div>
                        <p
                          class="text-p-color font-Inter-SemiBold text-sm text-right"
                        >
                          40
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="flex justify-between">
                      <div class="flex gap-1">
                        <div>
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <p class="text-p-color font-Inter text-sm">
                            Language
                          </p>
                        </div>
                      </div>
                      <div>
                        <p
                          class="text-p-color font-Inter-SemiBold text-sm text-right"
                        >
                          English
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import CoursePayment from "./CoursePayment.vue";
export default {
  props: {
    courses: {},
  },
  data() {
    return {
      auth: useAuthStore(),
      cours_id: null,
      quantity: 1,
      video: null,
      payment: CoursePayment.isBought,
    };
  },
  methods: {
    async addToOrder() {
      try {
        const response = await this.$axios.post("/orders", {
          cours_id: this.courses.id,
          quantity: this.quantity,
          // setAuthHeader()
        });
        console.log(response);
        if (response.data.success == 1) {
          new PayTech({})
            .withOption({
              tokenUrl: response.data.redirect_url,

              prensentationMode: PayTech.OPEN_IN_POPUP,
            })
            .send();
        }
        // console.log('cours id :  ', this.cours_id);
        // console.log('Quantite : ' ,this.quantity);
        alert("Cours ajoute à votre commande avec succès");
      } catch (error) {
        console.error(error);
        alert("Une erreur s'est produite lors de la commande du cours");
      }
    },
    // async getVideo() {
    //   try {
    //     const { data } = await this.$axios.get(`/video/getVideo/${this.courses.id}`, {
    //       headers: {
    //         Authorization: `Bearer ${this.auth.getToken}`,
    //       },
    //     });

    //     this.video = data.data.video;
    //     console.log(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  },
};
</script>

<style>
</style>