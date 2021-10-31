<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  >
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :rate="coach.hourlyRate"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  components: {
    CoachItem,
    BaseButton,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"].filter((coach) => {
        console.log(coach);
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>