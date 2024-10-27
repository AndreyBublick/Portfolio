import styled from "styled-components";
import { theme } from "../styles/theme";
import { font } from "../styles/Common";
import { FC } from "react";

type propstType = {mBottom?:string};

export const SectionTitle = styled.h2<propstType>`
    
text-align: center;

${font({color:theme.colors.title,weight:700, fMax:48,fMin:34,})}

margin-bottom:${props=> props.mBottom || '32px'};
@media ${theme.media.mobile} {
margin-bottom:24px;
    
}
`; 