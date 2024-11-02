import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

const FlexWrapperProjects = styled(FlexWrapper)`
row-gap:62px;
&> div{
    flex:1 0 calc(50% - 34px);
    
    @media ${theme.media.mobile} {
    flex:1 0 100%;

        max-width:100%;
    }
}
`;



const Projects = styled.section`
position:relative;
${FlexWrapperProjects}{
    @media ${theme.media.tablet} {
        gap:20px;
        justify-content:center;
    }    
}




`;





export const S = {
    FlexWrapperProjects,
Projects,
};