import styled from "styled-components"

const $imageSize = "3.5rem"

const UserStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 20rem;
  min-height: 6rem;
  padding: ${({theme}) => theme.$paddings.$primary};
  border-radius: ${({theme}) => theme.$borderRadius.$primary};
  background: ${({theme}) => theme.$backgroundColors.$tertiary};
  box-shadow: ${({theme}) => theme.$boxShadows.$primary};

  img {
    position: absolute;
    width: ${$imageSize};
    height: ${$imageSize};
    border-radius: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: ${({theme}) => theme.$fontsSize.$h2};
    margin-left: ${`calc(${$imageSize} + 1rem)`};
    text-transform: capitalize;
    word-break: break-all;
    color: ${({theme}) => theme.$textColors.$secondary}
  }
`

export default UserStyles