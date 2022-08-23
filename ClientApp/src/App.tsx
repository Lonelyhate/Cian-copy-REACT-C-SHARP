import React, { useEffect } from 'react';
import Header from './shared/Header/Header';
import { useDispatch } from 'react-redux';
import { authUser } from './redux/actions/user';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Route, Routes } from 'react-router-dom';
import { HOME_URL, PROFILE_URL } from './types/urls';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authUser());
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={HOME_URL} element={<HomePage />} />
                <Route path={PROFILE_URL + "/*"} element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;
