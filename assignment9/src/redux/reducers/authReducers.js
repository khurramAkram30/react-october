

const reducer = (state = {}, action) => {
    switch(action.type) {
        case "Update_User": {
            return {...state, user: action.user}
        }
        case "Remove_User": {
            return {...state, user: null}
        }
        default: {
            return state;
        }
    }
}

export default reducer