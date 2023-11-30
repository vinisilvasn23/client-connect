import styled from "styled-components";

export const CustomFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  flex-direction: column;
  background-color: #000000;
  box-sizing: border-box;

  .logoContainer {
    gap: 1.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    color: #ffffff;
    font-size: clamp(1rem, 6vw, 2rem);
    font-weight: bold;

    h2 {
      margin-bottom: 10px;
    }
  }

  .separator {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 0px;
    margin: 2rem 0px;
    border-color: #595959;
    border-style: solid;
    border-width: 1px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
  }

  .infoContainer {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #d9d9d9;

    .iconContainerIcons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;


      .icon {
        fill: #d9d9d9;
        width: 24px;
        height: 24px;
        margin-top: 1rem;
      }
    }
  }
  @media (min-width: 650px) {
    .infoContainer {
      flex-direction: row;
    }
    .icon {
      margin-top: 0;
    }
  }
`;
