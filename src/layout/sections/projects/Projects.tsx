


import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import image1 from '.././../../assets/images/1.webp';
import image2 from '.././../../assets/images/2.webp';
import image3 from '.././../../assets/images/3.webp';
import image4 from '.././../../assets/images/4.webp';
import image5 from '.././../../assets/images/5.webp';
import image6 from '.././../../assets/images/6.webp';
import { theme } from '../../../styles/theme';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';





export const Projects: FC = () => {

    const [projectsArray,setProjectsArray] = useState([
        {
            title:'Project Tile goes here',
            description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image:image1,
        },
        {
            title:'Project Tile goes here',
            description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image:image2,
        },
        {
            title:'Project Tile goes here',
            description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image:image3,
        },
        {
            title:'Project Tile goes here',
            description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image:image4,
        },
        {
            title:'Project Tile goes here',
            description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image:image5,
        },
        {
            title:'Project Tile goes here',
            description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image:image6,
        },
      
    ]);

    return <ProjectsStyled>

        <SectionTitle>Projects</SectionTitle>
        <SectionSubTitle>Things I’ve built so far</SectionSubTitle>

        <FlexWrapper justifyContent={'space-between'} flexWrap={'wrap'} gap={34}>

            
            {projectsArray.map(({title,description,image}) => <Project key={image} title={title} description={description} image={image} /> )}

        </FlexWrapper>
    </ProjectsStyled>

}



const ProjectsStyled = styled.section`
max-width:${theme.container.width};
width:100%;
padding:0 ${theme.container.leftAndRight};
margin: 0 auto;
`;



