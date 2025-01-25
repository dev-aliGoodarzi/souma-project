// StyledComponents
import styled from "styled-components";
import { constants } from "../../Constants/constants";
// StyledComponents

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const FullWidthContainer = styled.div`
  width: 100%;
`;

export const WithMdPadding = styled.div`
  padding: 6px;
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

export const Container = (simpleProps?: Record<string, string>) => styled.div<{
  gap?: string;
  flexDirection?: string;
  justifyContent?: string;
  width?: string;
}>`
  display: ${simpleProps?.display || "flex"};
  flex-direction: ${({ flexDirection }) =>
    flexDirection || simpleProps?.flexDirection || "row"};
  align-items: ${simpleProps?.alignItems || "center"};
  justify-content: ${({ justifyContent }) =>
    justifyContent || simpleProps?.justifyContent || "center"};
  width: ${simpleProps?.width || "100%"};
  gap: ${({ gap }) => gap || simpleProps?.gap || "0px"};
  width: ${({ width }) => width || simpleProps?.width || "100%"};
`;

export const FullWidthText = styled.p<{
  marginT?: string;
}>`
  width: 100%;
  margin-top: ${({ marginT }) => marginT || "0px"};
`;
