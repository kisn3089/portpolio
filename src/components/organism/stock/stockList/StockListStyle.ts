import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockListContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 8px;
  border-left: 1px solid ${theme.palette.gray};
`;

export const StandardDateContainer = styled.div<{ $hasValue: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  user-select: none;
  margin-bottom: 8px;

  svg {
    width: 34px;
    height: 34px;
    cursor: ${({ $hasValue }) => ($hasValue ? "default" : "pointer")};
    pointer-events: ${({ $hasValue }) => $hasValue && "none"};
    fill: ${theme.palette.white};
    transition: 0.2s ${theme.ts.moreFast};
    opacity: ${({ $hasValue }) => $hasValue && 0};
  }

  svg:hover {
    opacity: 0.4;
  }
`;

export const StandardDate = styled.span`
  font-size: ${theme.fontSize.small};
  letter-spacing: 1.1px;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    font-size: ${theme.fontSize.mini};
  }
`;
