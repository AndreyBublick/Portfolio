import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = styled(FlexWrapper)`


&>div{
   display:flex;

flex:1 0 380px;
max-width:calc(50% - 15px);
@media screen and (max-width:850px) {
    flex:1 0  calc(340px);  
}
 @media ${theme.media.tablet} {
    
    flex:1 0  calc(50% - 15px);  
    
}

@media ${theme.media.mobile} {
    flex:0 0  100%;  
max-width:100%;
}
}

@media ${theme.media.tablet} {
    gap:30px;
    justify-content:space-between;
    
}
`;




const MenuBody = styled.div`
display:flex;
justify-content:center;
margin-bottom:30px;
ul{
    gap:25px;
}
li{
    text-transform:uppercase;
}


`;

const MyWorks = styled.section`

position:relative;

`;

export const S = {
    Works,
    MenuBody,
    
    MyWorks,
};