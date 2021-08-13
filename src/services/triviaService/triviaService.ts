// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';

// INTERFACES
import { IRequestOptionGet } from './../../interfaces/IRequestOptions';

import questions from './mock.json';

// GET QUESTIONS
export async function getQuestions() {

    const requestOptions: IRequestOptionGet = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'opentdb.com' }
    };

    return questions;

    // return await fetch(`http://opentdb.com/api.php?amount=50`, requestOptions).then(handleResponse, handleError);
};