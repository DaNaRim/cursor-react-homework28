import styled from "styled-components"

const UpdateNewsPageStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    margin-top: ${({theme}) => theme.$margins.$component};

    &:first-child {
      margin-top: 0;
    }
  }

  .info_block {
    padding: ${({theme}) => theme.$paddings.$primary};
    border: 0.1rem solid ${({theme}) => theme.$backgroundColors.$primary};
    background-color: ${({theme}) => theme.$backgroundColors.$tertiary};

    &.error {
      border-color: ${({theme}) => theme.$textColors.$error};

      span {
        color: ${({theme}) => theme.$textColors.$error};
        font-style: italic;
      }
    }
  }
`

export default UpdateNewsPageStyles
