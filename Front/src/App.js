import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Users from "./containers/Users";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/usuarios" element={<Users />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
