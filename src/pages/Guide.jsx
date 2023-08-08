import React from 'react'
import {useLocation} from 'react-router-dom'

function Guide() {
    const location = useLocation()

    const pathMatchRouth = (route) =>{
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='main flex justify-center pl-6 pt-6 select-none  whitespace-pre space-x-8 md:space-x-0 md:justify-start md:flex-col'>
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className={` rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center select-none ${pathMatchRouth('/info')?"bg-pastelBlue text-black":"bg-transparent text-white"}`} >1</p>
            <div className='hidden md:block'>
                <p className='text-lightGray text-sm'>STEP 1</p>
                <p className='font-semibold text-sm text-white tracking-wider'>YOUR INFO</p>
            </div>
        </div>
        {/* step 2 */}
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className={`rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center select-none  ${pathMatchRouth('/plan')?"bg-pastelBlue text-black":"bg-transparent text-white"} `} >2</p>
            <div className='hidden md:block'>
                <p className='text-lightGray text-sm'>STEP 2</p>
                <p className='font-semibold text-sm text-white tracking-wider uppercase '>Select plan</p>
            </div>
        </div>
        {/* step 3 */}
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className={` rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center select-none  ${pathMatchRouth('/add-ons')?"bg-pastelBlue text-black":"bg-transparent text-white"}`} >3</p>
            <div className='hidden md:block'>
                <p className='text-lightGray text-sm'>STEP 3</p>
                <p className='font-semibold text-sm text-white tracking-wider uppercase'>add-ons</p>
            </div>
        </div>
        {/* step 4 */}
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className= {`rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center select-none  ${pathMatchRouth('/summary')?"bg-pastelBlue text-black":"bg-transparent text-white"}`} >4</p>
            <div className='hidden md:block'>
                <p className='text-lightGray text-sm'>STEP 4</p>
                <p className='font-semibold text-sm text-white tracking-wider uppercase'>summary</p>
            </div>
        </div>
    </div>
  )
}

export default Guide