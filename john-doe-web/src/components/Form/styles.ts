import styled from "styled-components"

export const Container = styled.div``

export const TitleContainer = styled.div`
  padding-top: 2rem;

  .title {
    text-align: center;
    h2 {
      color: var(--text);
      font-size: 2.5rem;
      font-weight: 500;
    }
  }
`

export const Content = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`
