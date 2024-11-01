import styled  from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { font } from "../../styles/Common";
import { GradientWord } from "../GradientWord";
import { theme } from "../../styles/theme";



const Pagination = styled(FlexWrapper)``;



const Slider = styled.div`

cursor:grab;
&:active{
  cursor:grabbing;

}
  max-width: 700px;
  width:100%;
  text-align: center;
  
  ${GradientWord} {
    ${font({ weight: 600, fMax: 30, fMin: 24 })};
    margin: 22px 0 42px;
  }

  @media ${theme.media.tablet} {
   max-width: 500px; 
    
  }
  @media ${theme.media.mobile} {
   max-width: 450px;
    
  }
  @media screen and (max-width:480px) {
   max-width: 330px;
    
  }
  
`;






const PaginationItem = styled.span<{ isActive?: boolean }>`
  width: 10px;
  transition:0.3s;
  height: 10px;
  background-color: ${theme.colors.font};
  border-radius: 10rem;
  cursor: pointer;
  display:block;
  /* margin:0 5px; */
  
     
    
`;

const SliderDescription = styled.p`
  ${font({ weight: 500, fMax: 18, fMin: 16, lineHeight: 21 / 14 })};
`;

export const S = {
  Slider,
  Pagination,
  SliderDescription,
  PaginationItem,
};
