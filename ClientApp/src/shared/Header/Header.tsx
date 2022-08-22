import React, { FC, useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from './Nav/Nav';
import './Header.scss';
import ButtonGray from '../ButtonGray/ButtonGray';
import AuthModal from './AuthModal/AuthModal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Header: FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const { isAuth } = useTypedSelector((state) => state.user);

    return (
        <header className="header">
            <div className="header__container container">
                <Logo width={36} height={36} text={18} />
                <Nav />
                <div className="header__right">
                    {isAuth ? (
                        <ProfileMenu />
                    ) : (
                        <ButtonGray
                            bacColor="Gray"
                            text="Войти"
                            fontSize={14}
                            padRight={11}
                            padLeft={11}
                            height={28}
                            onClickVisable={() => {
                                setModalActive(!modalActive);
                            }}
                        />
                    )}
                </div>
            </div>
            <AuthModal visable={modalActive} setVisable={setModalActive} />
        </header>
    );
};

export default Header;
