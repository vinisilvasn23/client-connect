import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { ContainerInput, StyledInput } from "./styled";
import { StyledLabel } from "../../styles/typography";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message?: string } | string;
  appendIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, appendIcon, ...rest }, ref) => {
    const hasError = !!error;

    return (
      <ContainerInput>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput ref={ref} hasError={hasError} {...rest} />
        {appendIcon && <div>{appendIcon}</div>}
        {hasError && typeof error === "object" ? <p>{error.message}</p> : null}
      </ContainerInput>
    );
  }
);
