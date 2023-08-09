import img from '../assets/icon-thank-you.svg'
function Apprciation() {
  return (
    <div className='w-full h-full grid place-content-center'>
        <img src={img} alt="" className='text-center inline-block mx-auto pb-8'/>
        <h3 className='text-marineBlue text-center font-bold text-3xl pb-4'>Thank you!</h3>
        <p className='text-coolGray max-w-md mx-auto text-center' >! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Apprciation