import styled from "styled-components"

const DefaultPageWrapperStyles = styled.main`
  & * {
    font-family: ${({theme}) => theme.$fonts.$primary};
  }
  
  nav {
    height: ${({theme}) => theme.$navHeight};
  }

  & > div {
    min-height: ${({theme}) => `calc(100% - ${theme.$navHeight})`};
    background-color: ${({theme}) => theme.$backgroundColors.$secondary};
    padding: 2rem 0 3rem;
  }
`

export default DefaultPageWrapperStyles
