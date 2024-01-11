import styled from "styled-components";

export const StyledHome = styled.div`
  .content__apresentation {
    margin-top: 2rem;
    text-align: center;
    padding-left: clamp(1rem, 8vw, 10rem);
    padding-right: clamp(1rem, 8vw, 10rem);
    margin-bottom: 2rem;
  }

  .content_details {
    div {
      background-color: var(--grey2);
      margin-top: 1rem;
      border-radius: 0.5rem;
      padding: 1.5rem;
      > p,
      h3 {
        color: var(--white);
        padding: 0.5rem;
      }
    }
  }
`;

export const StyledCard = styled.div`
  padding: 1rem;
  border: 2px solid var(--grey1);
  color: var(--white);
  border-radius: 0.5rem;
  margin-top: 1.3rem;
  background-color: var(--grey2);

  > p,
  h3 {
    color: var(--white);
  }
`;

export const StyledContent = styled.div`
  padding-left: clamp(1rem, 8vw, 10rem);
  padding-right: clamp(1rem, 8vw, 10rem);
  margin-bottom: 2rem;
`;
