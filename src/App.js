import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TodoAPI } from "./components/TodoApi";
import { TodoWrapperLocalStorage } from "./components/TodoLocalStorage";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todoapi" element={<TodoAPI />} />
        <Route path="localstorage" element={<TodoWrapperLocalStorage />} />
      </Routes>
    </Router>
  );
};

export default App;
