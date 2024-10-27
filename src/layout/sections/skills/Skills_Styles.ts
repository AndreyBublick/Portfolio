import styled from "styled-components";
import { theme } from "../../../styles/theme";



const SkillsWrapper = styled.div`
display:grid;
column-gap:90px;
row-gap:85px;
justify-items:center;
align-items:center;
grid-template-columns:repeat(auto-fill,minmax(120px,1fr));
grid-auto-rows:1fr;

@media ${theme.media.mobile} {
column-gap:20px;
    
}
`;





export const S ={
    SkillsWrapper,
};