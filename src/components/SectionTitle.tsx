import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/Common";



export const SectionTitle = styled.h2`
    
text-align: center;

${font({color:theme.colors.title,weight:700, fMax:48,fMin:34,})}


margin-bottom: 50px;
@media ${theme.media.mobile} {
margin-bottom:24px;
    
}
`; 