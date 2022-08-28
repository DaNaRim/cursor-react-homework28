import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import FormStyles from "../../../components/Form/FormStyles"
import InfoBlockStyles from "../../../components/InfoBlock/InfoBlockStyles"
import {getNewsAction, pendingUpdateNewsAction, updateNewsAction} from "../../../redux/newsReducer/newsActions"
import {getNews, updateNewsSelector} from "../../../redux/newsReducer/newsSelectors"
import DefaultPageWrapper from "../../DefaultPageWrapper/DefaultPageWrapper"
import {getNewsImagesDataList} from "../AddNewsPage/AddNewsPage"
import UpdateNewsPageStyles from "./UpdateNewsPageStyles"

const UpdateNewsPage = () => {
  const path = window.location.pathname.split("/")[2]

  const dispatch = useDispatch()
  const news = useSelector(getNews)

  const [currentNews, setCurrentNews] = useState({})

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [imageLink, setImageLink] = useState("")

  const {status, error} = useSelector(updateNewsSelector)

  useEffect(() => {
    dispatch(getNewsAction())
  }, [dispatch])

  useEffect(() => {
    if (!news) return

    // FIXME probably bug with comparing number and string
    const currentNews0 = news.find(item => item.id === path)

    setCurrentNews(currentNews0)

    setTitle(currentNews0.title)
    setText(currentNews0.text)
    setImageLink(currentNews0.imageLink)
  }, [dispatch, news, path])

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        dispatch(pendingUpdateNewsAction())
      }, 2000)
    }
  }, [dispatch, status])

  const handleSubmit = e => {
    e.preventDefault()
    const newNews = {
      ...currentNews,
      title,
      text,
      imageLink,
    }
    dispatch(updateNewsAction(newNews))
  }

  return (
    <DefaultPageWrapper>
      <UpdateNewsPageStyles>
        <InfoBlockStyles>
          {status === "loading" && <div className="info_block loading">Updating news...</div>}
          {status === "success" && <div className="info_block">News updated</div>}
          {status === "error"
            && <div className="info_block error">Failed to update news: <span>{error.message}</span></div>
          }
        </InfoBlockStyles>
        <FormStyles>
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
        </FormStyles>
      </UpdateNewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default UpdateNewsPage
