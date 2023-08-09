import { useState,useEffect,useContext } from "react";
import Footer from "../components/shared/Footer";
import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";
import advance from "../assets/icon-advanced.svg";
import {useNavigate} from "react-router-dom"
import AppContext from "../context/Context";
function Plans() {
  const {handlePick,handleSubcription,selected,newPlan} = useContext(AppContext)
  const navigate = useNavigate()
  const [isSelected, setSelected] = useState("month");
  const [plan, setPlan] = useState("arcade");
  const [price, setPrice] = useState(9);
  const [message ,setMessage] = useState('')
  
  useEffect(()=>{
    setSelected(selected)
    setPlan(newPlan)
  },[newPlan, selected])

  const handlePlan = (e) => {
    setPrice(+e.target.value);
    setPlan(e.target.id)
    handleSubcription(e.target.id,+e.target.value)
  };
  const handleChange = (e) => {
    if (e.target.value === "year") {
      setPrice((currentPrice) => currentPrice * 10);
      handleSubcription(plan, (currentPrice) => currentPrice * 10)
      setMessage('2 months free')
    }
    else {
      setPrice((currentPrice) => currentPrice / 10);
      handleSubcription(plan,(currentPrice) => currentPrice / 10)
      setMessage(null)

    }
    setSelected(e.target.value);
    handlePick(e.target.value);
}

  const handleClick = () =>{
    navigate('/add-ons')
  }
  return (
    <div className="w-[80%] mx-auto pt-8 ">
      <h2 className="text-3xl font-bold pb-2 text-marineBlue">
        Select your plan
      </h2>
      <p className="text-coolGray text-[.95rem]">
        You have the option of monthly or yearly billing
      </p>
      <section
        className="sub grid flex-col pt-4 md:grid-cols-3 gap-4 
      mb-8"
      >
        <div className="arcade relative rounded-md border hover:border-purplishBlue">
          <input type="radio" name="subcription" id="arcade" 
          onChange={handlePlan}
          value={isSelected === "month" ? 9 : 90}
          checked={plan === 'arcade'} />
          <label
            htmlFor="arcade"
            className="border block  rounded-md py-4 pl-2"
          >
            <div className=" pb-8">
              <img src={arcade} alt="" />
            </div>
            <h3 className="font-semibold text-purplishBlue ">Arcade</h3>
            <p className="text-coolGray text-sm font-normal">
              {isSelected === "month" ? "$9/mo" : "$90/yr"}
            </p>
            {message&& <p className="text-marineBlue text-[0.83rem] font-medium pt-1">{message}</p>}
          </label>
        </div>
        <div className="advance relative rounded-md border hover:border-purplishBlue">
          <input type="radio" name="subcription" id="advance"
          value={isSelected === "month" ? 12 : 120}
          onChange={handlePlan} 
          checked={plan === 'advance'}/>
          <label
            htmlFor="advance"
            className="border block  rounded-md py-4 pl-2"
          >
            <div className=" pb-8">
              <img src={advance} alt="" />
            </div>
            <h3 className="font-semibold text-purplishBlue ">Advance</h3>
            <p className="text-coolGray text-sm font-normal">
              {isSelected === "month" ? "$12/mo" : "$120/yr"}
            </p>
            {message&& <p className="text-marineBlue text-[0.83rem] font-medium pt-1">{message}</p>}
          </label>
        </div>
        <div className="pro relative rounded-md border hover:border-purplishBlue">
          <input
            type="radio"
            name="subcription"
            id="pro"
            onChange={handlePlan}
            value={isSelected === "month" ? 15 : 150}
            checked={plan === 'pro'}
          />
          <label htmlFor="pro" className="border block rounded-md py-4 pl-2">
            <div className=" pb-8">
              <img src={pro} alt="" />
            </div>
            <h3 className="font-semibold text-purplishBlue ">Pro</h3>
            <p className="text-coolGray text-sm font-normal">
              {isSelected === "month" ? "$15/mo" : "$150/yr"}
            </p>
            {message&& <p className="text-marineBlue text-[0.83rem] font-medium pt-1 transition-all">{message}</p>}
          </label>
        </div>
      </section>
      <div className="duration bg-mongolia p-2 flex justify-center items-center rounded-md mb-16">
        <label htmlFor="month" className="mr-4">
          Monthly
        </label>
        <div className="bg-marineBlue py-1 px-1 rounded-full flex items-center space-x-1">
          <div className="circle relative">
            <input
              type="radio"
              name="duration"
              id="month"
              value="month"
              onChange={handleChange}
              checked={isSelected === "month"}
            />
            <div className="main-circle p-2 top-0 rounded-full"></div>
          </div>
          <div className="circle relative">
            <input
              type="radio"
              name="duration"
              id="year"
              value="year"
              onChange={handleChange}
              checked={isSelected === "year"}
            />
            <div className="main-circle p-2 top-0 rounded-full"></div>
          </div>
        </div>
        <label htmlFor="year" className="ml-4">
          Yearly
        </label>
      </div>
      <Footer setStyle="bg-marineBlue  hover:opacity-80" children="Next Step" handleClick={handleClick} setDisabled={false} handleBack={() => navigate('/')}/>
    </div>
  );
}

export default Plans;
