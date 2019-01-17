const redux = require('redux');

const initialState = {
    counter: 0,
    result: null,
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }
    if (action.type === 'STORE_RESULT') {
        return {
            ...state,
            result: state.counter
        }
    }
    return state;
};

// Store
const store = redux.createStore(rootReducer);

console.log('111111111111', store.getState());
// Subscription
store.subscribe(() => {
    console.log('Subscription: ');
    console.log(store.getState());
});
// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log('222222222', store.getState());


