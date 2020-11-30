<template>
  <div class="home">
    These are the name of the users.
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link
          @click="make(user.id)"
          :to="{ name: 'User', params: { id: user.id } }"
          >{{ user.username }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
// @ is an alias to /src
import { useStore } from "vuex";
import axios from "axios";

export default {
  name: "Home",

  setup() {
    const store = useStore();
    var users = ref();

    onMounted(async () => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          users.value = response.data;
          console.log(users);
        })
        .catch((err) => console.log(err.data));
    });

    async function make(id) {
      await store.dispatch("changeUser", id);
    }

    return {
      make,
      users,
    };
  },
};
</script>
