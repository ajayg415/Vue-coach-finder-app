// export default {
//     requests(state) {
//         return state.requests
//     },
//     hasReqests(state) {
//         return state.requests.length > 0
//     }
// }

export default {
    requests(state, _getters, _rootState, rootGetters) {
      const coachId = rootGetters.userId;
      return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_state, getters) {
      return getters.requests && getters.requests.length > 0;
    }
  };