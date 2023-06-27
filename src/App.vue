<template>
  <div>
    <v-table
      :users_data="USERS"
    />
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import VTable from "@/components/Table/v-table.vue";

export default {
  name: 'App',
  components: {
    VTable
  },

  methods: {
    ...mapActions({
      GET_USERS: "users/GET_USERS"
    })
  },
  computed: {
    ...mapGetters({
      USERS: "users/USERS"
    })
  },

  mounted() {
    this.GET_USERS()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
