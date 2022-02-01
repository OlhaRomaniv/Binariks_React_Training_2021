import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

const initialState = {
    users: [],
    error: ''
}

export default function reducerUsers(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}