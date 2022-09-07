import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`