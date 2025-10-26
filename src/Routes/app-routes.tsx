import { BrowserRouter as Router,Route,  Routes } from "react-router-dom"
import HomePage from "../pages/home-page"
import ProfilePage from "../pages/profile-page"
import MatchPage from "../pages/match-page"
import BlogPage from "../pages/blog-page"

function AppRoutes() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
           <Route path="/profile" element ={<ProfilePage/>}/>
           <Route path="/match" element ={<MatchPage/>}/>
           <Route path="/blog" element ={<BlogPage/>}/>
          </Routes> </Router>

  )
}

export default AppRoutes
