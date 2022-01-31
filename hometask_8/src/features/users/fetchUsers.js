export function getUsers(data) {
    return {
        type: 'GET_USERS',
        name: data.name,
        gender: data.gender,
        age: data.age,
        email: data.email,
        picture: data.picture
    };
}

export function fetchUsers() {
    return dispatch => {
        fetch('https://randomuser.me/api/')
            .then(response => {
                const data = response.json();
                dispatch(getUsers(data));
            })
    };
}