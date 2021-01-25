<template>
  <section>
    <div class="flex flex-col md:flex-row justify-around  border-extra">
      <div class="flex flex-col self-center">
        <img  @click="$emit('open-login-modal')"
          :src="image"
          alt="profile image"
          class="rounded-xl w-28 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:opacity-30 mt-2 self-center"
        />
        <button @click="$emit('open-login-modal')" class="text-xl border-2 border-gray-900 px-5 bg-span text-primary  font-semibold my-2  hover:bg-primary hover:text-span  transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50 flex-grow">Edit Avatar</button>
      </div>
      <div class="flex flex-wrap justify-between items-center p-2 md:flex-col" infomration to change>
        <p class="text-3xl text-primary overflow-ellipsis ">Enyel Sequeira</p>
        <p class="text-2xl text-primary">Teacher</p>
        <button class="text-xl border-2 border-gray-900 px-6 bg-span text-primary  font-semibold  hover:bg-primary hover:text-span  transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50  "  >Edit Profile</button>
      </div>
      <button class="text-xl border-2 border-gray-900 px-6 bg-span text-primary  font-semibold  hover:bg-primary hover:text-span  transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50 h-2/3 self-center " >Add Card +</button>
    </div>
  </section>

</template>

<script>
import image from '../images/logo.jpg';

export default {
  name: 'Profile',
  components: {
  },

  data() {
    return {
      image,
    };
  },
  methods: {

  },
};
</script>
