import styled, { css } from "styled-components";

export const HeadlineStyles = css`
  font-family: var(--FNunito);
  font-weight: var(--FW7);
  color: var(--black);
  font-size: clamp(var(--H21), 5vw, var(--H32));
`;

export const StyledTitle = styled.h2`
  ${HeadlineStyles};
`;

export const StyledTitleSmall = styled.h3`
  ${HeadlineStyles};
  font-family: var(--FPoppins);
  font-size: clamp(var(--H16), 5vw, var(--H18));
`;

export const StyledParagraph = styled.p`
  ${HeadlineStyles};
  font-size: clamp(var(--P12), 5vw, var(--P14));
  color: var(--grey2);
  font-weight: var(--FW5);
`;

export const StyledParagraphContact = styled.p`
   ${HeadlineStyles};
  font-size: clamp(0.8rem, 5vw, 1.2rem);
  color: var(--grey3);
  font-weight: 500;
  font-family: var(--FPoppins);
`;

export const StyledLabel = styled.label`
  ${HeadlineStyles};
  font-weight: var(--FW4);
  font-size: var(--P14);
  color: var(--grey1);
`;
