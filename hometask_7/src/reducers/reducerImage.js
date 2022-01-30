export default function reducerImage(state, action) {
    switch (action.type) {
        case 'ADD_IMAGE':
            return {...state, state: action.data }
    }
}
// export const addImage = (payload) => ({ type: 'ADD_IMAGE', payload })