<template>
  <div class="mb-5 flex flex-col md:flex-row justify-between ">
    <img :src="image" alt="logo goes here" class="w-20 self-center h-auto rounded-full p-1">
    <div class="flex items-center  justify-between  flex-col mt-2 md:mt-0 md:items-start" >
      <p class="text-3xl text-primary overflow-ellipsis  overflow-hidden ">enyelsequeira@hotmail.com</p>
      <div>
        <button class="text-xl border-double border-4 border-gray-900 px-5 bg-primary  text-span  font-semibold my-2  hover:bg-span hover:text-primary ring-offset-2 ring-opacity-70 ring  transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50 flex-grow">Enyel =></button>
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
