
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { font } from "../styles/Common";



export const GlobalStyles = createGlobalStyle`
        * {
                padding: 0;
                margin: 0;
                border: 0;
        }

        *, *:before, *:after {
                box-sizing: border-box;
        }

        :focus, :active {
                outline: none;
        }

        a:focus, a:active {
                outline: none;
        }

        nav, footer, header, aside {
                display: block;
        }

        html, body {
                height: 100%;
                width: 100%;
                line-height: 1;
                font-size: 14px;
                -ms-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
        }

        input, button, textarea {
                font-family: inherit;
        }

        a, button,input,textarea {
                &:focus-visible {
                        outline: 2px solid ${theme.colors.gradient.color1};
                }
        }


        input::-ms-clear {
                display: none;
        }

        input:focus {
        }

        button {
                cursor: pointer;
                border: none;
                background-color: unset;
        }

        button::-moz-focus-inner {
                padding: 0;
                border: 0;
        }

        a, a:visited {
                text-decoration: none;
        }

        a:hover {
                text-decoration: none;
        }

        ul li {
                list-style: none;
        }

        img {
                vertical-align: top;
        }

        h1, h2, h3, h4, h5, h6 {
                font-size: inherit;
                font-weight: inherit;
        }


        * {
                -webkit-tap-highlight-color: transparent;
                scrollbar-width: thin;
                scrollbar-color: #E70FAA white;
                @media (prefers-reduced-motion: reduce) {
                        .animated-element {
                                animation: none; /* Отключите анимацию */
                                transition: none; /* Отключите переходы */
                        }
                }

                &::selection {
                        color: white;
                        background-color: darkviolet;
                        -webkit-text-fill-color: white;
                        /*   background-image: linear-gradient(0deg,red,red); */

                }


        }

        body {
                background-color: ${theme.colors.primaryBg};
                color: ${theme.colors.font};
                overflow-x: hidden;
                font-family: 'Rubik', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                line-height: 1.2;
                min-width: 360px;
                        /**:focus-visible {
                    outline: 2px solid ${theme.colors.gradient.color1};
            }*/
        }

        section {
                background-color: ${theme.colors.primaryBg};
                padding: 100px 0;
                @media ${theme.media.mobile} {
                        padding: 60px 0;

                }
        }

        p {
                color: ${theme.colors.font};
                font-weight: 400;

        }

        h1 {
                display: inline;
        }

        h2 {
                weight: 700;
        }

        h3 {

                ${font({color: theme.colors.fontDark, weight: 500, fMax: 28, fMin: 20})};
                margin-bottom: 13px;


        }

        input::placeholder {
                color: red;
        }

        input, textarea {

        }
`;