import { FaSpinner } from "react-icons/fa";
import {
  ButtonTransparent,
  ButtonWhite,
  ButtonEdit,
  ButtonAdd,
  ButtonRegister,
} from "./styled";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};

export const WhiteButton = ({ text, disabled }: ButtonProps) => (
  <ButtonWhite type="submit" disabled={disabled}>
    {disabled ? <FaSpinner className="loading-spinner" /> : text}
  </ButtonWhite>
);

export const RegisterButton = ({ text, disabled }: ButtonProps) => (
  <ButtonRegister type="submit" disabled={disabled}>
    {disabled ? <FaSpinner className="loading-spinner" /> : text}
  </ButtonRegister>
);

export const TransparentButton = ({ text }: ButtonProps) => (
  <ButtonTransparent type="submit">{text}</ButtonTransparent>
);

export const addButton = ({ text }: ButtonProps) => (
  <ButtonAdd type="submit">{text}</ButtonAdd>
);

export const EditButton = ({ text }: ButtonProps) => (
  <ButtonEdit type="submit">{text}</ButtonEdit>
);
