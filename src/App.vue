<template>
  <div class="max-w-screen-xl mx-auto bg-background h-full border-8 border-secondary">
    <HomeVue />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HomeVue from './views/Home.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeVue,
  },
  mounted() {
    this.$store.dispatch('fetchCards');
  },

});
</script>
