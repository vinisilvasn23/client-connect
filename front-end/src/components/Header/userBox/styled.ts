import styled from "styled-components";

export const StyledUserBox = styled.div`
  position: relative;
  color: whitesmoke;
  .content_profile {
    display: flex;
  }
  .profile_icon {
    width: 3.6875rem;
    filter: invert(1);
    cursor: pointer;
  }
  .content_btn-profile {
    position: absolute;
    width: 130px;
    right: clamp(0.5rem, 8vw, 0.9rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;

  }
`;
