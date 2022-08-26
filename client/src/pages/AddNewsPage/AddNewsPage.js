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
      imageLink
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
          <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="text" placeholder="text" value={text} onChange={e => setText(e.target.value)}/>
          <input type="text" placeholder="imageLink" value={imageLink} onChange={e => setImageLink(e.target.value)}/>

          <button type="submit" onClick={handleSubmit}>Add news</button>
        </form>
      </AddNewsPageStyles>
    </DefaultPageWrapper>
  )
}

export default AddNewsPage
