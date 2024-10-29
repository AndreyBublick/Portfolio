import styled from "styled-components";
import { font } from "../../../../../styles/Common";
import { theme } from "../../../../../styles/theme";
import { FlexWrapper } from "../../../../../components/FlexWrapper";

const ExperienceTitle = styled.h3`
  letter-spacing: 1px;

  ${font({ fMax: 20, fMin: 18, weight: 400, color: theme.colors.font })};

  margin-bottom: 8px;
`;

const ExperienceButton = styled.button`
  font-size: 9px;
  font-weight: 600;
  line-height: calc(24 / 9);
  /* padding:0 22px; */
  min-width: 84px;
  white-space: nowrap;

  color: ${theme.colors.buttonExperience.color};
  border-radius: 3em;
  background-color: ${theme.colors.buttonExperience.bg};
  /* transform:translateY(-5px); для pixel perfect */
`;

const Experience = styled.div`
  /* width:100%; */

  letter-spacing: 1px;
  ${font({ fMax: 12, fMin: 11, weight: 500, color: theme.colors.fontLight })};

  padding-bottom: 24px;

  border-bottom: 2px solid ${theme.colors.border};
`;
const Item = styled(FlexWrapper)`
  svg {
    width: 12px;
  }
  @media ${theme.media.mobile} {
    align-items: flex-start;
  }
`;

const ExperienceHeader = styled(FlexWrapper)``;
const ExperienceFooter = styled(FlexWrapper)`
  & > ${FlexWrapper} {
    & > ${Item}:nth-of-type(2) {
      svg {
        transform: translate(-2px, -0px);
      }
    }
  }
  & > div:first-of-type {
    flex: 0 0 48%;
  }

  @media ${theme.media.mobile} {
    & > ${FlexWrapper} {
      & > ${Item}:first-of-type {
        svg {
          transform: translate(0px, 2px);
        }
      }
    }
  }
`;

export const S = {
  ExperienceTitle,
  ExperienceButton,
  Experience,
  Item,
  ExperienceHeader,
  ExperienceFooter,
};
