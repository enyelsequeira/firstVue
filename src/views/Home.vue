<template>
  <Nav />
  <Profile @open-login-modal="isLoginOpen = true" />

  <LoginModal
    title="Edit Avatar"
    button="save"
    v-if="isLoginOpen"
    @close-login="isLoginOpen = false"
  >
    <div class="my-4">
      <label class="text-3xl text-background text-center">Enter Url</label>
      <input
        required
        name="ImageLink"
        placeholder="Please input url"
        class="text-lg rounded-2xl border-double border-2 focus:border-blue-500 focus:outline-none placeholder-primary focus:placeholder-gray-400 placeholder-opacity-75 rounder shadow p-2 my-4 w-full"
        type="url"
      />
    </div>
  </LoginModal>

  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src
import Profile from '@/components/Profile.vue';
import Main from '@/components/Main.vue';
import LoginModal from '@/components/Modal.vue';

export default defineComponent({
  name: 'Home',

  components: {
    Nav,
    Profile,
    Main,
    LoginModal,
  },
  data() {
    return {
      isLoginOpen: false,
    };
  },
});
</script>
