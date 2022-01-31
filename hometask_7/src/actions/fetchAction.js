const addImage = (data) => ({ type: 'ADD_IMAGE', data });

export default function fetchApi() {
    return (dispatch) => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(json => dispatch(addImage(json.message)))
    }
}