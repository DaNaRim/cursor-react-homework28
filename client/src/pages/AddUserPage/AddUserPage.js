import React from "react"
import {useDispatch} from "react-redux"
import {addUserAction} from "../../redux/usersReducer/usersActions"
import DefaultPageWrapper from "../DefaultPageWrapper/DefaultPageWrapper"
import AddUserPageStyles from "./AddUserPageStyles"

const AddUserPage = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = React.useState("")
  const [linkToImage, setLinkToImage] = React.useState("")

  const handleAddUser = e => {
    e.preventDefault()
    const user = {
      username,
      linkToImage,
    }
    dispatch(addUserAction(user))

    setUsername("")
    setLinkToImage("")

    alert("User added")
  }

  return (
    <DefaultPageWrapper>
      <AddUserPageStyles>
        <form>
          <h1>Create new user</h1>
          <input type="text"
                 placeholder="Username"
                 title="Username"
                 required
                 value={username}
                 onChange={e => setUsername(e.target.value)}/>
          <input type="url"
                 placeholder="Link to image"
                 title="Link To Image"
                 required
                 list="LinksToImage"
                 value={linkToImage}
                 onChange={e => setLinkToImage(e.target.value)}/>
          {getUserImagesDatalist()}

          <button onClick={handleAddUser}>Add user</button>
        </form>
      </AddUserPageStyles>
    </DefaultPageWrapper>
  )
}

export default AddUserPage

function getUserImagesDatalist() {
  return (
    <datalist id="LinksToImage">
      <option value="https://cdn-icons-png.flaticon.com/512/149/149071.png">User1</option>
      <option value="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png">User2</option>
      <option value="https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp">
        Human face
      </option>
    </datalist>
  )
}
