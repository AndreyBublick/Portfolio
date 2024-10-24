import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/theme';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Skill } from './Skill/Skill';
import { Container } from '../../../components/Container';

export const Skills: FC = () => {

    const [skills, setSkills] = useState([
        {
            id: 'HTML', viewBox: "0 0 120 120", width: 120, height: 120,
        },
        {id:'CSS', viewBox:"0 0 120 119", width:120, height:119,
        },
        {id:'JS', viewBox:"0 0 120 120", width:120, height:120,
        },
        {id:'REACT', viewBox:"0 0 113 101", width:113, height:101,
        },
        {id:'REDUX', viewBox:"0 0 105 100", width:105, height:100,
        },
        {id:'BOOTSTRAP', viewBox:"0 0 88 87", width:88, height:87,
        },
        {id:'TAILWIND', viewBox:"0 0 115 69", width:115, height:69,
        },
        {id:'SASS', viewBox:"0 0 117 87", width:117, height:87,
        },
        {id:'GIT', viewBox:"0 0 105 105", width:105, height:105,
        },
        {id:'MAN', viewBox:"0 0 102 120", width:102, height:120, 
        },{id:'VS', viewBox:"0 0 112 112", width:112, height:112,},{id:'GIT_HUB', viewBox:"0 0 88 86", width:88, height:86,}]);

    return <SkillsStyled>
        <Container>

            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionSubTitle> Technologies I’ve been working with recently</SectionSubTitle>
            <SkillsWrapper>
            {skills.map(({height,id,viewBox,width})=> <Skill id={id} height={height} key={id} viewBox={viewBox} width={width} />)};
            
           
           
        </SkillsWrapper>


    </Container>
    </SkillsStyled >



}

const SkillsStyled = styled.section`

`;
const SkillsWrapper = styled.div`
display:grid;
gap:80px;
justify-items:center;
align-items:center;
grid-template-columns:repeat(auto-fill,minmax(120px,1fr));
`;







