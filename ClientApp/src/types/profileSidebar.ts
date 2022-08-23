import { UrlsEnum } from './urls';
import { RiHome2Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

export enum ProfileSidebarName {
    SVODKA = 'Сводка',
    PROFILE_MY = 'Профль',
    FAVORITES = 'Избранное',
}

export type PorfileSidebarType = {
    name: ProfileSidebarName.SVODKA | ProfileSidebarName.PROFILE_MY | ProfileSidebarName.FAVORITES;
    link: UrlsEnum.SVODKA | UrlsEnum.PROFILE_MY | UrlsEnum.FAVORITES;
    img: any;
};

export const profileSidebarArray: PorfileSidebarType[] = [
    {
        name: ProfileSidebarName.SVODKA,
        link: UrlsEnum.SVODKA,
        img: RiHome2Line,
    },
    {
        name: ProfileSidebarName.PROFILE_MY,
        link: UrlsEnum.PROFILE_MY,
        img: AiOutlineUser,
    },
    {
        name: ProfileSidebarName.FAVORITES,
        link: UrlsEnum.FAVORITES,
        img: FiHeart,
    },
];
