import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signup} from "./Pages/Signup.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/signup" element={<Signup />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
