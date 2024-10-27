


import React, { FC, useState } from 'react'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionSubTitle } from '../../../components/SectionSubTitle'
import { Menu } from '../../../components/menu/Menu'
import { Work } from './work/Work'

import image1 from '../../../assets/images/6.webp';
import { S } from './MyWorks_Styles'


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



    return <S.MyWorks>
        <Container>
        <SectionTitle>My Works</SectionTitle>
        <SectionSubTitle>My Works</SectionSubTitle>
            <S.MenuBody>
                <Menu activeElement = {'all'} fz={'14px'} links={['All', 'landing page', 'React', 'spa']} />

            </S.MenuBody>
            <S.Works flexWrap={'wrap'} gap={60} >
                {workArray.map(({description,image,title},i)=> <Work key={i} image={image} description={description} title={title} />)}
            </S.Works>


        </Container>
    </S.MyWorks>

}
