import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Home from "./Home";
import Login from "./Login";
import Temp from "./temp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/temp" element={<Temp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
