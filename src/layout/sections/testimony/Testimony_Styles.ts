import { spin } from './../../../styles/animations/animations';
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from '../../../styles/theme';

const TestimonyWrapper = styled(FlexWrapper)`
`;
const IconWrapper = styled.div`
svg{
    animation:${spin} 13.0s linear infinite;
}
margin-bottom:72px;
@media ${theme.media.mobile} {
margin-bottom:50px;
    
}
`;
const Testimony = styled.section`
`;



export const S = {
    TestimonyWrapper,
    Testimony,
    IconWrapper,
};