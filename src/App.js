import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TodoAPI } from "./TodoApi";
import { TodoWrapperLocalStorage } from "./TodoLocalStorage";

const App = () => {
  return (
    Router >
    (
      <Routes>
        <Route path="todoapi" element={<TodoAPI />} />
        <Route path="localstorage" element={<TodoWrapperLocalStorage />} />
        <Route />
      </Routes>
    )
  );
};

export default App;
