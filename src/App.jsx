import { useState } from "react"
import Result from "./components/Result"
import Button from "./components/Button"

function App() {
  const [result, setResult] = useState({"result": "X"})

  const handleClick = async () => {
    const responce = await fetch("http://localhost:3000/gacha")
    const data = await responce.json()
    setResult(data)
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-yuji">
      <div className="relative flex items-center justify-center mb-8">
        <img src="/hanabi.png" alt="花火" className="absolute left-0 w-24 h-24 -ml-12" />
        <h1 className="text-6xl relative z-10">縁日くじ</h1>
        <img src="/hanabi.png" alt="花火" className="absolute right-0 w-24 h-24 -mr-12" />
      </div>
      <Result result={result} />
      <Button handleClick={handleClick}/>
    </div>
  )
}

export default App
