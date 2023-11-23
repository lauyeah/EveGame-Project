import "./App.css";
import { routes } from "./Router/Routes";

function App() {
  return (
    <div>
      <div className="main-content">{routes}</div>
    </div>
  );
}

export default App;
