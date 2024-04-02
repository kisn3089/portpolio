import { keyframes } from "styled-components";

export const FadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -20%, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

export const ScaleUp = keyframes`
    0% {
        scale: 0.7;
        opacity: 0;
    }
    100% {
        scale: 1;
        opacity: 1;
    }
`;

export const AppearUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 10%, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

export const FadeDown = keyframes`
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    100% {
        opacity: 0;
        transform: translate3d(0, 6%, 0);
    }
`;

export const AppearRight = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(14%, 0, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

export const FadeRight = keyframes`
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    100% {
        opacity: 0;
        transform: translate3d(14%, 0, 0);
    }
`;
