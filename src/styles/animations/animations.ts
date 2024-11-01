import { keyframes } from "styled-components";

export const spin = keyframes`
0%{
    transform:rotate(0deg);
}
100%{
    transform:rotate(360deg);

}
`;
export const scrolling = keyframes`
0%{
    transform:translateX(0%);

    left:0%;
}
100%{
    transform:translateX(-100%);
    left:100%;

}
`;
export const glowing =  keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;