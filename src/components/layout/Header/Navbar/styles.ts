import styled from "styled-components";

export const Container = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  h1 {
    z-index: 888;
    user-select: none;
    mix-blend-mode: difference;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.default.white};
      transition: filter 200ms ease-in-out;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;
export const ButtonNav = styled.div`
  display: flex;
  gap: 0.2rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  transition: all 200ms ease-in-out;
  z-index: 999;
  mix-blend-mode: difference;

  &:hover {
    gap: 0;

    span {
      height: 3px;
    }
  }
  span {
    width: 35px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.default.white};
  }
`;

export const ContainerNavgation = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  visibility: hidden;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.active {
    visibility: visible;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0;
    transition: all 1.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: ${({ theme }) => theme.colors.default.black800};
    z-index: 887;
  }

  .container-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 7rem;
    list-style: none;

    .navbar-link.on {
      padding-left: 10px;
      opacity: 0;

      a {
        font-size: ${({ theme }) => theme.fontSizes["5xl"]};
        color: ${({ theme }) => theme.colors.default.white};
        text-decoration: none;
        transition: filter 200ms ease-in-out;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
    .navbar-link {
      padding-left: 10px;
      opacity: 0;

      a {
        font-size: ${({ theme }) => theme.fontSizes["5xl"]};
        color: ${({ theme }) => theme.colors.text.secondary};
        text-decoration: none;
        transition: filter 200ms ease-in-out;

        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }
`;
