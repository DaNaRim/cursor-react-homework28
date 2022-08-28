import {useEffect, useState} from "react"
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

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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
  }, [news, path])

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        dispatch(pendingUpdateNewsAction())
      }, 2000)
    }
  }, [dispatch, status])

  const handleSubmit = e => {
    e.preventDefault()

    setSubmitted(true)
    if (validateForm()) return

    const newNews = {
      ...currentNews,
      title,
      text,
      imageLink,
    }
    dispatch(updateNewsAction(newNews))
  }

  /**
   * @returns {boolean} - true if form is invalid, false otherwise
   */
  const validateForm = () => {
    const errors = {}

    if (title === "") errors.title = "Title is required"
    if (text === "") errors.text = "Text is required"
    // if (imageLink === "") errors.imageLink = "Image link is required"

    setErrors(errors)
    return Object.keys(errors).length !== 0
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
          <div>
            <input type="text"
                   placeholder="title"
                   title="title"
                   required
                   value={title}
                   onChange={e => setTitle(e.target.value)}/>

            {submitted && errors.title && <div className="error">{errors.title}</div>}
          </div>
          <div>
            <input type="text"
                   placeholder="text"
                   title="text"
                   required
                   value={text}
                   onChange={e => setText(e.target.value)}/>

            {submitted && errors.text && <div className="error">{errors.text}</div>}
          </div>
          <div>
            <input type="text"
                   placeholder="imageLink"
                   title="imageLink"
                   required
                   list="LinksToImage"
                   value={imageLink}
                   onChange={e => setImageLink(e.target.value)}/>

            {submitted && errors.imageLink && <div className="error">{errors.imageLink}</div>}
            {getNewsImagesDataList()}
          </div>
          <button type="submit" onClick={handleSubmit}>Update news</button>
        </FormStyles>
      </UpdateNewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default UpdateNewsPage
