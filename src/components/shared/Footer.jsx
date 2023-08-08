function Footer({children,handleClick ,setStyle,setDisabled,handleBack}) {
  return (
    <div className="flex justify-between items-center">
    <button onClick={handleBack} className="text-coolGray py-2 items-center font-medium">
        Go Back</button>
        <button onClick={handleClick} className={`px-6 py-2 text-white rounded-md  ${setStyle}`} disabled={setDisabled} >
        {children}
    </button>
    </div>
  )
}

export default Footer