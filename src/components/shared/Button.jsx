function Button({children, setStyle, setDisabled,handleClick}) {
  return (
    <button onClick={handleClick} className={`px-6 py-2 text-white rounded-md  ${setStyle}`} disabled={setDisabled} >
        {children}
    </button>
  )
}

export default Button