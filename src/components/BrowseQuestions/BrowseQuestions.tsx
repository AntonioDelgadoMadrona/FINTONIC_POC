// DEPENDENCIES
import { memo, useEffect, useState } from "react";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import { getQuestionsAction } from "../../redux/actions/triviaActions";

// COMPONENTS
import { Table } from "../common/Table/Table";

// UTILS
import { splitArray } from "../../utils/arrayUtils";

// INTERFACES 
import { IQuestion } from "../../interfaces/IQuestion";

// STYLES
import { Container } from "./styled";

interface IProps {
    getQuestionsAction(): void;
    triviaQuestions: IQuestion[];
}

interface IState {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    items: any[];
};

const headersList = [
    "ID",
    "Category",
    "Type",
    "Difficulty",
    "Question / Statement",
    "Answer",
];

const BrowseQuestions = memo<IProps>(
    ({ getQuestionsAction, triviaQuestions }) => {
        const initialState: IState = {
            currentPage: 1,
            totalPages: 1,
            itemsPerPage: 10,
            totalItems: 50,
            items: [],
        };

        const [state, setState] = useState<IState>(initialState);

        useEffect(() => {
            getQuestionsAction();
        }, [getQuestionsAction]);

        useEffect(() => {
            if (triviaQuestions?.length > 0) {
                const items = splitArray(triviaQuestions, 10);
                setState((prevState) => ({
                    ...prevState,
                    currentPage: 1,
                    totalPages: items.length,
                    totalItems: triviaQuestions.length,
                    items: [...items],
                }));
            }
        }, [triviaQuestions]);

        return (
            <Container>
                <h2>Browse Questions</h2>
                <Table
                    headers={headersList}
                    items={state.items[state.currentPage - 1]}
                    page={{
                        currentPage: state.currentPage,
                        totalPages: state.totalPages,
                        itemsPerPage: state.itemsPerPage,
                        totalItems: state.totalItems,
                    }}
                    handlePage={(page: number) => setState(prevState => ({ ...prevState, currentPage: page }))}
                />
            </Container>
        );
    }
);

const mapState = (state: RootStateOrAny) => {
    const { triviaReducer } = state;
    return {
        triviaQuestions: triviaReducer?.triviaQuestions
    };
};

const mapDispatch = {
    getQuestionsAction,
};

export { BrowseQuestions };

const BrowseQuestionsContainer = connect(
    mapState,
    mapDispatch
)(BrowseQuestions);

export default BrowseQuestionsContainer;
