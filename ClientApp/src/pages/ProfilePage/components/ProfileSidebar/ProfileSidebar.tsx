import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileSidebarArray } from '../../../../types/profileSidebar';
import './ProfileSidebar.scss';
import cn from 'classnames';

const ProfileSidebar: FC = () => {
    const path = useLocation().pathname;

    return (
        <aside className="profile-sidebar">
            <ul className="profile-sidebar__list">
                {profileSidebarArray.map((item) => (
                    <li key={item.link} className="profile-sidebar__item">
                        <Link
                            className={cn('profile-sidebar__link', {
                                active: path === item.link,
                            })}
                            to={item.link}>
                            <item.img /> {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default ProfileSidebar;
