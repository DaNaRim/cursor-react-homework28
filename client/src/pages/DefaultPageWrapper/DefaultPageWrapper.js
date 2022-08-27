import React from "react"
import Nav from "../../components/Nav/Nav"
import DefaultPageWrapperStyles from "./DefaultPageWrapperStyles"

const DefaultPageWrapper = (props) => {
  return (
    <DefaultPageWrapperStyles>
      <Nav/>
      {props.children}
    </DefaultPageWrapperStyles>
  )
}

export default DefaultPageWrapper
