import styled from "styled-components"

const NewsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  background-color: greenyellow;
  margin-top: 1rem;

  padding: 1rem;
  
  & > * {
    margin-top: 1rem;
  }
  
  & > h1 {
    font-size: 1.5rem;
    
    & > a {
      text-decoration: none;
      color: inherit;
    }
  }
  
  & > img {
    width: 16rem;
    height: 8rem;
    object-fit: cover;
  }
`

export default NewsStyles
