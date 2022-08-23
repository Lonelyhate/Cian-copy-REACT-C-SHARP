import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import { PROFILE_MY_URL, SVODKA_URL } from '../../types/urls';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
import ProfileSvodka from './components/ProfileSvodka/ProfileSvodka';
import "./ProfilePage.scss"

const ProfilePage = () => {
    const location = useLocation();
    let path = location.pathname;
    let Component;

    switch (path) {
        case PROFILE_MY_URL:
            Component = ProfileInfo;
            break;
        case SVODKA_URL:
            Component = ProfileSvodka;
            break;
        default:
            Component = null;
    }

    return (
        <div className="profile-page">
            <div className="profile-page__container container">
                <ProfileSidebar />
                {Component && <Component />}
            </div>
        </div>
    );
};

export default ProfilePage;
