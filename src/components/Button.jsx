const Button = ({handleClick}) => {
  return (
    <button className="bg-yellow-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105 active:scale-95" onClick={handleClick}>ガチャを回す</button>
  )
}

export default Button;
