import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { font } from "../../../../styles/Common";

const WorkTitle = styled.h3`



letter-spacing: 1px;

${font({ fMax: 18, fMin: 16, weight: 700, color: theme.colors.fontDark })}

`;
const WorkDescription = styled.p`
flex-grow:1;

${font({ fMax: 16, fMin: 14, color: theme.colors.fontDark, lineHeight: 21 / 14 })}

margin-bottom:15px;
`;


const WorkImage = styled.div`
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
 
 /* @media (hover:hover) {
   
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
  
} */


`;
const WorkBody = styled.div`
display:flex;
flex-direction:column;
flex:1;
padding:25px 20px;
`;
const Links = styled.ul`
display:flex;
gap:20px;
li{
letter-spacing: 1px;

    ${font({ fMax: 16, fMin: 14, lineHeight: 21 / 14, })}

    &:nth-of-type(2n-1) > a{
    color:${theme.colors.gradient.color1};
    }
    &:nth-of-type(2n) > a{
    color:${theme.colors.gradient.color2};
        
    }
}
`;
const Link = styled.a`
text-transform:uppercase;
`;


const Work = styled.div`
display:flex;
flex-direction:column;

position:relative;
z-index:0;

flex: 1 0 300px;
max-width:570px;


&::before{
    content:'';
    position:absolute;
    top: 0;
    left: 0;
    width:100%;
    z-index:-1;
    height: 100%;
    background-color:${theme.colors.font};
    opacity:0.1;
}

`;


export const S = {
    WorkTitle,
    WorkDescription,
    WorkImage,
    WorkBody,
    Links,
    Link,
    Work,
};