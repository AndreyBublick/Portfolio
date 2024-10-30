import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = styled(FlexWrapper)`


@media ${theme.media.tablet} {
    gap:30px;
    justify-content:center;
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