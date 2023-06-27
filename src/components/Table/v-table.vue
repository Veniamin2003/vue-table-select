<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">Name
        <span class="material-symbols-outlined">
          unfold_more
        </span>
      </p>
      <p @click="sortByPointsEarned">Points earned
        <span class="material-symbols-outlined">
          unfold_more
        </span>
      </p>
      <p @click="sortByPointsSpent">Points spent
        <span class="material-symbols-outlined">
          unfold_more
        </span>
      </p>
      <p @click="sortByRegDate">Registration date
        <span class="material-symbols-outlined">
          unfold_more
        </span>
      </p>
    </div>
    <div class="v-table__body">
      <v-table-row
        v-for="user in paginatedUsers"
        :row_data="user"
        :key="user.id"
      />
    </div>
    <div class="v-table__pagination">
      <div class="page"
           :class="{'page__selected': page === pageNumber}"
           v-for="page in pages"
           :key="page"
           @click="pageClick(page)"
      >
        {{page}}
      </div>
    </div>
  </div>
</template>

<script>
import VTableRow from "@/components/Table/v-table-row.vue";

export default {
  name: "v-table",
  components: {VTableRow},
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      usersPerPage: 4,
      pageNumber: 1
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      // eslint-disable-next-line vue/no-mutating-props
      this.users_data.sort((a,b) => a.name.localeCompare(b.name));
    },
    sortByPointsEarned() {
      // eslint-disable-next-line vue/no-mutating-props
      this.users_data.sort((a,b) => a.points_earned - b.points_earned);
    },
    sortByPointsSpent() {
      // eslint-disable-next-line vue/no-mutating-props
      this.users_data.sort((a,b) => a.points_spent - b.points_spent);
    },
    sortByRegDate() {
      // eslint-disable-next-line vue/no-mutating-props
      this.users_data.sort((a,b) => a.registration_date.localeCompare(b.registration_date));
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / this.usersPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    },

  }
}
</script>

<style lang="scss">
.v-table {
  max-width: 900px;
  margin: 0 auto;
}
  .v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e7e7e7
  }
.v-table__header p {
  display: flex;
  align-items: center;
  flex-basis: 25%;
  text-align: left;
}

.v-table__header span {
  margin-left: 10px;
  cursor: pointer;
}
.v-table__pagination {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  border: 1px solid black;
  margin: 0 5px 0;
  padding: 8px;
  transition: 300ms;
  cursor: pointer;
}
.page:hover {
  background: teal;
  color: white;
}
.page__selected {
  background: teal;
  color: white;
}
</style>