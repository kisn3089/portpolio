import styled from "styled-components";

export const StockListContainer = styled.div`
  position: relative;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  padding: 8px 8px;
`;

export const StockItem = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.palette.gray};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.ko};
`;

export const PriceInfo = styled.div<{ $flag: string }>`
  display: flex;
  width: 30%;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ $flag, theme }) =>
    $flag === "up"
      ? theme.palette.red
      : $flag === "down"
      ? theme.palette.blue
      : theme.palette.gray100};
`;

// export const Loading = styled.div<{ $isLoading: boolean }>`
//   position: absolute;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 3;
//   pointer-events: ${({ $isLoading }) => !$isLoading && "none"};
//   will-change: transform opacity;
//   ${({ theme, $isLoading }) =>
//     theme.animation.fadeIn({
//       name: $isLoading ? "show" : "hide",
//       beginTransform: $isLoading ? "translate3d(0, 10%, 0)" : undefined,
//       endTransform: $isLoading ? undefined : "translate3d(0, 6%, 0)",
//       opacity: $isLoading ? 0 : 1,
//       duration: $isLoading ? "0.6s" : "0.4s",
//       transtion: theme.ts.moreFast,
//       direction: "forwards",
//     })};
//   svg {
//     fill: ${({ theme }) => theme.palette.white};
//     width: 48px;
//     height: 48px;
//   }
// `;

export const BottomLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0;
  bottom: 2%;
  display: flex;
  flex-direction: row;
  gap: 0 10px;
  padding: 0 12px;
`;

export const PagenationButton = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabledBackground};
    color: ${({ theme }) => theme.palette.disabledColor};
    cursor: not-allowed;
  }
`;

export const SlideRight = styled.div<{ $isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
  will-change: transform opacity;
  ${({ theme, $isLoading }) =>
    theme.animation.fadeIn({
      name: $isLoading ? "rightHide" : "rightShow",
      duration: $isLoading ? "0.4s" : "0.6s",
      beginTransform: $isLoading ? undefined : "translate3d(14%, 0, 0)",
      endTransform: $isLoading ? "translate3d(14%, 0, 0)" : undefined,
      opacity: $isLoading ? 1 : 0,
      direction: "forwards",
      transtion: theme.ts.moreFast,
    })};
  z-index: 4;
`;
