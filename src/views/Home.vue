<template>
  <Nav />
  <Profile />

  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src
import Profile from '@/components/Profile.vue';
import Main from '@/components/Main.vue';

export default defineComponent({
  name: 'Home',

  components: {
    Nav,
    Profile,
    Main,
  },
  data() {
    return {};
  },
});
</script>
