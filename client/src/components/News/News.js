import React from "react"
import {Link} from "react-router-dom"
import NewsStyles from "./NewsStyles"

const News = (data) => {
  const {id, title, text, imageLink, dateCreated} = data.news

  return (
    <NewsStyles>
      <h1>
        <Link to={`/news/${id}`}>{title}</Link>
      </h1>
      <p className="text">{text}</p>
      {imageLink && <img src={imageLink} alt=""/>}
      <p className="date">{formatDate(dateCreated)}</p>
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
