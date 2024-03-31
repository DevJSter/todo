import "./index.css";
import "./App.css";

import { TodoWrapperLocalStorage } from "./TodoWrapperLocalStorage";

function App() {
  return (
    <div className="App">
      {/* <TodoWrapper  /> */}
      <TodoWrapperLocalStorage />
    </div>
  );
}

export default App;
