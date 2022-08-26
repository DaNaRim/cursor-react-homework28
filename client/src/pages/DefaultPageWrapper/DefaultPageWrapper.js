import React from "react"
import Nav from "../../components/Nav/Nav"

const DefaultPageWrapper = (props) => {
  return (
    <main>
      <Nav/>
      {props.children}
    </main>
  )
}

export default DefaultPageWrapper
