import resultColor from "../libs/resultColor";

const Result = ({result}) => {
  return (
    <div className="text-9xl font-bold mb-8" style={{ color: resultColor(result.result) }}>{result.result}</div>
  )
}

export default Result;
