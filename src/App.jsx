


import Home from "./Components/Home/Home"
import Eductional from "./Components/Educational/Eductional"
import Whoiam from "./Components/Who I am/Whoiam"
import Blog from "./Components/Blog/Blog"
import Events from "./Components/Events/Events"
import Industrial from "./Components/Industrial/Industrial"
import { Route,Routes } from "react-router-dom"
function App() {
  

  return (
    <>
    <Routes>

      <Route path="/" element={< Home />}/>
      <Route path="/Whoiam" element={< Whoiam />}/>
      <Route path="/Educational" element={< Eductional />}/>
      <Route path="/Blog" element={< Blog />}/>
      <Route path="/Events" element={< Events />}/>
      <Route path="/Industrial" element={< Industrial />}/>
   
    </Routes>
    </>
  )
}

export default App
