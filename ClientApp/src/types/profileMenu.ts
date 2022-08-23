import { Url } from "url";
import { UrlsEnum } from "./urls";

export enum ProfileMenuName {
    PROFILE = 'Личный кабинет',
    PLACE_AN_AD = 'Разместить объявление',
    IPOTEKA = 'Ипотека',
    HELP_CENTER = 'Справочный центр',
}

export type ProfileMenuType = {
    name:
        | ProfileMenuName.PROFILE
        | ProfileMenuName.PLACE_AN_AD
        | ProfileMenuName.IPOTEKA
        | ProfileMenuName.HELP_CENTER;
    link: 
        | UrlsEnum.PROFILE
        | UrlsEnum.PLACE_AN_AD
        | UrlsEnum.IPOTEKA
        | UrlsEnum.HELP_CENTER
        | UrlsEnum.SVODKA
};

export const profileMenuArray: ProfileMenuType[] = [
    {
        name: ProfileMenuName.PROFILE,
        link: UrlsEnum.SVODKA,
    },
    {
        name: ProfileMenuName.PLACE_AN_AD,
        link: UrlsEnum.PLACE_AN_AD,
    },
    {
        name: ProfileMenuName.IPOTEKA,
        link: UrlsEnum.IPOTEKA,
    },
    {
        name: ProfileMenuName.HELP_CENTER,
        link: UrlsEnum.HELP_CENTER,
    },
];
