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
padding:40px 0px;
background-color:${theme.colors.primaryBg};

font-size:20px;



     





@media ${theme.media.tablet} {
   ${FlexWrapper}{
      align-items:center;
   }
   
}



   

   

@media ${theme.media.tablet}{
   padding:20px 0px;
}
@media ${theme.media.mobile}  {
   padding:10px 0px;
}

`;

const LinksWrapper = styled(FlexWrapper)`

`;

export const S = {
    Header,
    LinksWrapper,
};