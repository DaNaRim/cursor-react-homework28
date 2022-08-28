import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addNewsAction, pendingAddNewsAction} from "../../../redux/newsReducer/newsActions"
import {addNewsSelector} from "../../../redux/newsReducer/newsSelectors"
import DefaultPageWrapper from "../../DefaultPageWrapper/DefaultPageWrapper"
import AddNewsPageStyles from "./AddNewsPageStyles"

const AddNewsPage = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = React.useState("")
  const [text, setText] = React.useState("")
  const [imageLink, setImageLink] = React.useState("")

  const {status, error} = useSelector(addNewsSelector)

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
    const news = {
      title,
      text,
      imageLink,
    }
    dispatch(addNewsAction(news))
  }

  return (
    <DefaultPageWrapper>
      <AddNewsPageStyles>
        {status === "loading" && <div className="info_block loading">Adding news...</div>}
        {status === "success" && <div className="info_block">News added</div>}
        {status === "error"
          && <div className="info_block error">Failed to add new news: <span>{error.message}</span></div>
        }
        <form>
          <h1>Add news</h1>
          <input type="text"
                 placeholder="title"
                 title="Title"
                 required
                 value={title}
                 onChange={e => setTitle(e.target.value)}/>
          <input type="text"
                 placeholder="text"
                 title="Text"
                 required
                 value={text}
                 onChange={e => setText(e.target.value)}/>
          <input type="text"
                 placeholder="imageLink"
                 title="Image link"
                 required
                 list="LinksToImage"
                 value={imageLink}
                 onChange={e => setImageLink(e.target.value)}/>
          {getNewsImagesDataList()}

          <button type="submit" onClick={handleSubmit}>Add news</button>
        </form>
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
