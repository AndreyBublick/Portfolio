

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
                <FlexWrapper justifyContent={'space-between'}>
                    <FlexWrapper alignItems={'center'} gap={12}><Icon id={'chain'} height={18} width={18} viewBox={"0 0 18 18"} /><Link to={'/view_preview'}>live preview</Link></FlexWrapper>
                    <FlexWrapper alignItems={'center'} gap={12}><Icon id={'SMALL_GIT_HUB'} height={20} width={20} viewBox={"0 0 20 20"} /><Link to={'/view_code'}>view code</Link></FlexWrapper>
                </FlexWrapper>
            </ProjectLinksStyled>

        </ProjectBodyStyled>


    </ProjectStyled>

}



const ProjectStyled = styled.section`

flex:0 0  calc(375px);

/* &:not(:nth-child(3n)){

    
} */
border-radius:20px;
overflow:hidden;
background-color:${theme.colors.white};
box-shadow:0px 0px 100px 0px gray;

`;

const ProjectImageStyled = styled.div`
margin-bottom:29px;
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

`;
const ProjectBodyStyled = styled.div`
padding:0 29px 25px;
`;
const ProjectTitleStyled = styled.h3`
font-size: 28px;
font-weight: 500;
line-height: 0.93;
margin-bottom:17px;
`;


const ProjectDescriptionStyled = styled.p`
font-size: 18px;
font-weight: 300;
line-height: calc(26/18);
color:${theme.colors.text};
margin-bottom:12px;
`;
const ProjectPSStyled = styled.p`


font-size: 14px;
font-weight: 300;
line-height: calc(26 / 14);

span{
font-size: 16px;
font-weight: 400;
line-height: calc(26/16);
 
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
transition: all 0.15s ease-in;
    


}
 a:hover{
    color:${theme.colors.text};
}
`;














