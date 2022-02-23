<template>
<div>
  <div v-if="currentUser === null" class="flex flex-col">
  <button @click="appear()" class="font-normal w-24 py-2 bg-green-400 font-mono text-white hover:bg-green-500 duration-200 text-l rounded">Login</button>
  <LoginForm :class="hide" @hideClass="updateAppear"/>
  </div>
  <div v-else class="flex flex-col">
  <button @click="appearPro()" class="z-10 font-bold w-24 py-4 bg-gray-900 font-mono text-white hover:bg-gray-500 duration-200 text-l rounded">Profile</button> 
  <Profile :class="appearProfile" @hideClass="updateAppearPro"/>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import LoginForm from "./components/Login.vue"
import Profile from "./components/Profile.vue"

export default {
  components: { LoginForm, Profile },
  name: 'App',
  data(){
    return {
      hide: "hide",
      appearProfile: "hide", 
    }
  },
  methods:{
    appear(){
      if(this.hide == 'hide')
        this.hide = null;
      else
        this.hide = 'hide';
    },
    appearPro(){
      if(this.appearProfile == 'hide')
        this.appearProfile = null;
      else
        this.appearProfile = 'hide';
    },
    updateAppear(stt){
      this.hide = stt;
    },
    updateAppearPro(stt){
      this.appearProfile = stt;
    },
    ...mapActions("auth", [
      "attemptLogin",
      "attemptSignup",
      "attemptExternalLogin"
    ]),
  },
  computed: {
    ...mapGetters("auth", ["currentUser"])
  }
}
</script>
<style scoped>
.hide{
  display: none !important;
}
</style>
