


import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { theme } from '../../../../../styles/theme';
import { experienceType } from '../../AboutMe';
import { font } from '../../../../../styles/Common';

type propsType = {
    date: experienceType['date'],
    title: experienceType['title'],
    location: experienceType['location'],
    buttonBody: experienceType['buttonBody'],
};


export const Experience: FC<propsType> = ({ date, buttonBody, location, title }) => {
    return (
        <ExperienceStyled>
            <ExperienceHeader gap={10} alignItems={'flex-start'} justifyContent={'space-between'}>
                <ExperienceTitleStyled>{title}</ExperienceTitleStyled>
                <ExperienceButtonStyled>{buttonBody}</ExperienceButtonStyled>
            </ExperienceHeader>



            <ExperienceFooter alignItems={'flex-start'} justifyContent={'space-between'}>
                <FlexWrapper justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} gap={8} >
                    <Item alignItems={'center'} gap={8}><Icon id={'smallBuilding'} width={8} height={10} viewBox={'viewBox="0 0 8 10'} /* color={'transparent'} */ /> <span>{location.building}</span></Item>
                    {location.country !== '' && <Item alignItems={'center'} gap={8}> <Icon id={'map'} viewBox={'0 0 12 12'} width={12} height={12} /><span>{location.country}</span></Item>}
                </FlexWrapper>
                <Item gap={8} alignItems={'center'} justifyContent={'flex-end'}>
                    <Icon id={'date'} viewBox={'0 0 14 12'} width={14} height={12} /> <span>{date}</span>
                </Item>

            </ExperienceFooter>






        </ExperienceStyled>
    )
}

const Item = styled(FlexWrapper)`
svg{
    width:12px;
}
@media ${theme.media.mobile} {
    align-items:flex-start;
}

`;

const ExperienceHeader = styled(FlexWrapper)`
`;
const ExperienceFooter = styled(FlexWrapper)`

  & > ${FlexWrapper}{
   & > ${Item}:nth-of-type(2){
    svg{
        transform:translate(-2px,-0px);
    }
}
}
& > div:first-of-type{
    flex:0 0 50%;

}

@media ${theme.media.mobile} {
    & > ${FlexWrapper}{
    & > ${Item}:first-of-type{
    svg{
        transform:translate(0px,2px);
    }
}
}
}

`;



const ExperienceTitleStyled = styled.h3`

letter-spacing: 1px;

${font({fMax:20, fMin:18, weight:400, color:theme.colors.font})};

margin-bottom:15px;
`;

const ExperienceButtonStyled = styled.button`
font-size: 9px;
font-weight: 600;
line-height: calc(24/9);
padding:0 22px;
white-space:nowrap;

color:${theme.colors.buttonExperience.color};
border-radius:3em;
background-color:${theme.colors.buttonExperience.bg};
`;


const ExperienceStyled = styled.div`

/* width:100%; */


letter-spacing: 1px;
${font({fMax:12, fMin:11, weight:500, color:theme.colors.fontLight})};



padding-bottom:24px;

border-bottom:2px solid ${theme.colors.border};

`;
