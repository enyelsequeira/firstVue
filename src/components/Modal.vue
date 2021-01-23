<template>
  <div  id="modal"  class="modal">
    <div
      class="modalinformation border-2 w-full md:w-2/4 bg-primary flex flex-col m-auto bg-opacity-80"
    >
      <p class="text-5xl text-span my-6 m-auto">{{ title }}</p>
      <form class="flex flex-col w-10/12 m-auto p-2">
        <slot></slot>
        <button class="my-4 border-2 text-2xl">{{ button }}</button>
        <button @click="close" class="my-4 border-2 text-2xl">Close</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    button: String,
  },
  data() {
    return {
    };
  },
  // this is not working need to figure out how to get modal to open
  close(e) {
    e.preventDefault();
    this.$emit(e, 'close');
  },

};
</script>
<style lang="css">
modal {
  position: fixed;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 25px #00000026;
  border-radius: 10px;
  left: 0px;
  top: 0px;
  background: #1818188f;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
}
.modal::before {
  content: "";
  height: 100%;
  width: 100%;
  background: #000000;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: -1;
}
</style>
