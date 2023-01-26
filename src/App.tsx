import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { HomePage } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
