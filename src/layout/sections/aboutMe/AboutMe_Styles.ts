import styled, { css } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import wall from '../../../assets/images/wall.webp';
import { font } from "../../../styles/Common";

const AboutMe = styled.section<{isView:boolean}>`


position:relative;
z-index:0;

${FlexWrapper}{
  max-width:695px;
}

 ${FlexWrapper} > ${SectionTitle}{
 

} 



h2{
    
    text-align:left;
    font-size:42px;
}

&::before{
  content:'';
  position:absolute;
  transition:1s ;
  background: url(${wall}) right center/auto no-repeat;
  width:100%;
  height: 100%;
  top: -40px;
  left:30px;
  z-index: -1;
  transform:translateX(100%);
 

}
${props=> props.isView && css<{isView:boolean}>`
&::before{
  transform:translateX(0%);
}
`}
`;

const AboutMeDescription = styled.p`


${font({fMax:18,fMin:16,lineHeight:26/18})}

`;








export const S = {
    AboutMe,
    AboutMeDescription,
};