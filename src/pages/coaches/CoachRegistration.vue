<template>
  <section>
    <base-card>
      <h2>Register a coach now!</h2>
      <CoachForm @save-data="saveData"/>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
export default {
  components: {
    CoachForm,
    BaseCard,
  },
  
  methods: {
    saveData(data){
      this.$store.dispatch('coaches/registerCoach', data)
      this.$router.replace('/coaches')
    }
  }
};
</script>