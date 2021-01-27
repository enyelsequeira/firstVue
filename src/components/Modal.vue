<template>
  <section
    clas="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>

  <div class="absolute inset-0">
    <div class="flex h-full">
      <div
        class="z-30 m-auto rounded-lg md:w-8/12 lg:w-5/12 bg-primary opacity-95 p-2"
      >
        <div class="p-2 border rounded-lg md:w-8/12 lg:w-8/12 m-auto my-8">
          <h1 class="text-5xl text-secondary my-6 text-center">{{ title }}</h1>
          <form class="p-2 my-2 flex flex-col">
            <slot></slot>
            <button class="my-4 border-2 text-2xl text-yellow-50">
              {{ button }}
            </button>
            <button
              @click.prevent="$emit('close-login')"
              @click="$emit('close-edit')"
              @mouseover="$emit('add-card-close')"
              class="my-4 border-2 text-2xl jtext-yellow-50"
            >
              Close
            </button>
          </form>
        </div>
      </div>
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
    return {};
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
