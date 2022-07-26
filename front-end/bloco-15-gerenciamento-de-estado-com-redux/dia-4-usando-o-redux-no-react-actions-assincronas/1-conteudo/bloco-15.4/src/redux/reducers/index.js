import {  NEW_ACTION } from '../actions'

const INITIAL_STATE = {
    firstState: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_ACTION:
            return [...state.firstState, action.payload];
        default:
            return state;
    }
}

export default reducer;
