import styled from "styled-components";

export const StyledListContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--grey1);
  border-radius: 0.625rem;
  margin-top: 2rem;

  h2 {
    font-size: 1.5rem;
    color: var(--white);
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .contact_card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 95%;
    justify-content: space-between;

    .card {
      background-color: whitesmoke;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      width: 22rem;
    }

    button {
      margin-top: 0.625rem;
      margin-bottom: 1rem;
      background-color: var(--grey1);
      color: var(--white);
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      margin-right: 0.5rem;
      max-width: 15rem;

      &:last-child {
        margin-right: 0;
      }
    }

    button:hover {
      background-color: var(--grey2);
    }
  }
`;
