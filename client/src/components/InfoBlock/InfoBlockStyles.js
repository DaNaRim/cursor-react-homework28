import styled from "styled-components"

const InfoBlockStyles = styled.div.attrs({
  className: "info_block_wrapper",
})`

  .info_block {
    margin-bottom: ${({theme}) => theme.$margins.$component};
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

export default InfoBlockStyles
