<template>
<div>
    <div class="h-60 flex flex-col max-w-md bg-gray-200 opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center border-solid rounded-b-3xl rounded-t-3xl">
        <div class="flex justify-between px-1 pt-4 items-center">
          <div @click="sendDataClass" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
          </div>
          <div> 
            <p class="font-semibold">My Profile</p>
          </div>
        </div>
        <div class="flex items-center px-4 pt-12 justify-between">
          <div class="w-24 h-24 bg-green-400 flex items-center rounded-full">
            <img class="h-20 w-20 mx-auto filter invert" src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"/>
          </div>
          <div class="w-9/12 flex items-center">
            <div class="w-10/12 flex flex-col leading-none pl-4">
              <p class="text-2xl font-bold">{{currentUser.user_metadata.full_name}}</p>
              <p class="text-l pt-1 font-light text-gray-700">{{currentUser.email}}</p>
            </div>
          </div>
        </div> 
         <div class="flex px-4">
                 <button @click="logout()" class="flex flex-row py-2 bg-red-400 text-white rounded px-2 font-semibold mt-2">
                   Log out 
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                   </svg>
                   </button>

         </div>
        </div>  
</div> 
</template>
<script>
import { mapActions,mapGetters } from "vuex"
export default {
    name: "Profile",
    data(){
        return{
            className: "hide"
        }
    },
    methods:{
    sendDataClass(){
      this.$emit('hideClass',this.className);
    },
    ...mapActions("auth", [
      "attemptLogout",
    ]),
    logout() {
      this.attemptLogout()
        .then(resp => {
          alert("logged out");
          this.$router.push("/");
          console.log("logged out", resp);
        })
        .catch(error => {
          alert("problem with logout");
          location.reload();
          console.error("problem with logout", error);
        });
    }
    },
    computed:
    { ...mapGetters("auth", ["currentUser"]) }
}
</script>
<style>
      .bg-gelap{
        background-color: #001E26;
      }
      .bg-btn{
        background-color: #FF6446;
      }
      </style>