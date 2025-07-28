
import {Route,BrowserRouter,Routes} from "react-router-dom";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/content" element={<ContentPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
