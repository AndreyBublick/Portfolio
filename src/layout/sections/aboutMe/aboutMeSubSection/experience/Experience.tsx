


import React, { FC } from 'react'
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Icon } from '../../../../../components/icon/Icon';
import { experienceType } from '../../AboutMe';
import { S } from './Experience_Styles';

type propsType = {
    date: experienceType['date'],
    title: experienceType['title'],
    location: experienceType['location'],
    buttonBody: experienceType['buttonBody'],
};


export const Experience: FC<propsType> = ({ date, buttonBody, location, title }) => {
    return (
        <S.Experience>
            <S.ExperienceHeader gap={10} alignItems={'flex-start'} justifyContent={'space-between'}>
                <S.ExperienceTitle>{title}</S.ExperienceTitle>
                <S.ExperienceButton>{buttonBody}</S.ExperienceButton>
            </S.ExperienceHeader>



            <S.ExperienceFooter alignItems={'flex-start'} justifyContent={'space-between'}>
                <FlexWrapper justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} gap={8} >
                    <S.Item alignItems={'center'} gap={8}><Icon id={'smallBuilding'} width={8} height={10} viewBox={'viewBox="0 0 8 10'} /* color={'transparent'} */ /> <span>{location.building}</span></S.Item>
                    {location.country !== '' && <S.Item alignItems={'center'} gap={8}> <Icon id={'map'} viewBox={'0 0 12 12'} width={12} height={12} /><span>{location.country}</span></S.Item>}
                </FlexWrapper>
                <S.Item gap={8} alignItems={'center'} justifyContent={'flex-end'}>
                    <Icon id={'date'} viewBox={'0 0 14 12'} width={14} height={12} /> <span>{date}</span>
                </S.Item>

            </S.ExperienceFooter>






        </S.Experience>
    )
}


