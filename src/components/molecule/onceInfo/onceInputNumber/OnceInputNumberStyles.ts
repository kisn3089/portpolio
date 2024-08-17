import styled from "styled-components";

export const OnceInfoInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `1px solid ${theme.palette.blue100}`};
  border-radius: 8px;
  opacity: 0;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "once_border",
      duration: "0.6s",
      transtion: theme.ts.moreFast,
      opacity: 0,
      direction: "forwards",
    })};
`;

export const Line = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;
  width: 2px;
  height: 50%;
  background-color: ${({ theme }) => theme.palette.blue100};
`;

export const InfoLayout = styled.div`
  position: absolute;
  top: -640%;
  left: -100%;
  width: 300px;
  height: 300px;
  border: ${({ theme }) => `1px solid ${theme.palette.blue100}`};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 8;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.palette.blue}`};
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "once_question",
      duration: "1s",
      transtion: theme.ts.moreFast,
      opacity: 0,
      beginTransform: "translateY(10%)",
    })}
`;

export const ThresholdInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  opacity: 0;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "once_threshold",
      duration: "1s",
      transtion: theme.ts.moreFast,
      opacity: 0,
      beginTransform: "translateY(20%)",
      delay: "0.4s",
      direction: "forwards",
    })}
`;

export const CenterLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.blue};
`;

export const ShortcutWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "once_shortcut",
      duration: "1s",
      transtion: theme.ts.moreFast,
      opacity: 0,
      beginTransform: "translateY(20%)",
      delay: "0.6s",
      direction: "forwards",
    })}
`;

export const InfoContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mini};
  &.ko {
    font-family: ${({ theme }) => theme.fontFamily.ko};
  }
`;

export const ClearButton = styled.button`
  width: 70px;
  height: 34px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 4px;
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue};
    color: ${({ theme }) => theme.palette.white};
  }
`;