import styled from "styled-components";


export const CustomLoader = styled.div`
    width:50px;
    height:24px;
    background: 
      radial-gradient(circle closest-side,#000000 90%,#0000) 0%   50%,
      radial-gradient(circle closest-side,#000000 90%,#0000) 50%  50%,
      radial-gradient(circle closest-side,#000000 90%,#0000) 100% 50%;
    background-size:calc(100%/3) 12px;
    background-repeat: no-repeat;
    animation:d3 1s infinite linear;
  
  @keyframes d3 {
      20%{background-position:0%   0%, 50%  50%,100%  50%;}
      40%{background-position:0% 100%, 50%   0%,100%  50%;}
      60%{background-position:0%  50%, 50% 100%,100%   0%;}
      80%{background-position:0%  50%, 50%  50%,100% 100%;};
  }
  `;

  export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  `
