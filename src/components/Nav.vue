<template>
  <div class="mb-5 flex flex-col md:flex-row justify-between ">
    <img :src="image" alt="logo goes here" class="w-20 self-center h-auto rounded-full p-1">
    <div class="flex items-center  justify-between  flex-col mt-2 md:mt-0 md:items-start" >
      <p>Mail goes here</p>
      <div>
        <p>user name/link to go out</p>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../images/logo.jpg';

export default {
  name: 'Nav',

  data() {
    return { image };
  },
};
</script>
