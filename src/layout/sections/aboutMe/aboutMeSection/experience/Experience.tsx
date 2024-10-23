


import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { theme } from '../../../../../styles/theme';
import { experienceType } from '../../AboutMe';

type propsType = {
    date:experienceType['date'],
    title:experienceType['title'],
    location:experienceType['location'],
    buttonBody:experienceType['buttonBody'],
};


export const Experience: FC<propsType> = ({date,buttonBody,location,title}) => {
    return (
        <ExperienceStyled>
            <FlexWrapper justifyContent={'space-between'}><ExperienceTitleStyled>{title}</ExperienceTitleStyled><ExperienceButtonStyled>{buttonBody}</ExperienceButtonStyled>
            </FlexWrapper>
            
            
            
            <FlexWrapper alignItems={'center'} justifyContent={'space-between'}>
                <FlexWrapper flexWrap={'wrap'} alignItems={'center'} gap={8}>
                  <div><Icon id={'smallBuilding'} width={8} height={10} viewBox={'viewBox="0 0 8 10'} /* color={'transparent'} */ /> <span>{location.building}</span></div>  
                 {location.country !== '' && <div> <Icon id={'map'} viewBox={'0 0 12 12'} width={12} height={12} /> <span>{location.country}</span></div> }   
                </FlexWrapper>
                    <FlexWrapper gap={8} alignItems={'center'} justifyContent={'flex-end'}>
                    <Icon id={'date'} viewBox={'0 0 14 12'} width={14} height={12} /> <span>{date}</span>
                </FlexWrapper>

            </FlexWrapper>





            
        </ExperienceStyled>
    )
}




const ExperienceStyled = styled.div`

width:100%;

font-size: 12px;
font-weight: 500;
line-height: calc(28/12);
letter-spacing: 1px;
color:${theme.colors.fontLight};
padding-bottom:24px;

border-bottom:2px solid ${theme.colors.border};
 ${FlexWrapper} > ${FlexWrapper}:first-of-type svg:not(:first-of-type){

    margin-left:auto;

}
`;

const ExperienceTitleStyled = styled.h3`
font-size: 20px;

letter-spacing: 1px;
font-weight:400;
color:${theme.colors.font};

`;

const ExperienceButtonStyled = styled.button`
font-size: 9px;
font-weight: 600;
line-height: calc(24/9);
padding:0 22px;

color:${theme.colors.buttonExperience.color};
border-radius:3em;
background-color:${theme.colors.buttonExperience.bg};
`;

