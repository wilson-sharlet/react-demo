const initialState = {
    counter: 4,
    result: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        case 'STORE_RESULT':
            return {
                ...state,
                result: action.result,
            }
    }
    return state;
}

export default reducer;