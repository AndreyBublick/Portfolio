import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/Common";

export const SectionSubTitle = styled.span`



display:block;

text-align: center;
margin-bottom:124px;

@media ${theme.media.tablet} {
margin-bottom:80px;
    
}

@media ${theme.media.mobile} {
margin-bottom:60px;
    
}

${font({color:theme.colors.font,weight:700 ,lineHeight:0.81,fMax:32,fMin:20,})}


`;