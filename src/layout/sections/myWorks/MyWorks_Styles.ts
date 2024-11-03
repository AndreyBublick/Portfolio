import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Link } from "react-router-dom";


const Mask = styled.span`
  color: inherit;
  transition: inherit;
  position: absolute;
  overflow: hidden;
  z-index: -1;
  font-size:inherit;

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

const Works = styled(FlexWrapper)`
/* transition:0.2s; */


&>div{
   display:flex;

flex:1 0 380px;
max-width:calc(50% - 15px);
@media screen and (max-width:850px) {
    flex:1 0  calc(340px);  
}
 @media ${theme.media.tablet} {
    
    flex:1 0  calc(50% - 15px);  
    
}

@media ${theme.media.mobile} {
    flex:0 0  100%;  
max-width:100%;
}
}

@media ${theme.media.tablet} {
    gap:30px;
    justify-content:space-between;
    
}
`;

const ItemElement = styled(Link)`

    font-size:inherit;
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



`;
const MenuItem = styled.li<{isActive:boolean}>`


    display:block;
    width:content;
    text-transform: uppercase;
    white-space: nowrap;
    font-size:20px;
  position: relative;
  z-index: 0;

  font-family: "DM Sans", sans-serif;

  font-weight: 500;

  transition: all 0.2s ease-in;

  
  ${(props) =>
    props.isActive &&
    css<{ isActive?: boolean }>`
      
      ${ItemElement}::before{
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

@media ${theme.media.hover} {
  &:hover {
    ${ItemElement}::before {
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
  

`;



const MenuBody = styled.ul`
display:flex;
justify-content:center;
gap:25px;
margin-bottom:30px;


`;

const MyWorks = styled.section`
position:relative;
overflow:hidden;

`;

export const S = {
    Works,
    MenuBody,
    Mask,
    MyWorks,
    ItemElement,
    MenuItem,
};