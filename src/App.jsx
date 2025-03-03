import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Body from "./Body";
// import Login from "./Login";
// import Temp from "./temp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Feed from "./Feed";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Temp from "./components/Temp";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temp" element={<Temp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
