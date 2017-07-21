const INITIAL_STATE = 1;
const PAST_COUNTS = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            PAST_COUNTS.push(state);
            return state + 1;
        case 'DECREMENT':
            PAST_COUNTS.push(state);
            return state - 1;
        case 'UNDO':
            if (!PAST_COUNTS.length) { return state; }
        	return PAST_COUNTS.pop();
        default:
            return state;
    }
};
