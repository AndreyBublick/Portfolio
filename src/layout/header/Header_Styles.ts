import styled from "styled-components";
import { theme } from "../../styles/theme";
import { FlexWrapper } from "../../components/FlexWrapper";


const Header = styled.header`


position:fixed; ///safari debug
top:0;
left:0;
z-index:999;
width:100%;

color:${theme.colors.font};
padding:15px 0px;
background-color:${theme.colors.primaryBg};

font-size:20px;



     

&>div>div>div:first-of-type{
display:flex;
    align-items: center;    
}




@media screen and (max-width: 1050px) {
    
  
    div > div> div{

        align-self: center;
    }
}
    
@media ${theme.media.mobile}  {

    padding:10px 0;
}
    
    
  
`;

const LinksWrapper = styled(FlexWrapper)`

`;

export const S = {
    Header,
    LinksWrapper,

};