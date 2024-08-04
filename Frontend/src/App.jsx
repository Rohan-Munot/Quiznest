import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signup} from "./Pages/Signup.jsx";
import {Signin} from "./Pages/Signin.jsx";
import {Dashboard} from "./Pages/Dashboard.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path={'/signin'} element={<Signin />} />
              <Route path={'/dashboard'} element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
