import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useState } from 'react';
import Guide from './pages/Guide';
import Info from './pages/Info';
import Plans from './pages/Plans'
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
function App(){
  // states
  const [selected, setSelected] = useState("month");
  const [plan, setPlan] = useState("arcade");
  const [price, setPrice] = useState(9);
  const [addOns, setAddOns] = useState([])
  const [online, setOnline] = useState("");
  const [storage, setStorage] = useState("");
  const [profile, setProfile] = useState("");
  // useEffect(()=>{    
  //   console.log(price)

  // },[selected,plan,price])
  // functions
  const picked = (item) => {
    setSelected(item);
  };
  const handleSubcription = (plan,price)=>{
    setPlan(plan)
    setPrice(price);
    // console.log(plan)
  }
  const handleAddOns = (item) =>{
   if(addOns.find(o => o.id === item.id) === undefined){
  setAddOns([item,...addOns])
  
   }else{
    setAddOns(addOns.filter(o => o.id !== item.id))
   }

  }
  const handleOnline = (item)=>{
    setOnline(item)
  }
  const handleProfile = (item)=>{
    setProfile(item)
  }
  const handleStorage = (item)=>{
    setStorage(item)
  }

  return (
    <Router>
      <div className=" grid max-w-3xl mx-auto bg-white rounded-2xl px-2 py-4  drop-shadow-md md:grid md:grid-cols-[2fr,5fr] md:h-[500px] md:mt-24">
        <Guide/>
      <Routes>
        <Route exact path='/' element={<Info/>}/>
        <Route  path='/plan' element={<Plans handlePick={picked} handleSubcription={handleSubcription} selected={selected} newPlan={plan}/>}/>
        <Route  path='/add-ons' element={<AddOns selected={selected} handleAddOns={handleAddOns} clickStorage={handleStorage} clickProfile={handleProfile} clickOnline={handleOnline} newOnline={online} newProfile ={profile} newStorage={storage} />}/>
        <Route path='/summary' element={<Summary selected={selected} plan={plan} price={price} addOns={addOns}/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;
