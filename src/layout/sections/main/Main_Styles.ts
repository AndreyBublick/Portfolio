
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { font } from "../../../styles/Common";
import { spin } from "../../../styles/animations/animations";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";


const Image = styled.div`

    
    border-radius:50%;
    overflow:hidden;
    
    position:relative;
    &::before{
        content:'';
        top: 0;
        background:linear-gradient(90deg, ${theme.colors.gradient.color1} ,${theme.colors.gradient.color2} );
       
        left: 0;
        width: 100%;
        height: 100%;
        position:absolute;
        animation:${spin} 3.0s infinite linear;
        transition:transform 3.0s;
    }
    
& > div{
    
    padding-bottom:100%;
    padding-left:100%;

img{
    border-radius:50%;
    overflow:hidden;
    border:10px solid transparent;
    position:absolute;
    top:0;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit:cover;
}
}
`;
const Main = styled.section`

min-height:100vh;
display:flex;
margin-top:-100px;

&>${Container} > ${FlexWrapper} > div:last-of-type{

    margin:0 auto;
    flex:0 0 370px;
    @media screen and (max-width:850px) {
    flex: 0 0 300px; 
@media ${theme.media.tablet} {
    transform:none !important;
    transition:none !important;
    animation:none !important;
}
}
}

@media screen and (max-height:700px) {
    margin-top:-50px;

}

@media ${theme.media.tablet} {
    margin-top:-80px;
    h2{
        flex: 1 0 100%;
    }
    align-items:center;
}
@media ${theme.media.tablet} {
    ${Container} > ${FlexWrapper} {
     
        gap:40px;
    }
}

`;


const Dot = styled.span`
font-family:Arial, Helvetica, sans-serif;
margin-left:-10px;
`;
const Title = styled.h2`
/* flex: 0 0 67%; */
flex-grow:1;

  ${font({color:theme.colors.title,weight:700,fMax:58,fMin:28,lineHeight:1.25})}
    
    text-align:left;

        letter-spacing:-1px;

    

    @media ${theme.media.tablet} {
   
         
    text-align:center;
        
    
}
`;

const Hand = styled.span`
display:inline-block;
font-size:50px;
${font({fMax:50,fMin:35})}

transform:translate(-5px,-10px);

@media ${theme.media.mobile} {
transform:translate(-5px,-8px);
    
}
`;


export const S = {
    Main,
    Dot,
    Title,
    Image,
    Hand,

};