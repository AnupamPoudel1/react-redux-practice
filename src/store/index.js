import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
    // always should be synchronous function
    // we should not mutate the original state

    if (action.type === 'INC') {
        return { counter: state.counter + 1 };
    }
    if (action.type === 'DEC') {
        if (state.counter !== 0) {
            return { counter: state.counter - 1 };
        }
    }
    if (action.type === 'AB') {
        return { counter: state.counter + action.payload };
    }
    if (action.type === 'SB') {
        if (state.counter >= 10) {
            return { counter: state.counter - action.payload };
        }
    }

    return state;
}

const store = createStore(reducerFn);

export default store;