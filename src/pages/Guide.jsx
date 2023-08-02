import React from 'react'

function Guide() {
  return (
    <div className='main flex flex-col pl-6 pt-6  whitespace-pre'>
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className={` rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center `} >1</p>
            <div className=''>
                <p className='text-lightGray text-sm'>STEP 1</p>
                <p className='font-semibold text-sm text-white tracking-wider'>YOUR INFO</p>
            </div>
        </div>
        {/* step 2 */}
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className=' rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center  ' >2</p>
            <div className=''>
                <p className='text-lightGray text-sm'>STEP 2</p>
                <p className='font-semibold text-sm text-white tracking-wider uppercase '>Select plan</p>
            </div>
        </div>
        {/* step 3 */}
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className=' rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center' >3</p>
            <div className=''>
                <p className='text-lightGray text-sm'>STEP 3</p>
                <p className='font-semibold text-sm text-white tracking-wider uppercase'>add-ons</p>
            </div>
        </div>
        {/* step 4 */}
        <div className="step-1 flex items-center space-x-4 mb-6">
            <p className=' rounded-full border border-solid border-l-pastelBlue h-10 w-10 grid text-white place-content-center  ' >4</p>
            <div className=''>
                <p className='text-lightGray text-sm'>STEP 4</p>
                <p className='font-semibold text-sm text-white tracking-wider uppercase'>summary</p>
            </div>
        </div>
    </div>
  )
}

export default Guide