

import React, { FC } from 'react'

import { Menu } from '../../../../components/menu/Menu';


type propsType = {
    links:string[],
};


export const DesktopMenu:FC<propsType> = ({links}) => {
    return (
        <>
            <Menu scrollTop links={links} />

        </>
    )
}





