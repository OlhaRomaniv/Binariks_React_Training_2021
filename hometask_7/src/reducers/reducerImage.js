export default function reducerImage(state, action) {
    switch (action.type) {
        case 'ADD_IMAGE':
            return action.data
        default:
            return state
    }
}