import React from "react"
import {useDispatch} from "react-redux"
import {addNewsAction} from "../../redux/newsReducer/newsActions"
import DefaultPageWrapper from "../DefaultPageWrapper/DefaultPageWrapper"
import AddNewsPageStyles from "./AddNewsPageStyles"

const AddNewsPage = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = React.useState("")
  const [text, setText] = React.useState("")
  const [imageLink, setImageLink] = React.useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const news = {
      title,
      text,
      imageLink,
    }

    dispatch(addNewsAction(news))
    setTitle("")
    setText("")
    setImageLink("")

    alert("News added")
  }


  return (
    <DefaultPageWrapper>
      <AddNewsPageStyles>
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
