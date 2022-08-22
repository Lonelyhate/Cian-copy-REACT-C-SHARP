import React, { FC, useState } from 'react';
import './AuthModal.scss';
import logoImg from '../../../assets/img/home-svgrepo-com.svg';
import { IoMdClose } from 'react-icons/io';
import ButtonGray from '../../ButtonGray/ButtonGray';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { loginUser, registrationUser } from '../../../redux/actions/user';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Loader from '../../Loader/Loader';
import ErrorFiled from '../../ErrorFiled/ErrorFiled';

interface IAuthModal {
    visable: boolean;
    setVisable: (visable: boolean) => void;
}

const AuthModal: FC<IAuthModal> = ({ visable, setVisable }) => {
    const { loading, error } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    const [haveAccount, setHaveAccount] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfrim, setPasswordConfrim] = useState('');

    const closeModal = (): void => {
        setVisable(false);
    };

    const loginHandler = () => {
        if (haveAccount) {
            dispatch(loginUser(email, password))
            error && setVisable(false);
        } else {
            dispatch(registrationUser(email, password, passwordConfrim));
        }
        clearForm()
    
    };

    const clearForm = () => {
        setPassword("")
        setPasswordConfrim("")
        setEmail("")
    }

    return (
        <div
            onClick={closeModal}
            className={cn('auth-modal', {
                active: visable,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="auth-modal__content">
                <button className="auth-modal__close" onClick={closeModal}>
                    <IoMdClose />
                </button>
                <h2 className="auth-modal__title">{haveAccount ? 'Войти' : 'Регистрация'}</h2>
                <img src={logoImg} alt="Logo" className="auth-modal__img" />
                <input
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                    }}
                    type="text"
                    className="auth-modal__input"
                    placeholder="Email"
                />
                <input
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}
                    type={'password'}
                    className="auth-modal__input"
                    placeholder="Пароль"
                />
                {!haveAccount && (
                    <input
                        value={passwordConfrim}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setPasswordConfrim(e.target.value);
                        }}
                        type={'password'}
                        className="auth-modal__input"
                        style={{ marginBottom: loading ? 0 : '' }}
                        placeholder="Подтвердите пароль"
                    />
                )}
                {loading && <Loader height={55} width={55} />}
                {error && <ErrorFiled text={error} fontSize={14} />}
                <ButtonGray
                    marginTop={error ? 12 : 0}
                    onClickVisable={() => {
                        loginHandler();
                    }}
                    padTop={10}
                    padBot={10}
                    width="100%"
                    bacColor="Blue"
                    fontSize={16}
                    text={haveAccount ? 'Войти в акканут' : 'Зарегистрироваться'}
                />
                <button onClick={e => {
                    setHaveAccount(!haveAccount)
                    clearForm()
                }} className="auth-modal__btn-have">
                    {haveAccount ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
