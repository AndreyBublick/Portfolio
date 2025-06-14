import React, { FC, useState } from 'react'
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';
import { Bounce, Fade } from 'react-awesome-reveal';

export const Skills: FC = () => {

    const [skills] = useState([
        {id: 'HTML', viewBox: "0 0 120 120", width: 120, height: 120,
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
        },{id:'VS', viewBox:"0 0 112 112", width:112, height:112,},
        {id:'GIT_HUB', viewBox:"0 0 88 86", width:88, height:86,}
    ]);

    return <S.Skills>
        <Container>

            <SectionTitle>Мой Tech Stack</SectionTitle>
            <SectionSubTitle mBottom={'124px'}>Технологии, с которыми я работал</SectionSubTitle>
            <S.SkillsWrapper >
                <Bounce  cascade={true} damping={0.15} triggerOnce={true} /* duration={400} */>
                {skills.map(({height,id,viewBox,width})=> <Skill id={id} height={height} key={id} viewBox={viewBox} width={width} />)}

                </Bounce>
            
           
           
        </S.SkillsWrapper>


    </Container>
    </S.Skills >



}






