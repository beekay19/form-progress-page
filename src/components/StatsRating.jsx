

function StatsRating({selected,addOns,price}) {
   
    const total =  addOns.reduce((total,item) =>{
        return   total += item.value
      },0) + price
    
  return (
    <section className="p-4 flex justify-between">
        <h4 className=" text-coolGray">
           Total (per {selected === 'month'? 'month': 'year'})
        </h4>
        <h4 className="text-purplishBlue font-bold text-2xl"> 
        ${total }/{selected === 'month'? 'mo': 'yr'}
        </h4>
    </section>
  )
}

export default StatsRating