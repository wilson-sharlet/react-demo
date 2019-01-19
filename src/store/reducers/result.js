import * as actions from '../actions';
import { Map } from 'immutable';

const initialState = Map({
    result: null
})

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.STORE_RESULT:
            return state.set('result', action.result);
    }
    return state;
}

export default reducer;