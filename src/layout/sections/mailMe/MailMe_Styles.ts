import styled from "styled-components";
import { GradientWord } from "../../../components/GradientWord";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/theme";

const MailMe = styled.section`

h2{
  

letter-spacing: 1.2px;

${font({color:theme.colors.title ,family:'DM Sans, sans-serif',fMax:58,fMin:38, weight:700,lineHeight:70/58})}

${GradientWord}{
letter-spacing: 0.5px;

};

}
`;
export const S = {
    MailMe,
};