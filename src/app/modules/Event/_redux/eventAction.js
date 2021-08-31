import axios from "axios";
import env from "react-dotenv";

import {
    FETCH_EVENT_TYPE_SUCCESSFUL,
    FETCH_MONTHS_SUCCESSFUL,
    FETCH_EVENTS_SUCCESSFUL,
    APPLIED_FILTER_SUCCESSFUL,
    START_LOADING,
    STOP_LOADING
} from '../types';

const API_URL = `${env.API_URL}`;

export const getEventTypes = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/event-type`).then(res => {
            dispatch({
               type : FETCH_EVENT_TYPE_SUCCESSFUL,
               payload : res.data.data
            });
        }).catch(err => err);
    }
}

export const getMonths = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/months`).then(res => {
            dispatch({
                type: FETCH_MONTHS_SUCCESSFUL,
                payload: res.data.data
            })
        }).catch(err => err);
    }
}

export const getEvents = (filter) => {
    const { month, event_type } = filter;
    return (dispatch) => {
        dispatch({ type: START_LOADING})
        return axios.get(`${API_URL}/events/${month}/${event_type}`,{...filter}).then(res => {
            dispatch({
                type: FETCH_EVENTS_SUCCESSFUL,
                payload: res.data.data
            })
            //stop loading
            dispatch({ type: STOP_LOADING})
            //update filter parameters in redux store
            dispatch({
               type : APPLIED_FILTER_SUCCESSFUL,
               payload : filter
            });
        }).catch(err => {
            //stop loading
            dispatch({ type: STOP_LOADING})
        });
    }
}