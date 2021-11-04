export default {
    registerCoach(context, data) {
        const coachData = {
            id: context.rootGetters.userId || context.rootState.userId,
            firstName: data.first,
            lastName: data.last,
            descriptoion: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        context.commit('registerCoach', coachData)
    }
}