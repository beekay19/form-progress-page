import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Guide from './pages/Guide';
import Info from './pages/Info';
import Plans from './pages/Plans'
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import Apprciation from './pages/Apprciation';
import { AppProvider } from './context/Context';
function App(){

  return (
    <AppProvider>

    <Router>
      <div className=" grid max-w-3xl mx-auto bg-white rounded-2xl px-2 py-4 select-none drop-shadow-md md:grid md:grid-cols-[2fr,5fr] md:h-[500px] md:mt-24">
        <Guide/>
      <Routes>
        <Route exact path='/' element={<Info/>}/>
        <Route  path='/plan' element={<Plans />}/>
        <Route  path='/add-ons' element={<AddOns />}/>
        <Route path='/summary/*' element={<Summary />} />
      <Route path='/summary/thanks' element={<Apprciation/>}/>
      </Routes>
      </div>
    </Router>
    </AppProvider>
  )
}

export default App;
