import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {updateNewsAction} from "../../redux/newsReducer/newsActions"
import {getNews} from "../../redux/newsReducer/newsSelectors"
import {getNewsImagesDataList} from "../AddNewsPage/AddNewsPage"
import DefaultPageWrapper from "../DefaultPageWrapper/DefaultPageWrapper"
import UpdateNewsPageStyles from "./UpdateNewsPageStyles"

const UpdateNewsPage = () => {
  const path = window.location.pathname.split("/")[2]

  const dispatch = useDispatch()
  const news = useSelector(getNews)

  let [currentNews, setCurrentNews] = useState({
    title: "",
    text: "",
    imageLink: "",
  })

  const [title, setTitle] = useState(currentNews.title)
  const [text, setText] = useState(currentNews.text)
  const [imageLink, setImageLink] = useState(currentNews.imageLink)

  useEffect(() => {
    if (!news) return

    // FIXME probably bug with comparing number and string
    setCurrentNews(news.find(item => item.id === path))

    setTitle(currentNews.title)
    setText(currentNews.text)
    setImageLink(currentNews.imageLink)
  }, [currentNews, news])

  const handleSubmit = e => {
    e.preventDefault()
    const newNews = {
      ...currentNews,
      title,
      text,
      imageLink,
    }
    dispatch(updateNewsAction(newNews))

    alert("News updated")
  }

  return (
    <DefaultPageWrapper>
      <UpdateNewsPageStyles>
        <form>
          <h1>Update news</h1>
          <input type="text" placeholder="title" required value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="text" placeholder="text" required value={text} onChange={e => setText(e.target.value)}/>
          <input type="text"
                 placeholder="imageLink"
                 required
                 list="LinksToImage"
                 value={imageLink}
                 onChange={e => setImageLink(e.target.value)}/>
          {getNewsImagesDataList()}

          <button type="submit" onClick={handleSubmit}>Update news</button>
        </form>
      </UpdateNewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default UpdateNewsPage
