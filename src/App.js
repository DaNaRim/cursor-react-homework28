import {Navigate, Route, Routes} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import "./App.css"
import {GlobalStyle} from "./GlobalStyles"
import AddUserPage from "./pages/AddUserPage/AddUserPage"
import UsersPage from "./pages/UsersPage/UsersPage"
import {darkTheme} from "./theme/themes"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Navigate to="/users" replace/>}/>
        <Route path="/users" exact element={<UsersPage/>}/>
        <Route path="/addUser" exact element={<AddUserPage/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
