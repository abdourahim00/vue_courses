<template>
  <section class="container mx-auto mt-32">
    <div :class="{ cont: true, 's--signup': isSignUp }">
      <form @submit.prevent="userLogin">
        <div class="form sign-in">
          <h2>Bienvenue</h2>
          <label>
            <span>Email</span>
            <input type="email" v-model="email" required />
          </label>
          <label>
            <span>Mot de Passe</span>
            <input type="password" v-model="password" required />
          </label>
          <div v-if="isLoggedIn">
            <label>
              <span>OTP</span>
              <input type="text" v-model="otp" required />
            </label>
          </div>
          <button type="submit" class="submit">Connexion</button>
        </div>
      </form>
      <div v-if="isLoggedIn">
        <div class="bg-black">
          <button @click="verifyOTP">Vérifier OTP</button>
        </div>
        <br />
        <div class="bg-red-500">
          <button @click="regenerateOTP">Regénérer OTP</button>
        </div>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h3>Vous n'avez pas de compte? S'il vous plaît inscrivez-vous</h3>
          </div>
          <div class="img__text m--in">
            <h3>Si vous avez un compte, connectez-vous</h3>
          </div>
          <div class="img__btn" @click="toggleSignUp">
            <span class="m--up">S'inscrire</span>
            <span class="m--in">Connexion</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>Créer un compte</h2>
          <form @submit.prevent="getRegister">
            <label>
              <span>Nom</span>
              <input type="text" v-model="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" v-model="email" required />
            </label>
            <label>
              <span>Mot de Passe</span>
              <input type="password" v-model="password" required />
            </label>
            <label>
              <span>Téléphone</span>
              <input type="text" v-model="phone_number" required />
            </label>

            <button type="submit" class="submit">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import { useAuthStore } from "../stores/auth";
export default {
  data() {
    return {
      isSignUp: false,
      name: "",
      email: "abdourahim0081@gmail.com",
      password: "dernier",
      phone_number: "",
      isLoggedIn: false,
      otp: "",
      store: useAuthStore(),
      auth: {
        isAuthenticated: false,
        token: "",
        user: {},
      },
    };
  },
  methods: {
    // loginUser(){
    //   this.store.userLogin(this.email, this.password);
    // },
    async userLogin() {
      try {
        const { data } = await this.$axios.post("/login", {
          email: this.email,
          password: this.password,
        });
        console.log("Réponse du serveur:", data);
        if (data.status == 200) {
          this.isLoggedIn = true;
          this.auth.user = data.data.user;
          alert("Connexion réussie!");
          return true;
        }
      } catch (error) {
        console.log(error);
        alert("Connexion échouée!");
        return false;
      }
    },
    async verifyOTP() {
      // console.log(otp);
      try {
        const { data } = await this.$axios.post("/verifyOTP", {
          otp: this.otp,
        });
        if (data.status == 200) {
          this.auth.isAuthenticated = true;
          this.auth.token = data.data.token;
          this.store.saveInLocalStorage(this.auth);
          this.$axios.defaults.headers = {
            'Authorization': `Bearer ${this.auth.token}`,
        };
        // console.log('test', this.$axios.defaults.headers);
          alert("OTP valide ! Vous êtes maintenant connecté.");
          return this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
        alert("OTP invalide !");
        return false;
      }
    },
    // async OTPverify() {
    //   const result = this.store.verifyOTP(this.otp);
    //   if (result) {
    //     return this.$router.push("/");
    //   }
    //   else{
    //     alert("OTP invalide !");
    //   }
    // },
    toggleSignUp() {
      this.isSignUp = !this.isSignUp;
    },
    async getRegister() {
      try {
        const { data } = await this.$axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          phone_number: this.phone_number,
        });
        console.log("Réponse du serveur:", data);
        if (data.status == 200) {
          alert("Inscription réussie !");
          this.$router.push("/connexion");
        } else {
          alert("Inscription échouée !");
        }

        this.name = "";
        this.email = "";
        this.password = "";
        this.phone_number = "";
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        alert("Une erreur s'est produite lors de l'inscription.");
      }
    },
    // async getLogin() {
    //   try {
    //     const { data } = await this.$axios.post("/login", {
    //       email: this.email,
    //       password: this.password,
    //     });
    //     console.log("Réponse du serveur:", data);
    //     if (data.status === 200) {
    //       this.isLoggedIn = true;
    //       alert("Connexion réussie !");
    //       // this.$router.push("/");
    //     } else {
    //       alert("Connexion échouée !");
    //     }
    //   } catch (error) {
    //     console.error("Erreur lors de la connexion:", error);
    //     alert("Une erreur s'est produite lors de la connexion.");
    //   }
    // },

    // async verifyOTP() {
    //   try {
    //     const { data } = await this.$axios.post("/verifyOTP", {
    //       otp: this.otp,
    //     });
    //     console.log("Réponse du serveur:", data);
    //     if (data.status == 200) {
    //       alert("OTP valide ! Vous êtes maintenant connecté.");
    //       this.$router.push("/");
    //     } else {
    //       alert("OTP invalide. Veuillez vérifier et réessayer.");
    //     }
    //   } catch (error) {
    //     console.error("Erreur lors de la vérification de l'OTP:", error);
    //     alert("Une erreur s'est produite lors de la vérification de l'OTP.");
    //   }
    // },

    async regenerateOTP() {
      try {
        const { data } = await this.$axios.post("/regenerateOTP", {
          email: this.email,
        });
        console.log("Réponse du serveur:", data);
        if (data.status == 200) {
          alert("OTP régénéré avec succès !");
        } else {
          alert(
            "Échec de la régénération de l'OTP. Veuillez vérifier et réessayer."
          );
        }
      } catch (error) {
        console.error("Erreur lors de la régénération de l'OTP:", error);
        alert("Une erreur s'est produite lors de la régénération de l'OTP.");
      }
    },
  },
};
</script>
  

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  background: #ffffff;
}

