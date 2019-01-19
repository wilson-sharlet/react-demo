import * as actions from '../actions';
import { Map } from 'immutable';

const initialState = Map({
    counter: 4,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            return state.set('counter', state.get('counter') + 1)
        case actions.ADD:
            return state.set('counter', state.get('counter') + action.payload)
    }
    return state;
}

export default reducer;