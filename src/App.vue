<template>
  <modal-user></modal-user>
  <custom-header @change="handleSearch" :count="state.count" />
  <div class="flex justify-center">
    <div class="flex flex-wrap justify-center max-w-5xl px-5 py-10">
      <micro-card
        v-for="(user,index) in store.users"
        :key="index"
        class="mb-10"
        :class="{
          'mr-10': n !== 0,
        }"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { reactive } from "vue";
import CustomHeader from "./components/CustomHeader";
import MicroCard from "./components/MicroCard";
import ModalUser from "./components/ModalUser";
import services from "./services";
import useStore, { setGlobalLoading, setUsers } from "./hooks/store";

export default {
  name: "App",
  components: { CustomHeader, MicroCard, ModalUser },
  setup() {
    const store = useStore();
    const state = reactive({
      count: 0,
    });
    async function handleSearch(searchTerm) {
      setGlobalLoading(true);
      const response = await services.github.searchUsers({ q: searchTerm });
      state.count = response.total_count;
      console.log('Olh')
      const users = response.items.map((item) => ({
        username: item.login,
        photoUrl: item.avatar_url,
      }));
      setUsers(users);
      setGlobalLoading(false);
    }

    return {
      handleSearch,
      state,
      store,
    };
  },
};
</script>
