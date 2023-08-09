import {createContext,useState} from 'react'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [selected, setSelected] = useState("month");
  const [newPlan, setPlan] = useState("arcade");
  const [price, setPrice] = useState(9);
  const [addOns, setAddOns] = useState([])
  const [newOnline, setOnline] = useState("");
  const [newStorage, setStorage] = useState("");
  const [newProfile, setProfile] = useState("");

    const handlePick = (item) => {
        setSelected(item);
      };
      const handleSubcription = (plan,price)=>{
        setPlan(plan)
        setPrice(price);
      }
      const handleAddOns = (item) =>{
       if(addOns.find(o => o.id === item.id) === undefined){
      setAddOns([item,...addOns])
      
       }else{
        setAddOns(addOns.filter(o => o.id !== item.id))
       }
    
      }
      const clickOnline = (item)=>{
        setOnline(item)
      }
      const clickProfile = (item)=>{
        setProfile(item)
      }
      const clickStorage = (item)=>{
        setStorage(item)
      }
    return <AppContext.Provider value={{
        selected,
        price,
        newPlan,
        newOnline,
        newStorage,
        newProfile,
        addOns,
        handleSubcription,
        handleAddOns,
        handlePick,
        clickOnline,
        clickProfile,
        clickStorage

    }}>
        {children}
    </AppContext.Provider>
}

export default AppContext 