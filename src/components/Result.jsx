import resultColor from "../libs/resultColor";

const Result = ({result}) => {
  return (
    <div style={{ color: resultColor(result.result) }}>{result.result}</div>
  )
}

export default Result;