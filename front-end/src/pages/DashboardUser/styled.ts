import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  min-height: 50%;
  margin-top: 1rem;
  padding: clamp(1rem, 4vw, 4rem);

  .content_title-dashboard{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button{
      max-width: 18.75rem;
      font-size: clamp(var(--P12), 5vw, var(--P17));
    }
  }
  .content_not-contact{
    display: flex;
    margin-top: 1.5rem;
    background-color: var(--grey1);
    border-radius: 0.625rem;
    height: 7rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    h3{
      color: var(--white);
      font-size: clamp(var(--H12), 4vw, var(--H18));
    }
  }
  .content_pagination{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
`;
