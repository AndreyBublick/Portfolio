


import React, { FC, useState } from 'react'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionSubTitle } from '../../../components/SectionSubTitle'
import styled from 'styled-components'
import { Menu } from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'

import image1 from '../../../assets/images/6.webp';
import { theme } from '../../../styles/theme'


export const MyWorks:FC = () => {

    
    const [workArray, setWorkArray] = useState([
        {
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image1,
        },
        {
            title: 'Project Tile goes here',
            description: 'This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image1,
        },
       

    ]);



    return <MyWorksStyled>
        <Container>
        <SectionTitle>My Works</SectionTitle>
        <SectionSubTitle>My Works</SectionSubTitle>
            <MenuBody>
                <Menu activeElement = {'all'} fz={'14px'} links={['All', 'landing page', 'React', 'spa']} />

            </MenuBody>
            <Works flexWrap={'wrap'} gap={60} >
                {workArray.map(({description,image,title})=> <Work image={image} description={description} title={title} />)}
            </Works>


        </Container>
    </MyWorksStyled>

}
const Works = styled(FlexWrapper)`


@media ${theme.media.tablet} {
    gap:30px;
    justify-content:center;
}
`;




const MenuBody = styled.div`
display:flex;
justify-content:center;
margin-bottom:30px;
ul{
    gap:25px;
}
li{
    text-transform:uppercase;
}


`;

const MyWorksStyled = styled.section`



`;