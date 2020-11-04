import * as actionTypes from './actionTypes';

export const saveInput = (input) => {
    return {
        type: actionTypes.SAVE_INPUT,
        input
    }
}



export const sendData = (input) => {
    return {
        type: actionTypes.SUBMIT_INPUT,
        input
    }
}