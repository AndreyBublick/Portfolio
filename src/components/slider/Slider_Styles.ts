import styled, { css } from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { font } from "../../styles/Common";
import { GradientWord } from "../GradientWord";
import { theme } from "../../styles/theme";
const Pagination = styled(FlexWrapper)``;
const Slider = styled.div`
  max-width: 700px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${GradientWord} {
    ${font({ weight: 600, fMax: 30, fMin: 24 })};
    margin: 22px 0 42px;
  }
`;






const PaginationItem = styled.span<{ isActive?: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${theme.colors.font};
  border-radius: 10rem;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css<{ isActive?: boolean }>`
      width: 30px;
      cursor: default;
      background-color: ${theme.colors.gradient.color1};

      background-image: linear-gradient(
        90deg,
        ${theme.colors.gradient.color1},
        ${theme.colors.gradient.color2}
      );
    `}
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
