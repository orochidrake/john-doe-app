import styled from 'styled-components'

export const InputContainer = styled.div`
    display: grid;
    margin-top: 1.5rem;
    width: 25vw;
    margin-left: auto;
    margin-right: auto;

  small {
    font-size: 1rem;
    font-weight: 300;
    color: var(--text);
  }
  input {
    justify-self: center;
    font-size: 1.25rem;
    width: 100%;
    height: 2rem;
    padding: 1rem
  }
  input[type="color" i] {
    padding: 0;
    width: 20%;
    justify-self: flex-start;
    &:hover{
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Error = styled.small`
  color: var(--red);
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
