import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useState } from "react";

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  
  const buttonColor = "#f2a33c"
  const clearBtnColor= "#8B0000"

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input />
        <div className="row">
          <Button symbol={"7"} />
          <Button symbol={"8"} />
          <Button symbol={"9"} />
          <Button symbol={"/"} color={buttonColor}/>
        </div>
        <div className="row">
          <Button symbol={"4"} />
          <Button symbol={"5"} />
          <Button symbol={"6"} />
          <Button symbol={"*"} color={buttonColor}/>
        </div>
        <div className="row">
          <Button symbol={"1"} />
          <Button symbol={"2"} />
          <Button symbol={"3"} />
          <Button symbol={"+"} color={buttonColor}/>
        </div>
        <div className="row">
          <Button symbol={"0"} />
          <Button symbol={"."} />
          <Button symbol={"="} />
          <Button symbol={"-"} color={buttonColor}/>
        </div>
        <Button symbol={"Clear"} color={clearBtnColor}/>
      </div>
    </div>
  );
}

export default App;
