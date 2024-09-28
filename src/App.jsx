import { useState } from "react";
import "./App.css";
import { getDataUrl } from "../utils/url";

function App() {
  const [count, setCount] = useState(0);

  console.log(APP_DATA);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={getDataUrl("images/img1.jpg")}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={getDataUrl("images/img2.jpg")}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
