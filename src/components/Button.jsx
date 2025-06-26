const Button = ({handleClick}) => {
  return (
    <button className={"border rounded px-2 py-1 bg-slate-200 hover:bg-slate-100"} onClick={handleClick}>ガチャを回す</button>
  )
}

export default Button;
