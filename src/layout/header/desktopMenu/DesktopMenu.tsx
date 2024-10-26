

import React, { FC } from 'react'
import styled from 'styled-components'
import { Menu } from '../../../components/menu/Menu'

type propsType = {
    links:string[],
};


export const DesktopMenu:FC<propsType> = ({links}) => {
    return (
        <>
            <Menu links={links} />

        </>
    )
}





