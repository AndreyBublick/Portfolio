

import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from 'react-router-dom';
import { theme } from '../../../../styles/theme';
import { Icon } from '../../../../components/icon/Icon';


type propsType = {
    title: string,
    image: string,
    description: string,
};

export const Project: FC<propsType> = ({ title, image, description }) => {
    return <ProjectStyled>

        <ProjectImageStyled>
            <div className='image__body'>
                <img src={image} alt="My Project" />
            </div>
        </ProjectImageStyled>

        <ProjectBodyStyled>
            <ProjectTitleStyled>{title}</ProjectTitleStyled>
            <ProjectDescriptionStyled className={'description'}>{description}</ProjectDescriptionStyled>
            <ProjectPSStyled><span>Tech stack :</span>  HTML , JavaScript, SASS, React</ProjectPSStyled>
            <ProjectLinksStyled>
                <FlexWrapper gap={15} alignItems={'center'} justifyContent={'space-between'}>
                    <FlexWrapper alignItems={'center'} gap={12}>
                        <LinkIconChain href={'#'} target={'_blank'}>
                            <Icon id={'chain'} height={20} width={20} viewBox={"0 0 20 20"} />
                        </LinkIconChain>
                        <a href={'#'} target={'_blank'}>live preview</a>
                    </FlexWrapper>
                    <FlexWrapper alignItems={'center'} gap={12}>
                        <LinkIconGitHub href={'#'} target={'_blank'}>
                            <Icon id={'SMALL_GIT_HUB'} height={20} width={20} viewBox={"0 0 20 20"} />
                        </LinkIconGitHub>
                        <a href={'#'} target={'_blank'}>view code</a>
                    </FlexWrapper>
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
.image__body{
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

flex:0 0  calc(375px);

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



`;


const ProjectBodyStyled = styled.div`
padding:27px 30px 25px ;
`;
const ProjectTitleStyled = styled.h3`
color:black;
`;


const ProjectDescriptionStyled = styled.p`
font-size: 18px;
font-weight: 300;

line-height:1.6;
margin-bottom:12px;
`;
const ProjectPSStyled = styled.p`


font-size: 14px;
font-weight: 300;


span{
font-size: 16px;
font-weight: 400;

 
}

margin-bottom:21px;

`;

const ProjectLinksStyled = styled.div`





a{
font-size: 16px;
line-height: calc(26/16);
text-transform: capitalize;
color:#000000;
text-decoration:underline;
transition: color 0.15s linear;

& > svg{
    transition:inherit;
    display:flex;
    filter:none;
    border:none;
    outline:none;

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














