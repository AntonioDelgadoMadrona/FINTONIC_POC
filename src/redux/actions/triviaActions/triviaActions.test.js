// DEPENDENCIES
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

// ACTIONS
import * as actions from './index';
import * as triviaService from '../../../services/triviaService/triviaService';

import mockRes from '../../../services/triviaService/mock.json';

// CONFIG
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
console.error = jest.fn();

describe('getQuestionsAction', () => {

    let store;
    beforeEach(() => {
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    test('should complete successfully', async () => {

        const response = [...mockRes];

        fetchMock.mock(triviaService.getQuestions(), response);

        const expectedActions = [
            { type: 'GET_TRIVIA_QUESTIONS_REQUEST' },
            { type: 'GET_TRIVIA_QUESTIONS_SUCCESS', payload: response },
        ];

        await store.dispatch(actions.getQuestionsAction())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

    test('should throw an error', async () => {

        const error = new Error();

        fetchMock.mock(triviaService.getQuestions(), { throws: error });

        const expectedActions = [
            { type: 'GET_TRIVIA_QUESTIONS_REQUEST' },
            { type: 'GET_TRIVIA_QUESTIONS_FAILURE' },
        ];

        await store.dispatch(actions.getQuestionsAction())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

});