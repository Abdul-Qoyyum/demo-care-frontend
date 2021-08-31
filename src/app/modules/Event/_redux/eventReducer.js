import {
    FETCH_EVENT_TYPE_SUCCESSFUL,
    FETCH_MONTHS_SUCCESSFUL,
    FETCH_EVENTS_SUCCESSFUL,
    APPLIED_FILTER_SUCCESSFUL,
    START_LOADING,
    STOP_LOADING
} from '../types';


//initialize the default state
const defaultState = {
    filter: {
        month: null,
        event_type: null
    },
    event_types: [],
    events: [
        {
            "event_type": null,
            "month": null,
            "day": null,
            "total": null,
            "date": null
        },
    ],
    months: [],
    loading: false
}


export const eventReducer = (state = defaultState, action = {}) => {
    switch (action.type){
        case START_LOADING:
            return { ...state, loading: true}
        case STOP_LOADING:
            return { ...state, loading: false}
        case FETCH_EVENT_TYPE_SUCCESSFUL:
            return { ...state, event_types: action.payload }
        case FETCH_MONTHS_SUCCESSFUL:
            return { ...state, months: action.payload}
        case FETCH_EVENTS_SUCCESSFUL:
            return { ...state, events: action.payload}
        case APPLIED_FILTER_SUCCESSFUL:
            return { ...state, filter : { ...state.filter, ...action.payload}}
        default:
            return state;
    }
}