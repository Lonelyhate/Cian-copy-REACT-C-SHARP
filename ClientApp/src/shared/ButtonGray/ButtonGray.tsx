import React, { FC } from 'react';
import "./ButtonGray.scss"
import cn from "classnames";

interface IButtonGray {
    text: string;
    fontSize: number;
    marginTop?: number
    width?: string | number;
    height?: string | number;
    padTop?: string | number;
    padBot?: string | number;
    padRight?: string | number;
    padLeft?: string | number;
    bacColor: 'Gray' | 'Blue';
    borderRadius?: string | number;
    onClickVisable?: () => void;
}

const ButtonGray: FC<IButtonGray> = ({
    text,
    height,
    width,
    padBot,
    padLeft,
    padRight,
    padTop,
    fontSize,
    bacColor,
    borderRadius,
    onClickVisable,
    marginTop
}) => {

    const clName = "btn-gray" + (bacColor === "Gray" ? " btn-gray-gray" : " btn-gray-blue")
    return (
        <button onClick={(e) => {
            onClickVisable && onClickVisable();
        }}
            style={{
                marginTop: marginTop,
                width: width,
                height: height,
                paddingBottom: padBot,
                paddingLeft: padLeft,
                paddingRight: padRight,
                paddingTop: padTop,
                fontSize: fontSize,
                borderRadius: borderRadius,
            }}
            className={clName}>
            {text}
        </button>
    );
};

export default ButtonGray;
