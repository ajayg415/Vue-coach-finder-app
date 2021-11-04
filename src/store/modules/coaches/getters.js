export default {
    coaches: (state) => state.coaches,
    hasCoaches: (state) => state.coaches.length > 0,
    isCoach: (_state, getters, _rootState, rootGetters) => {
        const coaches = getters.coaches
        const userId = rootGetters.userId
        return coaches.some(coach => coach.id === userId)
    } 
}