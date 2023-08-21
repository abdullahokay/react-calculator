import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useState } from "react";
import * as math from "mathjs";

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  
  function addToText(val) {
    setText((text) => [...text, val + ""])
  }

  function clearText() {
    setText("")
    setResult("")
  }

  function calculateResult() {
    const input = text.join("")

    setResult(math.evaluate(input))
  }

  const buttonColor = "#f2a33c"
  const clearBtnColor= "#8B0000"

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol={"7"} handleClick={addToText}/>
          <Button symbol={"8"} handleClick={addToText}/>
          <Button symbol={"9"} handleClick={addToText}/>
          <Button symbol={"/"} handleClick={addToText} color={buttonColor}/>
        </div>
        <div className="row">
          <Button symbol={"4"} handleClick={addToText}/>
          <Button symbol={"5"} handleClick={addToText}/>
          <Button symbol={"6"} handleClick={addToText}/>
          <Button symbol={"*"} handleClick={addToText} color={buttonColor}/>
        </div>
        <div className="row">
          <Button symbol={"1"} handleClick={addToText}/>
          <Button symbol={"2"} handleClick={addToText}/>
          <Button symbol={"3"} handleClick={addToText}/>
          <Button symbol={"+"} handleClick={addToText} color={buttonColor}/>
        </div>
        <div className="row">
          <Button symbol={"0"} handleClick={addToText}/>
          <Button symbol={"."} handleClick={addToText}/>
          <Button symbol={"="} handleClick={calculateResult}/>
          <Button symbol={"-"} handleClick={addToText} color={buttonColor}/>
        </div>
        <Button symbol={"Clear"} handleClick={clearText} color={clearBtnColor}/>
      </div>
    </div>
  );
}

export default App;
