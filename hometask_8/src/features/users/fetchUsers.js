import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
}

export function fetchUsersFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
}

export function fetchByMale() {
    return dispatch => {
        fetch('https://randomuser.me/api/?results=50&gender=male')
            .then(response => response.json())
            .then(users => dispatch(fetchUsersSuccess(users.results)))
            .catch(error => {
                dispatch(fetchUsersFailure(error))
            })
    };
}

export function fetchByFemale() {
    return dispatch => {
        fetch('https://randomuser.me/api/?results=50&gender=female')
            .then(response => response.json())
            .then(users => dispatch(fetchUsersSuccess(users.results)))
            .catch(error => {
                dispatch(fetchUsersFailure(error))
            })
    };
}