import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 2rem;
  padding-right: 2rem;
  color: black;
  border-bottom: 2px solid var(--grey);
  background-color: var(--white);
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: var(--black);
  .box_capy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }

  .content_btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    margin-left: 1rem;

    button {
    padding: 0.3125rem 0.625rem;
    border-radius: 0.625rem;
    border: none;
    cursor: pointer;
    background-color: var(--white);
    transition: background-color 0.3s ease;
    color: var(--grey2);
    font-size: clamp(var(--P12), 5vw, var(--P17));

    &:hover {
      background-color: var(--blue);
      color: var(--white);
    }
  }
  }

  .logo-cc {
    max-width: 4.175rem;
    margin: 0;
  }

  @media (min-width: 350px) {
    .content_btn{
      flex-direction: row;
    }
  }
`;

