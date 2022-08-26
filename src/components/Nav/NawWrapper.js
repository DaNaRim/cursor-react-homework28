import styled from "styled-components"

export const NavWrapper = styled.div.attrs(() => ({
  id: "nav"
}))`

  width: 100%;
  height: fit-content !important;

  background-color: ${({theme}) => theme.$backgroundColors.$primary};
  padding: 2rem;
  
  display: flex;
  justify-content: center;
  
  ul {
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    li {
      margin: 0 0.5rem;

      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: ${({theme}) => theme.$textColors.$primary};

        &.active {
          text-decoration: underline;
        }
      }
    }
  }
`
