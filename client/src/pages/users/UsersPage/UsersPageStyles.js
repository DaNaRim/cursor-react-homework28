import styled from "styled-components"

const UsersPageStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .users_wrapper > * {
    margin-top: ${({theme}) => theme.$margins.$component};

    &:first-child {
      margin-top: 0;
    }
  }
`

export default UsersPageStyles
