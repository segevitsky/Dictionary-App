import * as actionTypes from '../actions/actionTypes';
import { dictionary } from '../../data';
import { findAnswers } from '../utility';

const dictionaryData = Object.keys(dictionary.data[0])

const initialState = {
    data: dictionaryData,
    answer: {},
    graphData: [],
    input: ''

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_INPUT: 
            return {
                ...state,
                input: action.input
            }    
        
        case actionTypes.SUBMIT_INPUT: 
          const answerObj = findAnswers(state,action)
          return {
              ...state,
              answer: answerObj.answer,
              graphData: answerObj.graphData
          } 
        
        default:
			return state;
    }
}


export default reducer;