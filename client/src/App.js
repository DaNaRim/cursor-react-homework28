import {Navigate, Route, Routes} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import "./App.css"
import {GlobalStyle} from "./GlobalStyles"
import AddNewsPage from "./pages/news/AddNewsPage/AddNewsPage"
import NewsPage from "./pages/news/NewsPage/NewsPage"
import UpdateNewsPage from "./pages/news/UpdateNewsPage/UpdateNewsPage"
import AddUserPage from "./pages/users/AddUserPage/AddUserPage"
import UsersPage from "./pages/users/UsersPage/UsersPage"
import {darkTheme} from "./theme/themes"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Navigate to="/users" replace/>}/>
        <Route path="/users" exact element={<UsersPage/>}/>
        <Route path="/addUser" exact element={<AddUserPage/>}/>
        <Route path="/news" exact element={<NewsPage/>}/>
        <Route path="/news/:id" exact element={<UpdateNewsPage/>}/>
        <Route path="/addNews" exact element={<AddNewsPage/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
