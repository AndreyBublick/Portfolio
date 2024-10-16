import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/theme';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Skill } from './Skill/Skill';
import { Container } from '../../../components/Container';

export const Skills:FC = () => {
    return <SkillsStyled>
<Container>

        <SectionTitle>My Tech Stack</SectionTitle>
        <SectionSubTitle> Technologies I’ve been working with recently</SectionSubTitle>
        <FlexWrapper justifyContent={'space-between'} gap={105} flexWrap='wrap'>
            <Skill id={'HTML'} viewBox={"0 0 120 120"} width={120} height={120} />
            <Skill id={'CSS'} viewBox={"0 0 120 119"} width={120} height={119} />
            <Skill id={'JS'} viewBox={"0 0 120 120"} width={120} height={120} />
            <Skill id={'REACT'} viewBox={"0 0 113 101"} width={113} height={101} />
            <Skill id={'REDUX'} viewBox={"0 0 105 100"} width={105} height={100} />
            <Skill id={'BOOTSTRAP'} viewBox={"0 0 88 87"} width={88} height={87} />
            <Skill id={'TAILWIND'} viewBox={"0 0 115 69"} width={115} height={69} />
            <Skill id={'SASS'} viewBox={"0 0 117 87"} width={117} height={87} />
            <Skill id={'GIT'} viewBox={"0 0 105 105"} width={105} height={105} />
            <Skill id={'MAN'} viewBox={"0 0 102 120"} width={102} height={120} />
            <Skill id={'VS'} viewBox={"0 0 112 112"} width={112} height={112} />
            <Skill id={'GIT_HUB'} viewBox={"0 0 88 86"} width={88} height={86} />
        </FlexWrapper>


        </Container>
    </SkillsStyled>



}

const SkillsStyled = styled.section`

`;







