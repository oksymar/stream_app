import {ADD_MESSAGE, SIGN_IN} from "../actions/types";

const INITIAL_STATE = [
        // {
        //     user: "blabla",
        //     message: "asdfc4"
        // },
        // {
        //     user: "blabla1",
        //     message: "asdfc4"
        // },
        // {
        //     user: "blabla2",
        //     message: "asdfc4"
        // },
        // {
        //     user: "blabla3",
        //     message: "asdfc4"
        // }
    ];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
};