<template>
  <div @click="exitLogin" id="login-form" :class="appear">
  <div class="flex items-center justify-center h-screen lg:w-2/5 m-auto">
  <div v-if="currentUser === null" class="relative w-full bg-white flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
    <button @click="sendDataClass" class="top-0 right-0 absolute mr-2 mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
 
  <form v-if="mode === 'login'" @submit.prevent="onSubmit" @keyup.enter="login()" class="flex flex-col space-y-8 mt-10">
    <div class="text-black mt-5">
    <h1 class="font-bold text-4xl text-center">Login</h1>
    </div>
    <input type="email" v-model="crendentials.email" placeholder="For-example@example.com" class="border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring">
    <input type="password" v-model="crendentials.password" placeholder="Password" class="border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring">
    <div class="flex flex-col">
    <button @click="login()" class="bg-green-400 text-white rounded-lg py-3 mt-1 hover:bg-green-500 duration-100 font-semibold">SIGN IN</button>
    <p class="text-center my-1">OR</p>
    <button @click="loginExternal()" class="bg-red-500 text-white rounded-lg py-3 hover:bg-red-600 duration-100 font-semibold">SIGN IN WITH GOOGLE </button>
    </div>
    <p class="message">
          Not registered?
          <a href="#" class="text-blue-400" @click="toggleMode">Create an account</a>
        </p>
  </form>

  <form v-if="mode === 'register'" @keyup.enter="signup()" class="flex flex-col space-y-8 mt-10">
    <div class="text-black mt-5">
    <h1 class="font-bold text-4xl text-center">Register</h1>
    </div>
    <input type="text" placeholder="Your name" v-model="crendentials.name" class="border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring">
    <input type="email" placeholder="For-example@example.com" v-model="crendentials.email" class="border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring">
    <input type="password" placeholder="Password" v-model="crendentials.password" class="border rounded-lg py-3 px-3 bg-gray-100 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring">
    <button @click="signup()" class="bg-green-400 text-white rounded-lg py-3 hover:bg-green-500 duration-100 font-semibold">REGISTER</button>
    <p class="message">
          Already registered?
          <a href="#" class="text-blue-400" @click="toggleMode">Log in</a>
        </p>
  </form>
</div>
</div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name: "LoginForm",
  data(){
    return {
      className: "hide",
       crendentials: {
        name: "",
        password: "",
        email: ""
      },
      mode: "login"
    }
  },
  computed: {
    ...mapGetters("auth", ["currentUser"])
  },
  methods:{
    sendDataClass(){
      this.$emit('hideClass',this.className);
    },
    exitLogin(event){
      let login_form = document.getElementById("login-form");
      if(event.target == login_form)
      this.sendDataClass();
    },
     ...mapActions("auth", [
      "attemptLogin",
      "attemptSignup",
      "attemptExternalLogin"
    ]),
    toggleMode() {
      this.mode === "register"
        ? (this.mode = "login")
        : (this.mode = "register");
    },
    signup() {
      this.attemptSignup(this.crendentials)
        .then(response => {
          alert(`Confirmation email has been sent to you! ${response.id}`);
          console.log(response);
        })
        .catch(error => {
          alert(`Somethings gone wrong signing up.
                 Error: ${error}`);
          console.error(error, "Somethings gone wrong signing up");
        });
    },
    login() {
      this.attemptLogin(this.crendentials)
        .then(() => {
          alert(`You have signed in!`);
        })
        .catch(error => {
          console.log(`Somethings gone wrong logging in.
                 Error: ${error}`);
          console.error(error, "Somethings gone wrong logging in");
        });
    },
    loginExternal() {
      this.attemptExternalLogin("Google");
    }
    
  }
}
</script>
<style scoped>
#login-form {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  transition: all 0.15s;
  vertical-align: middle;
}
</style>