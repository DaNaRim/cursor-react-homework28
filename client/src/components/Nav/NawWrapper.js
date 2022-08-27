import styled from "styled-components"

export const NavWrapper = styled.nav.attrs(() => ({
  id: "main_nav",
}))`

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({theme}) => theme.$backgroundColors.$primary};

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
