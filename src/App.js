import { BrowserRouter as Router } from "react-router-dom";

import "./Styles/Styles.css";

import Nav from "./Nav/Nav";
import Intro from "./Intro/Intro";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Intro />
      </div>
    </Router>
  );
}

export default App;
