import styled from "styled-components";

interface ContainerProps {
  dropShadow: string
}
export const Container = styled.div<ContainerProps>`  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width:  600px;
  height: 320px;
  box-shadow: 1rem 1rem 0rem ${props => props.dropShadow};

  @media (max-width: 980px) {
    width: 550px;
    height: 270px;
  }
  @media (max-width: 640px) {
    width: 480px;
    height: 230px;
  }
  @media (max-width: 500px) {
    width: 350px;
    height: 180px;
  }
  .slider {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
  }

  .active {
    opacity: 1;
  }

`