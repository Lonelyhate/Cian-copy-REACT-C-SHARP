import { UrlsEnum } from "./urls"

export enum MenuName {
    ARENDA = "Аренда",
    SEL = "Продажа"
}

export type MenuType = {
    name: MenuName.ARENDA | MenuName.SEL
    link: UrlsEnum.ARENDA | UrlsEnum.SEL
}

export const MenuArray : MenuType[] = [
    {
        name: MenuName.ARENDA,
        link: UrlsEnum.ARENDA
    },
    {
        name: MenuName.SEL,
        link: UrlsEnum.SEL
    }
]