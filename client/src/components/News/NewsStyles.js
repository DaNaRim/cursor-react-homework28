import styled from "styled-components"

const NewsStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20rem;

  padding: ${({theme}) => theme.$paddings.$primary};
  border-radius: ${({theme}) => theme.$borderRadius.$primary};
  background: ${({theme}) => theme.$backgroundColors.$tertiary};
  box-shadow: ${({theme}) => theme.$boxShadows.$primary};

  & > * {
    margin-top: ${({theme}) => theme.$margins.$innerBlock};
    color: ${({theme}) => theme.$textColors.$secondary};

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: ${({theme}) => theme.$fontsSize.$h1};

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .text {
    font-size: ${({theme}) => theme.$fontsSize.$secondary};
    word-break: break-all;
  }

  .date {
    font-size: ${({theme}) => theme.$fontsSize.$secondary};
    color: ${({theme}) => theme.$textColors.$tertiary};
  }

  img {
    width: 100%;
    height: 10rem;
    border-radius: ${({theme}) => theme.$borderRadius.$secondary};
    object-fit: cover;
  }
`

export default NewsStyles
