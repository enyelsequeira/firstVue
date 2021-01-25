  <section
    class="h-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>

  <div class="absolute inset-0">
    <div class="flex h-full">
      <div
        class="m-auto bg-primary opacity-95 p-3  rounded-l-lg shadow-md w-1/3"
      >
        <p class="text-5xl text-span my-6  text-center" >{{ title }}</p>
        <form class="flex flex-col w-10/12 m-auto p-2">
          <slot></slot>
          <button class="my-4 border-2 text-2xl">{{ button }}</button>
          <button @click="$emit('close-login')" class="my-4 border-2 text-2xl">
            Close
          </button>
        </form>
      </div>
    </div>
  </div>