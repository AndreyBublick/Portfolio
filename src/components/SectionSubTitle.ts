import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/Common";


type propstType = {mBottom?:string};

export const SectionSubTitle = styled.span<propstType>`



display:block;

text-align: center;
margin-bottom:${props=> props.mBottom || '110px'};

@media ${theme.media.tablet} {
margin-bottom:80px;
    
}

@media ${theme.media.mobile} {
margin-bottom:60px;
    
}

${font({color:theme.colors.font,weight:400 ,lineHeight:26/32,fMax:32,fMin:20,})}








`;