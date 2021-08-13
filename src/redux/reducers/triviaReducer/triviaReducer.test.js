// REDUCER
import triviaReducer, { initialState } from './index';

// TYPES
import * as types from '../../actions/triviaActions/types';

// LOGIN
describe('GET QUESTIONS', () => {

    test('should work GET_TRIVIA_QUESTIONS_REQUEST', () => {
        const reducer = triviaReducer(initialState, { type: types.GET_TRIVIA_QUESTIONS_REQUEST });
        expect(reducer).toEqual({ ...initialState, gettingQuestions: true });
    });

    test('should work GET_TRIVIA_QUESTIONS_SUCCESS', () => {
        const mockAction = {
            type: types.GET_TRIVIA_QUESTIONS_SUCCESS,
            payload: [
                {
                    category: "Sports",
                    type: "multiple",
                    difficulty: "hard",
                    question: "Which English football team is nicknamed &#039;The Tigers&#039;?",
                    correct_answer: "Hull City",
                    incorrect_answers: ["Cardiff City", "Bristol City", "Manchester City"]
                }
            ]
        };

        const reducer = triviaReducer(initialState, mockAction);
        const expectedState = {
            ...initialState,
            triviaQuestions: [
                {
                    id: 1,
                    category: "Sports",
                    type: "Multiple Choice",
                    difficulty: "Hard",
                    question: "Which English football team is nicknamed &#039;The Tigers&#039;?",
                    answer: "Hull City",
                }
            ],
            gettingQuestions: false,
        };
        expect(reducer).toEqual(expectedState);
    });

    // test('should work LOGIN_FAILURE', () => {
    //     const reducer = triviaReducer(initialState, { type: types.LOGIN_FAILURE });
    //     expect(reducer).toEqual({ ...initialState, loggingIn: false });
    // });

});