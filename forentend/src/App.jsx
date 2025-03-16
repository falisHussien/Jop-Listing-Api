import { Route, Router, Routes } from "react-router-dom"
import Home from "./bages/Home"
import Header from "./components/Header"
import JobList from "./components/JopList"
import Contact from "./bages/Contact"
import AuthForm from "./bages/AuthForm"
import { useState } from "react"


function App() {
  const [isLogin, setIsLogin] = useState(true);
  return <div>
  
       <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />}/>
        <Route path="/register" element={<AuthForm isLogin={!isLogin} setIsLogin={setIsLogin} />}/>
        
      </Routes>
   
         </div>
 
}

export default App
