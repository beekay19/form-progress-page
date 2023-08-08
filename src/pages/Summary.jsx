import Footer from "../components/shared/Footer"
import { useNavigate } from "react-router-dom"
import AddOnsItems from "../components/addOnsItems"
// import AddOns from "./AddOns"

function Summary({plan,selected,price,addOns}) {
 const navigate = useNavigate()
  return (
    <div className="w-[80%] mx-auto pt-6 relative pb-6">
      <h2 className="text-3xl font-bold text-marineBlue pb-2">
        Finishing Up
      </h2>
      <p className="text-[.95rem] text-coolGray">Double-check everything looks OK before confirming.</p>
      <section className="rounded bg-mongolia p-4 ">
        <article className="border-b border-lightGray pb-4">
      <div className="flex justify-between item-center">
        <h3 className="text-marineBlue text-base font-semibold capitalize">{plan} ({selected === 'month'?'Monthly':'Yearly'})</h3>
        <h3 className="text-marineBlue text-base font-semibold">
          ${price}/{selected === 'month'?'mo':'yr'}
        </h3>
      </div>
      <button onClick={()=> navigate('/plan')} className="underline text-sm text-coolGray hover:text-marineBlue"> Change</button>
        </article>
       
        {addOns.map((item,index) => {
         return <AddOnsItems key={index} item={item} selected={selected}/>
        })}
      </section>
      <div className="p-4 flex justify-between">
        <p className="text-coolGray">Total (per year)</p>
        <p className="text-purplishBlue font-bold text-2xl">$120/yr</p>
      </div>
      <Footer children="Confirm" setStyle="bg-purplishBlue hover:opacity-80" handleBack={()=>navigate('/add-ons')} />
    </div>
  )
}

export default Summary