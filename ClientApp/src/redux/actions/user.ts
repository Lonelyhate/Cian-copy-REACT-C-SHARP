import axios from 'axios';
import { Dispatch } from 'react';
import { IError } from '../../types/error';
import { UserAction, UserActionTypes } from '../types/user';

export const loginUser = (email: string, password: string) : any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });

            const response = await axios.post('https://localhost:7021/api/account/login', {
                email,
                password,
            });

            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: response.data.data.user,
            });
            localStorage.setItem("token", response.data.data.token)
        } catch (e) {
            localStorage.removeItem("token")
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const registrationUser = (email: string, password: string, confrimedPassword: string) : any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios.post("https://localhost:7021/api/account/registration", {
                email, password, confrimedPassword
            })
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: response.data.data.user
            })
            localStorage.setItem("token", response.data.data.token)
        } catch(e) {
            localStorage.removeItem("token")
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    }
};

export const authUser = () : any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios.get("https://localhost:7021/api/account/auth",{
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            });
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: response.data.data.user
            })
            localStorage.setItem("token", response.data.data.token)
        } catch (e) {
            localStorage.removeItem("token")
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response?.data?.message,
            });
        }
    };
}

export const logoutUser = () : any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            localStorage.removeItem('token');
            dispatch({type: UserActionTypes.LOGOUT_USER})
        } catch (e) {
            localStorage.removeItem("token")
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
}
