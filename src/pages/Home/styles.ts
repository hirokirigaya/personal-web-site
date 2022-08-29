import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url("/images/line.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FirstSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  .title-first-section {
    display: flex;
    align-items: center;

    h1 {
      font-size: ${({ theme }) => theme.fontSizes["5xl"]};
      color: ${({ theme }) => theme.colors.text.primary};
      span {
        color: ${({ theme }) => theme.colors.yellow[500]};
      }
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .about-me {
      font-size: ${({ theme }) => theme.fontSizes["xl"]};
      color: ${({ theme }) => theme.colors.text.tertiary};
    }

    .navgation-personal-web {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: ${({ theme }) => theme.fontSizes["xs"]};
        color: ${({ theme }) => theme.colors.text.tertiary};
      }
      .next-section {
        transition: all 200ms ease-in-out;

        &:hover {
          svg {
            transform: rotate(-5deg);
            transform: translate(0px, 10px);
          }
        }

        svg {
          transition: all 200ms ease-in-out;
          font-size: ${({ theme }) => theme.fontSizes["3xl"]};
          color: ${({ theme }) => theme.colors.yellow[500]};
        }
      }
    }
  }
`;
