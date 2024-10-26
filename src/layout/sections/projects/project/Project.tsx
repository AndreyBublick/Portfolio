

import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from 'react-router-dom';
import { theme } from '../../../../styles/theme';
import { Icon } from '../../../../components/icon/Icon';
import { font } from '../../../../styles/Common';
import { S } from './Project_Styles';


type propsType = {
    title: string,
    image: string,
    description: string,
};

export const Project: FC<propsType> = ({ title, image, description }) => {
    return <S.Project>

        <S.ProjectImage>
            <div>
                <img src={image} alt="My Project" />
            </div>
        </S.ProjectImage>

        <S.ProjectBody>
            <S.ProjectTitle>{title}</S.ProjectTitle>
            <S.ProjectDescription>{description}</S.ProjectDescription>
            <S.ProjectPS><span>Tech stack :</span>  HTML , JavaScript, SASS, React</S.ProjectPS>
            <S.ProjectLinks>
                <FlexWrapper gap={50} alignItems={'center'} >
                    
                        <S.LinkIconChain aria-label='ссылка live preview' href={'#'} target={'_blank'}>
                        <Icon id={'chain'} height={20} width={20} viewBox={"0 0 20 20"} />live preview
                        </S.LinkIconChain>


                        <S.LinkIconGitHub aria-label='ссылка view code' href={'#'} target={'_blank'}>
                        <Icon id={'SMALL_GIT_HUB'} height={20} width={20} viewBox={"0 0 20 20"} />view code
                        </S.LinkIconGitHub>
                       
                    
                </FlexWrapper>
            </S.ProjectLinks>

        </S.ProjectBody>


    </S.Project>

}

















