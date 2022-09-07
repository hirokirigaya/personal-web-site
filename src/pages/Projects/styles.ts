import styled from "styled-components";

interface TitleFirstSectionProps {
  color: string;
}

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
  max-width: 1120px;
  margin: 5rem auto 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const TitleFirstSection = styled.h1<TitleFirstSectionProps>`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  color: ${({ color }) => color};
`;

export const SecondSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 20px;

  .box-repositories {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .container-repositories {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      @media (max-width: 980px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .content-box {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          color: ${({ theme }) => theme.colors.text.tertiary};
        }

        .data-repository {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;

          p {
            color: ${({ theme }) => theme.colors.text.tertiary};
          }

          a {
            transition: all 0.2s ease-in-out;
            svg {
              font-size: ${({ theme }) => theme.fontSizes.xl};
              color: ${({ theme }) => theme.colors.text.tertiary};
              transition: all 0.2s ease-in-out;
            }

            &:hover {
              svg {
                transform: translate(5px);
              }
            }
          }
        }
      }
    }
    .paginate {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      color: ${({ theme }) => theme.colors.text.primary};

      button {
        border: none;
        background: transparent;
        display: flex;
        align-items: center;

        svg {
          color: ${({ theme }) => theme.colors.text.primary};
          font-size: ${({ theme }) => theme.fontSizes.xl};
        }
      }
    }
  }
`;
