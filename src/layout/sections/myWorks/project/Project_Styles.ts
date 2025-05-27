import styled from "styled-components";
import { font } from "../../../../styles/Common";
import { theme } from "../../../../styles/theme";


const LinkIconGitHub = styled.a`
 
 
 
`;
const LinkIconChain = styled.a`

    align-items: center;
    line-height: 0;
svg{
transform: rotate(-90deg);
position: relative;
    right: -5px;
    top: -2px;
}
&>span{
    
}
 
`;


const ProjectImage = styled.div`
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
const Project = styled.div`
display:flex;
flex-direction:column;


/* flex:1 0  calc(375px); */
/* &:not(:nth-child(3n)){

    
} */
border-radius:20px;
overflow:hidden;
background-color:${theme.colors.primaryBg};
box-shadow:0px 0px 100px 0px gray;

@media (hover:hover) {
    &:hover{
    ${ProjectImage}::before{
        backdrop-filter:blur(0px); 
        background-color:rgba(0, 0, 0, 0.0);

    }
}
}


`;


const ProjectBody = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
padding:25px 30px;

@media ${theme.media.tablet} {
    padding:15px 20px;

}

`;
const ProjectTitle = styled.h3`





`;


const ProjectDescription = styled.p`
flex-grow:1;///для заполнения пустого пространства

${font({ fMax: 18, fMin: 14, weight: 300, lineHeight: 26/18 })}

margin-bottom:15px;


`;
const ProjectPS = styled.p`



${font({ fMax: 14, fMin: 12, weight: 300 })}
margin-bottom:27px;

span{
${font({ fMax: 16, fMin: 14 })}
}
`;

const ProjectLinks = styled.div`





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






export const S = {
    LinkIconGitHub,
    LinkIconChain,
    ProjectImage,
    Project,
    ProjectBody,
    ProjectTitle,
    ProjectDescription,
    ProjectPS,
    ProjectLinks,
};