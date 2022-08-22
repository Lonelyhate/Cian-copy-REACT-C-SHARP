import React, { FC } from 'react';
import loaderSvg from "../../assets/img/loader.svg";

interface ILoader {
    width: number
    height: number
}

const Loader: FC<ILoader> = ({height, width}) => {
    return (
        <img width={width} height={height} src={loaderSvg} alt="" />
    );
};

export default Loader;
