import React from "react"
import "./App.scss"
import { Routes,BrowserRouter,Route} from "react-router-dom"
import LoginScreen from "./screens/auth/login"
import RegisterScreen from "./screens/auth/register/register"
import NotesScreen from "./screens/notes/index"
import UsersEditScreen from "./screens/users/edit"
import HomeScreen from "./screens/home"
import PrivateRoutes from "./components/auth/privateRouters"

const App  = () => {
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/notes" element={<NotesScreen/>}/>
            <Route path="/users/edit" element={<UsersEditScreen/>}/>
          </Route>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App