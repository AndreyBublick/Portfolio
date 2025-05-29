import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type MenuStyledPorpsType = {
  fz?: string;
};

const Mask = styled.span`
  color: inherit;
  transition: inherit;
  position: absolute;
  overflow: hidden;
  z-index: -1;

  transform: translate(0%, 0%) skew(0);

  width: 100%;
  height: 50%;

  & > span {
    position: absolute;
    /* overflow:hidden; */
    transition: inherit;
    width: 100%;
    height: 100%;
  }

  &:first-of-type {
    top: 0%;
    left: 0%;

    & > span {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &:last-of-type {
    left: 0;
    bottom: 0%;

    & > span {
      top: -50%;
      transform: translateY(-50%);
    }
  }
`;

const Menu = styled.nav`
    
`;

const List = styled.ul<MenuStyledPorpsType>`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 900px) {
    gap: 35px;
  }
    
`;

const MenuItem = styled.li<{ isActive?: boolean } & MenuStyledPorpsType>`
  font-size: ${(props) => props.fz || theme.fontSizes.link};

  white-space: nowrap;

  position: relative;
  z-index: 0;

  font-family: "DM Sans", sans-serif;

  font-weight: 500;

  transition: all 0.2s ease-in;

  


@media ${theme.media.hover} {
  &:hover {
    a::before {
      opacity: 1;
    }
    ${Mask}:first-of-type {
      transform: translate(3%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color1};
      }
    }
    ${Mask}:last-of-type {
      transform: translate(-5%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color2};
      }
    }
  }
}
@media ${theme.media.notHover} {
  &:active {
    &::before {
      opacity: 1;
    }
    ${Mask}:first-of-type {
      transform: translate(3%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color1};
      }
    }
    ${Mask}:last-of-type {
      transform: translate(-5%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color2};
      }
    }
  }
}
  

  

  

    a {
      transition: inherit;
    display: inline-block;
    color: transparent;
    &::before {
      transition: inherit;
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    width: 120%;
    top: 50%;
    left: 50%;
    height: 2px;
    background-color: ${theme.colors.title};

    transform: translate(-50%, -50%);
    opacity: 0;
  }
  }
  
    a._active ~ ${Mask}{
      
    &:first-of-type {
      transform: translate(3%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color1};
      }
    }
    &:last-of-type {
      transform: translate(-5%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color2};
      }
    }
    }
    a._active{
      &::before{
        opacity:1;
      }
    }
    a:active {
    &::before {
      opacity: 1;
    }
    }
    ${(props) =>
    props.isActive &&
    css<{ isActive?: boolean }>`
      
      a::before{
        opacity:1;
      }
    
      ${Mask}:first-of-type {
        transform: translate(3%, -0%) skew(15deg);

        & > span {
          color: ${theme.colors.gradient.color1};
        }
      }
      ${Mask}:last-of-type {
        transform: translate(-5%, -0%) skew(15deg);

        & > span {
          color: ${theme.colors.gradient.color2};
        }
      }
    `}
`;

export const S = {
  Mask,
  Menu,
  List,
  MenuItem,
};
