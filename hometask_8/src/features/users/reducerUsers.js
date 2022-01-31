const initialState = {
    name: "",
    gender: "",
    age: 0,
    email: "",
    picture: null
}

export default function reducerImage(state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, state: action.data }
    }
}