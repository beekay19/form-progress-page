function AddOnsItems({item,selected}) {
  return (
    <div className="flex justify-between pt-2" > 
    <p className="text-coolGray">{item.text}</p>
    <p className="text-marineBlue font-medium">+${item.value}/{selected === 'month'? 'mo' : 'yr'}</p>
  </div>
  )
}

export default AddOnsItems