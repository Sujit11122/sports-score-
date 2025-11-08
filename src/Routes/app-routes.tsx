import { BrowserRouter as Router,Route,  Routes } from "react-router-dom"
import HomePage from "../pages/home/home-page"
import ProfilePage from "../pages/profile/profile-page"
import MatchPage from "../pages/match/match-page"
import BlogPage from "../pages/blog/blog-page"
import Login from "../pages/login/login-page"
import Signup from "../pages/signup/signup-page"
function AppRoutes() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
           <Route path="/profile" element ={<ProfilePage/>}/>
           <Route path="/match" element ={<MatchPage/>}/>
           <Route path="/blog" element ={<BlogPage/>}/>
           <Route path="/login" element ={<Login/>}/>
           <Route path="/signup" element ={<Signup/>}/>
          </Routes> </Router>

  )
}

export default AppRoutes
