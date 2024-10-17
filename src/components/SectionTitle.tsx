import styled from "styled-components";
import { theme } from "../styles/theme";

type propsType = {
    textAlign?:'start'|'end'|'left'|'right',
   fSize?:string,  
   mBottom?:string;  

};

export const SectionTitle = styled.h2<propsType>`
       
font-size: ${ props => props.fSize || '48px'};
font-weight: 700;

text-align: ${props=> props.textAlign ? props.textAlign : 'center'};
color:${theme.colors.title};
margin-bottom: ${props =>   props.mBottom || '1em'}  ;

`; 