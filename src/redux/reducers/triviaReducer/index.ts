// ACTION TYPES
import * as types from "../../actions/triviaActions/types";

// UTILS
import { capitalize, renamingText } from "../../../utils/renamingUtils";

// INTERFACES
import { IQuestion } from "../../../interfaces/IQuestion";

const initialState = {};

export default function triviaReducer(state = initialState, action: any) {
    switch (action.type) {
        // GET QUESTIONS
        case types.GET_TRIVIA_QUESTIONS_REQUEST:
            return { ...state, gettingQuestions: true };
        case types.GET_TRIVIA_QUESTIONS_SUCCESS:
            const triviaQuestions = action.payload;
            // SAVE THE CORRECT ORDER COLLECTION
            let questions: IQuestion[] = [];
            if (triviaQuestions?.length > 0) {
                triviaQuestions.map((question: any, index: number) => {
                    const updatedItem: IQuestion = {
                        id: index + 1,
                        category: question.category,
                        type: renamingText(question.type),
                        difficulty: capitalize(question.difficulty),
                        question: question.question,
                        answer: question.correct_answer,
                    };
                    return (questions = [...questions, updatedItem]);
                });
            };
            return {
                ...state,
                gettingQuestions: false,
                triviaQuestions: questions,
            };
        case types.GET_TRIVIA_QUESTIONS_FAILURE:
            return { ...state, gettingQuestions: false };

        default:
            return { ...state };
    }
};