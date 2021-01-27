<template>
  <section>
    <div class="flex flex-col md:flex-row justify-around border-extra">
      <div class="flex flex-col self-center">
        <img
          :src="image"
          alt="profile image"
          class="rounded-xl w-28 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:opacity-30 mt-2 self-center"
        />
        <button
          class="text-xl border-2 border-gray-900 px-5 bg-span text-primary font-semibold my-2 hover:bg-primary hover:text-span transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50 flex-grow"
          @click="showEditAvatar = true"
        >
          Edit Avatar
        </button>
      </div>
      <div
        class="flex flex-wrap justify-between items-center p-2 md:flex-col"
        infomration
        to
        change
      >
        <p class="text-3xl text-primary overflow-ellipsis">
          {{ name }}
        </p>
        <p class="text-2xl text-primary">{{ about }}</p>
        <button
          class="text-xl border-2 border-gray-900 px-6 bg-span text-primary font-semibold hover:bg-primary hover:text-span transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50"
       @click="showEditProfile = true" >
          Edit Profile
        </button>
      </div>
      <button
        class="text-xl border-2 border-gray-900 px-6 bg-span text-primary font-semibold hover:bg-primary hover:text-span transition duration-700 ease-in-out focus:ring-purple-600 focus:ring-opacity-50 h-2/3 self-center"
      >
        Add Card +
      </button>
    </div>
  </section>

  <!-- <Modal v-if="showEditAvatar" title="Edit Avatar">
    <template #main>
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
    </template>
    <template #footer>
      <div class="flex flex-col">
        <button class="my-4 border-2 text-2xl text-yellow-50">Save</button>
        <button
          @click="showEditAvatar = false"
          class="my-4 border-2 text-2xl jtext-yellow-50"
        >
          Close
        </button>
      </div>
    </template>
  </Modal> -->

  <Modal v-if="showEditProfile" title="Edit Profile">
    <template #main>
      <div class="my-4">
        <label class="text-3xl text-background text-center">Enter Name</label>
        <input
          id="name"
          required
          name="ImageLink"
          placeholder="Please input Name"
          class="text-lg rounded-2xl border-double border-2 focus:border-blue-500 focus:outline-none placeholder-primary focus:placeholder-gray-400 placeholder-opacity-75 rounder shadow p-2 my-4 w-full"
          type="text"
          v-on:input="setName"
          v-model="name"
        />
        <input
          id="about"
          required
          name="ImageLink"
          placeholder="Please input About"
          class="text-lg rounded-2xl border-double border-2 focus:border-blue-500 focus:outline-none placeholder-primary focus:placeholder-gray-400 placeholder-opacity-75 rounder shadow p-2 my-4 w-full"
          type="text"
          v-model="about"
        />
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col">
        <button  type="submit" @submit="setInfo" class="my-4 border-2 text-2xl text-yellow-50">Save</button>
        <button  @click="setInfo" class="my-4 border-2 text-2xl jtext-yellow-50">
          Close
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import image from '../images/logo.jpg';
import Modal from './Modal.vue';

export default {
  name: 'Profile',
  components: { Modal },

  data() {
    return {
      image,
      showEditAvatar: false,
      showEditProfile: false,
      name: 'My cool name',
      about: 'my cool About',

    };
  },
  methods: {
    setInfo(event) {
      this.name = event.target.value;
      this.about = event.target.value;
      this.showEditProfile = !this.showEditProfile;
    },
  },
};
</script>
