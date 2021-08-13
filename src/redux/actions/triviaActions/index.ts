// ACTION TYPES
import * as types from './types';

// SERVICES
import * as triviaService from '../../../services/triviaService/triviaService';

// TYPES
import { Dispatch } from 'redux';

// GET QUESTIONS
export function getQuestionsAction() {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await triviaService.getQuestions()
            .then((response: any) => {
                dispatch(success(response));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_TRIVIA_QUESTIONS_REQUEST } };
    function success(payload: any) { return { type: types.GET_TRIVIA_QUESTIONS_SUCCESS, payload } };
    function failure() { return { type: types.GET_TRIVIA_QUESTIONS_FAILURE } };
};