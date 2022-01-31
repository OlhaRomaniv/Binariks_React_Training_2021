export default function reducerImage(state = null, action) {
    switch (action.type) {
        case 'ADD_IMAGE':
            return action.data
    }
}