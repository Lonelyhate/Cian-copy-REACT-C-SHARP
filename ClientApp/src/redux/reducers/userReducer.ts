import { UserActionTypes, UserState, UserAction } from "../types/user";

const initialState: UserState = {
    currentUser: null,
    error: null,
    isAuth: false,
    loading: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_USER:
            return {
                ...state,
                error: null,
                loading: true
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                isAuth: true,
                currentUser: action.payload
            }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case UserActionTypes.FETCH_USER_AUTH:
            return {
                ...state,
                error: null,
                isAuth: true,
                currentUser: action.payload,
                loading: false
            }
        case UserActionTypes.LOGOUT_USER:
            localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                currentUser: null,
                isAuth: false
            }
        default:
            return state;
    }
}