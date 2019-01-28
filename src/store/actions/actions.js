export const INCREMENT = 'INCREMENT';
export const ADD = 'ADD';
export const STORE_RESULT = 'STORE_RESULT';
export const TEST = 'TEST';

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const add = (payload) => {
    return {
        type: ADD,
        payload,
    }
}

export const storeResult = (result) => {
    return {
        type: STORE_RESULT,
        result,
    }
}

export const test = () => {
    return {
        type: TEST,
    }
}

export const saveResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log('getState().coun.counter',getState().get('coun').get('counter'))
            dispatch(storeResult(result));
        }, 2000)
    }
}