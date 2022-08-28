import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import FormStyles from "../../../components/Form/FormStyles"
import InfoBlockStyles from "../../../components/InfoBlock/InfoBlockStyles"
import {addUserAction, pendingAddUserAction} from "../../../redux/usersReducer/usersActions"
import {addUserSelector} from "../../../redux/usersReducer/usersSelectors"
import DefaultPageWrapper from "../../DefaultPageWrapper/DefaultPageWrapper"
import AddUserPageStyles from "./AddUserPageStyles"

const AddUserPage = () => {
  const dispatch = useDispatch()

  const {status, error} = useSelector(addUserSelector)

  const [username, setUsername] = React.useState("")
  const [linkToImage, setLinkToImage] = React.useState("")

  useEffect(() => {
    if (status === "success") {
      setUsername("")
      setLinkToImage("")

      setTimeout(() => {
        dispatch(pendingAddUserAction())
      }, 2000)
    }
  }, [dispatch, status])


  const handleAddUser = e => {
    e.preventDefault()
    const user = {
      username,
      linkToImage,
    }
    dispatch(addUserAction(user))
  }

  return (
    <DefaultPageWrapper>
      <AddUserPageStyles>
        <InfoBlockStyles>
          {status === "loading" && <div className="info_block loading">Adding user...</div>}
          {status === "success" && <div className="info_block">User added</div>}
          {status === "error"
            && <div className="info_block error">Failed to add new user: <span>{error.message}</span></div>
          }
        </InfoBlockStyles>
        <FormStyles>
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
        </FormStyles>
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
