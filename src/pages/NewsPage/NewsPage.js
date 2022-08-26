import React from "react"
import {useSelector} from "react-redux"
import News from "../../components/News/News"
import {getNewsAction} from "../../redux/newsReducer/newsActions"
import {getNews} from "../../redux/newsReducer/newsSelectors"
import {store} from "../../redux/store"
import DefaultPageWrapper from "../DefaultPageWrapper/DefaultPageWrapper"
import NewsPageStyles from "./NewsPageStyles"

store.dispatch(getNewsAction())

const NewsPage = () => {
  const news = useSelector(getNews)

  return (
    <DefaultPageWrapper>
      <NewsPageStyles>
        {news === null && <div>Fail to load news</div>}
        {news && !news.length && <div>No news</div>}
        {news && news.map(item => <News key={item.id} news={item}></News>)}
      </NewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default NewsPage
