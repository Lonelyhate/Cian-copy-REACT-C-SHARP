import { IUser } from '../../types/uset';

export interface UserState {
    currentUser: null | IUser;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    FETCH_USER_AUTH = 'FETCH_USER_AUTH',
    LOGOUT_USER = 'LOGOUT_USER',
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: IUser;
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

interface FetchUserAuthAction {
    type: UserActionTypes.FETCH_USER_AUTH;
    payload: IUser;
}

interface FetchUserLogoutAction {
    type: UserActionTypes.LOGOUT_USER;
}

export type UserAction =
    | FetchUserAction
    | FetchUserSuccessAction
    | FetchUserErrorAction
    | FetchUserLogoutAction
    | FetchUserAuthAction;
