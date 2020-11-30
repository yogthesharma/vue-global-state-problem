<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ name }}</h1>
    <button @click="checkVal()">Check Val</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "About",

  setup() {
    const store = useStore();

    const name = computed(() => console.log(store.state.id));

    function checkVal() {
      console.log(store.state.id);
    }

    return {
      name,
      checkVal,
    };
  },
};
</script>
