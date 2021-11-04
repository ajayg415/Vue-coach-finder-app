import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    nameSpaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations,
    actions,
    getters
}