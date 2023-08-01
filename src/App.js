import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Guide from './pages/Guide';
import Info from './pages/Info';
import Plans from './pages/Plans'
function App(){
  return (
    <Router>
      <div className=" max-w-3xl mx-auto mt-24 bg-white rounded-2xl px-2 py-4 grid grid-cols-[2fr,5fr] h-[500px] drop-shadow-md">
        <Guide/>
      <Routes>
        <Route exact path='/' element={<Info/>}/>
        <Route exact path='/plan' element={<Plans/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App;
