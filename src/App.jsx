import { useState } from "react"
import Result from "./components/Result"
import Button from "./components/Button"

function App() {
  const [result, setResult] = useState({"result": "X"})

  const handleClick = () => {
    setResult({
      "result": "Y"
    })
  };

  return (
    <div>
      <Result result={result} />
      <Button handleClick={handleClick}/>
    </div>
  )
}

export default App
