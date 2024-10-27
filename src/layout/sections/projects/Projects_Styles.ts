import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

const FlexWrapperProjects = styled(FlexWrapper)`
row-gap:62px;
`;



const Projects = styled.section`

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