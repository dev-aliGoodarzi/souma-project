// StyledComponents
import styled from "styled-components";
// StyledComponents

// Constants
import { constants } from "../../Constants/constants";
// Constants

// Types
import {
  T_BoxSizing,
  T_Flex,
  T_Gap,
  T_Height,
  T_Margin,
  T_Padding,
  T_Width,
} from "./Types";
// Types

export const LayoutContainer = styled.div<
  Partial<T_Width & T_BoxSizing & T_Height & T_Flex>
>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"}
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
    display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items: ${({ alignItems }) => alignItems || "center"};
`;

export const FullWidthContainer = styled.div<Partial<T_Width>>`
  width: ${({ width }) => width || "100%"};
`;

export const WithMdPadding = styled.div<
  Partial<T_Flex & T_Padding & T_Width & T_BoxSizing>
>`
  padding: ${({ padding }) => padding || "6px"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: ${({ width }) => width || "100%"};
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
`;

export const Button1 = (
  simpleProps: Record<string, string> = {
    background: constants.primaryColor,
    color: "#fff",
  }
) =>
  styled.button`
    background-color: ${simpleProps.background};
    color: ${simpleProps.color};
    padding: 8px 24px;
    border-radius: 6px;
  `;

export const Container = (simpleProps?: Record<string, string>) => styled.div<
  Partial<T_Flex & T_Width & T_Gap>
>`
  display: ${({ display }) => display || simpleProps?.display || "flex"};
  flex-direction: ${({ flexDirection }) =>
    flexDirection || simpleProps?.flexDirection || "row"};
  align-items: ${({ alignItems }) =>
    alignItems || simpleProps?.alignItems || "center"};
  justify-content: ${({ justifyContent }) =>
    justifyContent || simpleProps?.justifyContent || "center"};
  gap: ${({ gap }) => gap || simpleProps?.gap || "0px"};
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
`;

export const FullWidthText = styled.p<Partial<T_Margin & T_Width>>`
  width: ${({ width }) => width || "100%"};
  margin-top: ${({ marginT }) => marginT || "0px"};
`;
