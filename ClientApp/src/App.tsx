import React, { useEffect } from 'react';
import Header from './shared/Header/Header';
import { useDispatch } from 'react-redux';
import { authUser } from './redux/actions/user';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authUser());
    }, []);

    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
