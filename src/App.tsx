import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  const files = ["hoge", "fuga", "piyo"];

  return (
    <>
      <Navbar
        onClickFlamegraph={() => {
          console.log("flamegraph selected");
        }}
      ></Navbar>
      <Sidebar items={files}></Sidebar>
      <p>We are going to implement here</p>
    </>
  );
}

export default App;
