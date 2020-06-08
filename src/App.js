import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState([]);
  useEffect(() => {
    axios.get("/api").then((res) => {
      console.log(res);
      // const name = res.data.map((object) => object.user_name);
      // console.log(name);
      // setText(name);
    });
  }, []);

  return <>ssssssssssssgi{text}</>;
}

export default App;
