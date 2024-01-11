import styled, { css } from "styled-components";

interface InputProps {
    hasError?: boolean;
  }
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<InputProps>`
  background-color: var(--grey);
  border: 1px solid transparent;
  height: 3rem;
  padding-left: 1rem;
  color: var(--grey2);
  font-weight: var(--FW600);
  font-size: var(--P16);
  border-radius: 0.3125rem;

  ::placeholder {
    color: var(--grey2);
  }
  :focus {
    border: 1px solid var(--grey2);
  }

  ${({ hasError }) => {
    if (hasError) {
      return css`
        border: 1px solid var(--red);
      `;
    }
  }}
`;