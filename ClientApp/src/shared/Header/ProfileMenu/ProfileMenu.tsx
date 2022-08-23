import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import avatarEmpty from '../../../assets/img/avatar.gif';
import { loginUser, logoutUser } from '../../../redux/actions/user';
import { profileMenuArray } from '../../../types/profileMenu';
import './ProfileMenu.scss';
import cn from "classnames"

const ProfileMenu: FC = () => {
    const dispatch = useDispatch()
    const [visable, setVisable] = useState<boolean>(false);

    return (
        <div className="profile-menu">
            <img src={avatarEmpty} alt="avatar" onClick={e => setVisable(!visable)} />
            <ul className={cn("profile-menu__list", {
                active: visable
            })}>
                {profileMenuArray.map((item) => (
                    <li key={item.link} className="profile-menu__item">
                        <Link className="profile-menu__link" to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
                <li className="profile-menu__item">
                    <button onClick={e => dispatch(logoutUser())} className="profile-menu__link profile-menu__logout">Выйти</button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
