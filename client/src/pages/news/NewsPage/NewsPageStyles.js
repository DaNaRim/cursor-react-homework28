import styled from "styled-components"

const NewsPageStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .news_wrapper > * {
    margin-top: ${({theme}) => theme.$margins.$component};

    &:first-child {
      margin-top: 0;
    }
  }
`

export default NewsPageStyles
