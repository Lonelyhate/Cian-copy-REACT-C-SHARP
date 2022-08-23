import React, { FC } from 'react';
import HomeFilter from './components/HomeFilter/HomeFilter';
import './HomePage.scss';

const HomePage: FC = () => {
    return (
        <div className="home-page">
            <HomeFilter />
        </div>
    );
};

export default HomePage;
