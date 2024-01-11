import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem 2rem;
  transition: 0.3s;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
`;

export const ButtonWhite = styled(Button)`
  border: 0.125rem solid var(--white);
  color: var(--black);
  background-color: var(--white);
  border-radius: 1.25rem;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
  }
`;

export const ButtonTransparent = styled(Button)`
  border: 0.3125rem solid var(--white);
  color: var(--white);
  background-color: transparent;
`;

export const ButtonEdit = styled(Button)`
  padding: 0.5rem;
  background-color: var(--green);
  color: var(--white);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonAdd = styled(Button)`
  padding: 0.5rem;
  background-color: var(--blue);
  color: var(--white);
  margin-left: 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonRegister = styled(Button)`
  padding: 0.5rem 1rem;
  background-color: var(--blue);
  color: var(--white);

  &:hover {
    transform: scale(1.1);
  }
`;
