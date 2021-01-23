<template>
  <div>
    <p class="text-4xl my-2 font-bold antialiased tracking-wide text-primary">Check out my cards</p>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-10">
      <li :key="card.name" v-for="card in cards">
        <img
          class="rounded-2xl w-full h-36 md:w-full md:h-72"
          :src="card.link"
          alt=""
        />
        <div class="flex md:justify-between my-4 p-2">
          <p class="w-2/4 overflow-ellipsis overflow-hidden text-xl text-primary font-bold">
            {{ card.name }}
          </p>
          <button
            v-on:click="clicked"
            class="self-center bg-cover bg-no-repeat w-7 h-7"
            v-bind:class="[clicked ? 'bg-notfilled' : 'bg-filled']"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions

export default {
  data: () => ({
    isClicked: true,
    showModal: false,
  }),
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
  },
  methods: {
    // this is not working why?
    clicked() {
      if (this.isClicked) {
        this.isClicked = false;
      }
      console.log(this.isClicked);
    },
  },
};
</script>
