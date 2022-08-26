import styled from "styled-components"

const UserStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 10rem;
  height: 5rem;
  background-color: red;

  img {
    position: absolute;
    margin-left: 0.5rem;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
  
  h2 {
    margin-left: 3rem;
  }
`

export default UserStyles