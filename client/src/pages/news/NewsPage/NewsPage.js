import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import InfoBlockStyles from "../../../components/InfoBlock/InfoBlockStyles"
import News from "../../../components/News/News"
import {getNewsAction} from "../../../redux/newsReducer/newsActions"
import {getNews, getNewsSelector} from "../../../redux/newsReducer/newsSelectors"
import DefaultPageWrapper from "../../DefaultPageWrapper/DefaultPageWrapper"
import NewsPageStyles from "./NewsPageStyles"

const NewsPage = () => {
  const dispatch = useDispatch()

  const news = useSelector(getNews)
  const {status, error} = useSelector(getNewsSelector)

  useEffect(() => {
    dispatch(getNewsAction())
  }, [dispatch])

  return (
    <DefaultPageWrapper>
      <NewsPageStyles>
        <InfoBlockStyles>
          {status === "loading" && <div className="info_block loading">Loading...</div>}
          {status === "error"
            && <div className="info_block error">Failed to load news: <span>{error.message}</span></div>
          }
          {status === "success" && news.length === 0 && <div className="info_block info">No news</div>}
        </InfoBlockStyles>

        <div className="news_wrapper">
          {status === "success" && news.length > 0 && news.map(item => <News key={item.id} news={item}></News>)}
        </div>
      </NewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default NewsPage
