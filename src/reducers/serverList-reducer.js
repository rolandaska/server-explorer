import { GET_SERVERS_LIST_SUCCESS, GET_SERVERS_LIST_FAILURE } from '../actions/types';

const initialState = {
    serversList: [],
    loading: true,
    error: ''
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SERVERS_LIST_SUCCESS:
            return {
                ...state,
                serversList: payload,
                loading: false,
            };
        case GET_SERVERS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
