

import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from 'react-router-dom';
import { theme } from '../../../../styles/theme';
import { Icon } from '../../../../components/icon/Icon';
import { font } from '../../../../styles/Common';


type propsType = {
    title: string,
    image: string,
    description: string,
};

export const Project: FC<propsType> = ({ title, image, description }) => {
    return <ProjectStyled>

        <ProjectImageStyled>
            <div>
                <img src={image} alt="My Project" />
            </div>
        </ProjectImageStyled>

        <ProjectBodyStyled>
            <ProjectTitleStyled>{title}</ProjectTitleStyled>
            <ProjectDescriptionStyled>{description}</ProjectDescriptionStyled>
            <ProjectPSStyled><span>Tech stack :</span>  HTML , JavaScript, SASS, React</ProjectPSStyled>
            <ProjectLinksStyled>
                <FlexWrapper gap={15} alignItems={'center'} justifyContent={'space-between'}>
                    
                        <LinkIconChain aria-label='ссылка live preview' href={'#'} target={'_blank'}>
                        <Icon id={'chain'} height={20} width={20} viewBox={"0 0 20 20"} />live preview
                        </LinkIconChain>


                        <LinkIconGitHub aria-label='ссылка view code' href={'#'} target={'_blank'}>
                        <Icon id={'SMALL_GIT_HUB'} height={20} width={20} viewBox={"0 0 20 20"} />view code
                        </LinkIconGitHub>
                       
                    
                </FlexWrapper>
            </ProjectLinksStyled>

        </ProjectBodyStyled>


    </ProjectStyled>

}


const LinkIconGitHub = styled.a`
 
 
 
`;
const LinkIconChain = styled.a`




 
`;


const ProjectImageStyled = styled.div`
position:relative;
z-index:0;
& > div{
    padding-left:100%;
    padding-bottom:69.335%;
    position:relative;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
  
}
 
 @media (hover:hover) {
   
        &::before{
    content:'';
   transition:0.2s all linear;
    z-index:1;
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.1);
    backdrop-filter:blur(10px);

 }
  
}


`;
const ProjectStyled = styled.div`
display:flex;
flex-direction:column;
flex:1 0  calc(375px);

/* &:not(:nth-child(3n)){

    
} */
border-radius:20px;
overflow:hidden;
background-color:${theme.colors.primaryBg};
box-shadow:0px 0px 100px 0px gray;

@media (hover:hover) {
    &:hover{
    ${ProjectImageStyled}::before{
        backdrop-filter:blur(0px); 
        background-color:rgba(0, 0, 0, 0.0);

    }
}
}

@media screen and (max-width:850px) {
    flex:1 0  calc(340px);  
}
 @media ${theme.media.tablet} {
    flex:1 0  calc(290px);  
    max-width:450px;
}

@media ${theme.media.mobile} {
    flex:1 0  100%;  
}

`;


const ProjectBodyStyled = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
padding:25px 30px;

@media ${theme.media.tablet} {
    padding:15px 20px;

}

`;
const ProjectTitleStyled = styled.h3`





`;


const ProjectDescriptionStyled = styled.p`
flex-grow:1;///для заполнения пустого пространства

${font({ fMax: 18, fMin: 14, weight: 300, lineHeight: 1.6 })}

margin-bottom:12px;


`;
const ProjectPSStyled = styled.p`



${font({ fMax: 14, fMin: 12, weight: 300 })}


span{
${font({ fMax: 16, fMin: 14 })}

 
}

margin-bottom:21px;

`;

const ProjectLinksStyled = styled.div`





a{
    display:flex;
text-transform: capitalize;
gap:10px;

${font({ color: theme.colors.fontDark, lineHeight: 26 / 16, fMax: 16, fMin: 12 })}

text-decoration:underline;
transition: color 0.15s linear;

& > svg{
    transition:inherit;
    display:flex;
}
&:hover{
   & > svg{
    filter:none;
    border:none;
    outline:none;
    color:inherit;
    }
    
    color:${theme.colors.font};
    
}
}
 
`;














