import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        background-color: #222;
        color: #fff;

        .fade-enter {
            opacity: 0;
            transform: translateX(100%) rotateZ(45deg);
        }

        .fade-enter-active {
          opacity: 1;
          transform: translateX(-50%) rotateZ(0);
          transition: all 1s ease-in;
        }

        .fade-exit {
          opacity: 1;
          transform: translateX(-50%) rotateZ(0);
        }

        .fade-exit-active {
          opacity: 0;
          transform: translateX(-100%) rotateZ(-45deg);
          transition: all 1s ease-in;
        }
    }
`;

export const Imgbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: auto;

  img {
    object-fit: contain;
  }
`;
