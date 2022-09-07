import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url("/images/line.svg");
  background-repeat: no-repeat;
  background-size: cover;
  gap: 6rem;
  margin-bottom: 10rem;
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: column;

  .container-main-first {
    max-width: 1120px;
    margin: 5rem auto 0 auto;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;

    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .title-first-section {
      display: flex;
      align-items: center;

      h1 {
        font-size: ${({ theme }) => theme.fontSizes["5xl"]};
        color: ${({ theme }) => theme.colors.text.primary};

        @media (max-width: 980px) {
          font-size: ${({ theme }) => theme.fontSizes["4xl"]};
        }

        span {
          color: ${({ theme }) => theme.colors.yellow[500]};
        }
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      min-height: 230px;
      height: 100%;
      justify-content: space-between;

      .about-me {
        font-size: ${({ theme }) => theme.fontSizes["xl"]};
        color: ${({ theme }) => theme.colors.text.tertiary};

        @media (max-width: 980px) {
          font-size: ${({ theme }) => theme.fontSizes.md};
        }
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
  }

  .icons-networks {
    padding: 0 20px;
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 6rem;
    display: flex;
    width: 100%;
    gap: 1rem;

    @media (max-width: 980px) {
      justify-content: center;
    }

    a {
      svg {
        font-size: ${({ theme }) => theme.fontSizes["2xl"]};
        color: ${({ theme }) => theme.colors.text.primary};
        transition: all 200ms ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.text.secondary};
        }
      }
    }
  }
`;

export const SecondSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  .recent-projects {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .box-project {
      height: 100%;

      @media (max-width: 1024px) {
        width: 400px;
      }

      @media (max-width: 980px) {
        width: 100%;
      }

      .item {
        min-height: 220px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;

        .content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;

          .title-project {
            font-size: ${({ theme }) => theme.fontSizes["xl"]};
            color: ${({ theme }) => theme.colors.text.tertiary};
          }
          .desc-project {
            font-size: ${({ theme }) => theme.fontSizes["sm"]};
            color: ${({ theme }) => theme.colors.text.secondary};
          }
        }
        .link-repo {
          display: flex;
          width: 100%;
          justify-content: flex-end;

          a {
            color: ${({ theme }) => theme.colors.text.tertiary};
            font-size: ${({ theme }) => theme.fontSizes["2xl"]};
            transition: all 200ms ease-in-out;
            display: flex;

            svg {
              color: ${({ theme }) => theme.colors.text.tertiary};
              font-size: ${({ theme }) => theme.fontSizes["2xl"]};
            }

            &:hover {
              transform: rotate(-15deg);
            }
          }
        }
      }
    }
  }

  .more-projects {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    a {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: ${({ theme }) => theme.fontSizes["xl"]};
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: all 200ms ease-in-out;
      gap: 0.2rem;

      svg {
        transition: all 200ms ease-in-out;
      }

      &:hover {
        svg {
          transform: rotate(-15deg);
        }
      }
    }
  }
`;

export const ThirdSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  .about-me {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors.text.secondary};

      a {
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 500;
        transition: all 200ms ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.blue[500]};
        }
      }
    }
  }
`;