input,
button {
  border: none;
  outline: none;
  background: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 900px;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.3),
    10px 10px 15px rgba(70, 70, 70, 0.15),
    inset -10px -10px 15px rgba(255, 255, 255, 0.3),
    inset 10px 10px 15px rgba(70, 70, 70, 0.15);
}

.form {
  position: relative;
  width: 640px;
  height: 100%;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.cont.s--signup .sub-cont {
  -webkit-transform: translate3d(-640px, 0, 0);
  transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}

.img:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url("ext.jpg");
  opacity: 0.8;
  background-size: cover;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.img:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.cont.s--signup .img:before {
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}

.img__text p {
  font-size: 14px;
  line-height: 1.5;
}

.cont.s--signup .img__text.m--up {
  -webkit-transform: translateX(520px);
  transform: translateX(520px);
}

.img__text.m--in {
  -webkit-transform: translateX(-520px);
  transform: translateX(-520px);
}

.cont.s--signup .img__text.m--in {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}

.img__btn:after {
  content: "";
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}

.img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-transform 1.2s;
  transition: -webkit-transform 1.2s;
  transition: transform 1.2s;
  transition: transform 1.2s, -webkit-transform 1.2s;
}

.img__btn span.m--in {
  -webkit-transform: translateY(-72px);
  transform: translateY(-72px);
}

.cont.s--signup .img__btn span.m--in {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.cont.s--signup .img__btn span.m--up {
  -webkit-transform: translateY(72px);
  transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 12px;
  color: #cfcfcf;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}

.fb-btn span {
  font-weight: bold;
  color: #455a81;
}

.sign-in {
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.cont.s--signup .sign-in {
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-duration: 1.2s;
  transition-duration: 1.2s;
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.sign-up {
  -webkit-transform: translate3d(-900px, 0, 0);
  transform: translate3d(-900px, 0, 0);
}

.cont.s--signup .sign-up {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>