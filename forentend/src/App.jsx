import { Route, Router, Routes } from "react-router-dom"
import Home from "./bages/Home"
import Header from "./components/Header"
import JobList from "./components/JopList"

function App() {
  return <div>
       <Header />
        <Routes >
        
        <Route path="/" element={<Home />} />
       
        <Route path="/job-list" element={<JobList />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
         </Routes>
         </div>
 
}

export default App
