import styled from "styled-components";

export const ContainerInfos = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ContainerError = styled.main`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerInfosHeader = styled.div`
   display: flex;
    flex-direction: column;
    gap: 0.2rem;

    @media(max-width: 980px) {
      align-items: center;
    }
    
    p {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
      color: ${({ theme }) => theme.colors.text.secondary};
    }
    h2 {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
      color: ${({ theme }) => theme.colors.text.primary};
    }
`