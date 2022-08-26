import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {updateNewsAction} from "../../redux/newsReducer/newsActions"
import {getNews} from "../../redux/newsReducer/newsSelectors"
import DefaultPageWrapper from "../DefaultPageWrapper/DefaultPageWrapper"
import UpdateNewsPageStyles from "./UpdateNewsPageStyles"

const UpdateNewsPage = () => {
  const dispatch = useDispatch()

  const news = useSelector(getNews, () => true)

  // FIXME probably bug with comparing number and string
  const currentNews = news.find(item => item.id === window.location.pathname.split("/")[2])

  const [title, setTitle] = React.useState(currentNews.title)
  const [text, setText] = React.useState(currentNews.text)
  const [imageLink, setImageLink] = React.useState(currentNews.imageLink)

  const handleSubmit = e => {
    e.preventDefault()
    const newNews = {
      ...currentNews,
      title,
      text,
      imageLink
    }
    dispatch(updateNewsAction(newNews))

    alert("News updated")
  }

  return (
    <DefaultPageWrapper>
      <UpdateNewsPageStyles>
        <form>
          <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="text" placeholder="text" value={text} onChange={e => setText(e.target.value)}/>
          <input type="text" placeholder="imageLink" value={imageLink} onChange={e => setImageLink(e.target.value)}/>

          <button type="submit" onClick={handleSubmit}>Update news</button>
        </form>
      </UpdateNewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default UpdateNewsPage
