<template>
  <div>
    <Card/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Card from '@/components/Cards.vue';

export default defineComponent({
  name: 'Main',
  components: {
    Card,
  },
});
</script>
