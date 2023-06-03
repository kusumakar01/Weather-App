import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  const [theme, setTheme] = useState(
    new Date().getHours() < 6 || new Date().getHours() > 18
  );
  if (theme) document.body.classList.add("night-bg");
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Content theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
