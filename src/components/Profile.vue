<template>
  <section>
    <div class="flex flex-col md:flex-row justify-around border-4 border-extra">
      <div>
        <img
          :src="image"
          alt="profile image"
          class="rounded-xl w-28 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:opacity-30"
        />
        <button @click="openModal">edit</button>
      </div>
      <div class="self-center" infomration to change>
        <p class="text-2xl text-primary">Enyel Sequeira</p>
        <p class="text-xl text-primary">About</p>
        <button>click me</button>
      </div>
      <button>add</button>
    </div>
  </section>
  <Modal title="Edit Profile" button="save" :value="modal" toggle="modalToggle" >
    <input
      required
      id="profile-url"
      name="ImageLink"
      placeholder="Please input url"
      class="text-lg rounded-2xl border-double border-2 focus:border-blue-500 focus:outline-none placeholder-secondary focus:placeholder-gray-400 placeholder-opacity-75"
      type="url"
    />
  </Modal>
</template>

<script>
import image from '../images/logo.jpg';
import Modal from './Modal.vue';

export default {
  name: 'Profile',
  components: {
    Modal,
  },

  data() {
    return {
      image,
      isClosed: true,
    };
  },
  methods: {
    closeModal() {
      this.isClosed = true;
    },
    showModal() {
      this.isClosed = false;
    },

  },
};
</script>
