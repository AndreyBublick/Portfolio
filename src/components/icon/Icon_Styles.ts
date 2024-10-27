import styled from "styled-components";
type svgStyledType = {
    width?: number;
    height?: number;
    viewBox?: string;
    color?: string,
  };
const Svg = styled.svg.attrs<svgStyledType>(({ width, height, viewBox }) => ({
    width: width && width || '30',
    height: height && height || '30',
    viewBox: viewBox && viewBox || "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  })) <svgStyledType>`
   color:${({ color }) => color || 'currentColor'};
  /* cursor: pointer; */
  `;
  export const S = {
    Svg,
  };
  