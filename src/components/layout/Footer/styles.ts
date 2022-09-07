import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.default.black};
  height: 100%;
  min-height: 250px;
  text-align: center;
  
  p.copyright {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding-bottom: 10px;
  }
  
  .content-footer {
    min-height: 250px;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
	  height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1280px) {
      padding: 0 20px;
    }

    @media(max-width: 980px) {
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      padding: 2rem;
    }

    .contact {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 1rem;

    @media(max-width: 980px) {
      text-align: center;
    }
      p {
        font-size: ${({ theme }) => theme.fontSizes["3xl"]};
        color: ${({ theme }) => theme.colors.text.tertiary};
        font-weight: 700;

        span {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        }

      }

      a {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: ${({ theme }) => theme.fontSizes.md};
        text-decoration: none;
        transition: filter .2s ease-in-out;

        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }

`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  ul {
    text-align: left;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    li {
      p {
        color: ${({ theme }) => theme.colors.text.tertiary};
        font-size: ${({ theme }) => theme.fontSizes.md};
      }

      a {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: ${({ theme }) => theme.fontSizes.md};
        text-decoration: none;
        font-weight: 600;
        transition: filter .2s ease-in-out;

        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }
`