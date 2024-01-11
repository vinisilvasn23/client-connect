import styled from "styled-components";

export const StyleModal = styled.div`
  position: fixed;
  width: 90%;
  max-width: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  border: 2px solid gray;
  overflow: hidden;
  border-radius: 0.7rem;
  transition: transform 0.3s ease-in-out;

  form {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    gap: 0.8rem;
  }

  .modal_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-radius: 8px 8px 0 0;

    > h3 {
      color: var(--white);
    }
  }

  .closeButton {
    cursor: pointer;
  }

  .btn_close {
    background-color: var(--grey2);
    color: var(--white);
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
    font-size: var(--P16);
  }

  .password-visibility {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: var(--grey1);
  }
  .modal_header {
    background-color: var(--grey2);
  }
`;

export const StyleModalLogin = styled(StyleModal)``;

export const StyleModalRegister = styled(StyleModal)``;
export const StyledCreateContact = styled(StyleModal)``;
export const StyledEditProfile = styled(StyleModal)``;
export const StyledEditContact = styled(StyleModal)``;

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  .modal_container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    max-width: 21.25rem;
    height: auto;
    background-color: whitesmoke;
    border: 2px solid gray;
    border-radius: 1rem;
    overflow: hidden;
    padding: 1rem;
    text-align: center;
    z-index: 9999;
    justify-content: space-around;
    align-items: center;

    p {
      margin-bottom: 2rem;
    }
    .content_btn-del {
      display: flex;
      gap: 8px;
    }

    button {
      background-color: var(--red);
      color: var(--white);
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 0.9rem;
      margin-right: 0.5rem;
      max-width: 4rem;
    }

    button:hover {
      background-color: var(--dark-red);
    }
  }
`;
