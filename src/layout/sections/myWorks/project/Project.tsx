

import { memo } from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { S } from './Project_Styles';
import type {Work} from "../MyWorks";


type Props = Omit<Work,'category'>;

export const Project = memo(({ title, image, description, link,gitLink,techStack }:Props) => {
    return <S.Project>

        <S.ProjectImage>
            <div>
                <img src={image} alt="My Project" />
            </div>
        </S.ProjectImage>

        <S.ProjectBody>
            <S.ProjectTitle>{title}</S.ProjectTitle>
            <S.ProjectDescription>{description}</S.ProjectDescription>
            <S.ProjectPS><span>Tech stack :</span>  {techStack}</S.ProjectPS>
            <S.ProjectLinks>
                <FlexWrapper gap={50} alignItems={'center'} >
                    
                        <S.LinkIconChain aria-label='ссылка live preview' href={link} target={'_blank'}>
                        <Icon id={'chain'} height={20} width={20} viewBox={"0 0 20 20"} /> <span>live preview</span>
                        </S.LinkIconChain>


                        <S.LinkIconGitHub aria-label='ссылка view code' href={gitLink} target={'_blank'}>
                        <Icon id={'SMALL_GIT_HUB'} height={20} width={20} viewBox={"0 0 20 20"} /> <span>view code</span>
                        </S.LinkIconGitHub>
                       
                    
                </FlexWrapper>
            </S.ProjectLinks>

        </S.ProjectBody>


    </S.Project>

});

















