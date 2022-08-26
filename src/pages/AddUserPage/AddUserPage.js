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
      linkToImage
    }
    dispatch(addUserAction(user))

    alert("User added")
  }

  return (
    <DefaultPageWrapper>
      <AddUserPageStyles>
        <form>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
          <input type="text" placeholder="Link to image" onChange={e => setLinkToImage(e.target.value)}/>

          <button onClick={handleAddUser}>Add user</button>
        </form>
      </AddUserPageStyles>
    </DefaultPageWrapper>
  )
}

export default AddUserPage
