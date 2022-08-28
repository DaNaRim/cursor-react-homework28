import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import FormStyles from "../../../components/Form/FormStyles"
import InfoBlockStyles from "../../../components/InfoBlock/InfoBlockStyles"
import {addNewsAction, pendingAddNewsAction} from "../../../redux/newsReducer/newsActions"
import {addNewsSelector} from "../../../redux/newsReducer/newsSelectors"
import DefaultPageWrapper from "../../DefaultPageWrapper/DefaultPageWrapper"
import AddNewsPageStyles from "./AddNewsPageStyles"

const AddNewsPage = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [imageLink, setImageLink] = useState("")

  const {status, error} = useSelector(addNewsSelector)

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (status === "success") {
      setTitle("")
      setText("")
      setImageLink("")

      setTimeout(() => {
        dispatch(pendingAddNewsAction())
      }, 2000)
    }
  }, [dispatch, status])


  const handleSubmit = e => {
    e.preventDefault()

    setSubmitted(true)
    if (validateForm()) return

    const news = {
      title,
      text,
      imageLink,
    }
    dispatch(addNewsAction(news))
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
      <AddNewsPageStyles>
        <InfoBlockStyles>
          {status === "loading" && <div className="info_block loading">Adding news...</div>}
          {status === "success" && <div className="info_block">News added</div>}
          {status === "error"
            && <div className="info_block error">Failed to add new news: <span>{error.message}</span></div>
          }
        </InfoBlockStyles>
        <FormStyles>
          <h1>Add news</h1>
          <div>
            <input type="text"
                   placeholder="title"
                   title="Title"
                   required
                   value={title}
                   onChange={e => setTitle(e.target.value)}/>

            {submitted && errors.title && <div className="error">{errors.title}</div>}
          </div>
          <div>
            <input type="text"
                   placeholder="text"
                   title="Text"
                   required
                   value={text}
                   onChange={e => setText(e.target.value)}/>

            {submitted && errors.text && <div className="error">{errors.text}</div>}
          </div>
          <div>
            <input type="text"
                   placeholder="imageLink"
                   title="Image link"
                   required
                   list="LinksToImage"
                   value={imageLink}
                   onChange={e => setImageLink(e.target.value)}/>

            {submitted && errors.imageLink && <div className="error">{errors.imageLink}</div>}
            {getNewsImagesDataList()}
          </div>
          <button type="submit" onClick={handleSubmit}>Add news</button>
        </FormStyles>
      </AddNewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default AddNewsPage

export function getNewsImagesDataList() {
  return (
    <datalist id="LinksToImage">
      <option value="https://img.theculturetrip.com/wp-content/uploads/2018/03/1973245.jpg">Mountains</option>
      <option value="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg">
        River
      </option>
      <option value="https://static.photocdn.pt/images/articles/2022/01/12/The_Keys_to_Beautiful_Landscape_Photography.jpg">
        Forest
      </option>
    </datalist>
  )
}
