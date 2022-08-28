import {darken} from "polished"
import styled from "styled-components"

const FormStyles = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  padding: ${({theme}) => `calc(${theme.$paddings.$primary} * 2)`} ${({theme}) => theme.$paddings.$primary};
  border-radius: ${({theme}) => theme.$borderRadius.$primary};
  background: ${({theme}) => theme.$backgroundColors.$tertiary};
  box-shadow: ${({theme}) => theme.$boxShadows.$primary};

  h1 {
    font-size: ${({theme}) => theme.$fontsSize.$h1};
    color: ${({theme}) => theme.$textColors.$secondary};
  }

  input, button {
    width: 100%;
    padding: 0.3rem;
    border: none;
    border-radius: ${({theme}) => theme.$borderRadius.$secondary};
    background-color: ${({theme}) => theme.$backgroundColors.$quaternary};

    &:focus {
      outline: none;
      background-color: ${({theme}) => darken(0.1, theme.$backgroundColors.$quaternary)};
    }
  }

  button:hover {
    background-color: ${({theme}) => darken(0.1, theme.$backgroundColors.$quaternary)};
  }

  & > * {
    margin-top: ${({theme}) => theme.$margins.$innerBlock};
    color: ${({theme}) => theme.$textColors.$secondary};

    &:first-child {
      margin-top: 0;
    }
  }
`

export default FormStyles;
