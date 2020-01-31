import { put } from 'redux-saga/effects';

import * as ACTION from '../actions';

function* startAuthorizing() {
    yield put({
        type: ACTION.START_AUTHORIZING
    });
}

function* stopAuthorizing() {
    yield put({
        type: ACTION.STOP_AUTHORIZING
    });
}

function* userLoggedIn(userCredentials) {
    yield put({
        type: ACTION.USER_LOGGED_IN,
        payload: userCredentials
    });    
}

function* userFailedToLogIn() {
    yield put({
        type: ACTION.USER_FAILED_TO_LOG_IN        
    });
}