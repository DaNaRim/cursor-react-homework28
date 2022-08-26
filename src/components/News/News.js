import React from "react"
import NewsStyles from "./NewsStyles"

const News = (data) => {
  const {title, text, imageLink, dateCreated} = data.news

  return (
    <NewsStyles>
      <h1>{title}</h1>
      <p>{text}</p>
      {imageLink && <img src={imageLink} alt=""/>}
      <p>{formatDate(dateCreated)}</p>
    </NewsStyles>
  )
}

export default News

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("en-US", options)
}
