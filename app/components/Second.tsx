import React from 'react'

const Second = () => {
  return (
    <section className=' w-full' 
    style={{
        width: '100%',
        backgroundImage: "url('./images/Background 2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
          
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row  px-4 justify-center p-10'>
    

        {/* image div */}
     <div className='w-full md:w-1/2 flex justify-center items-center ' >
    
    <img className='' src="/images/quran.png" alt="arrow" />
   </div>
   
     <div className='w-full md:w-1/2 flex justify-center  '>
        
        <div className=' pt-20 p-6 '>
         <h1 className="font-extrabold text-[35px] pb-3">EXPERIENCE COMPLIMENTARY  
           <span className='text-[#D4AF37]'> ONLINE QURAN CLASSES </span> AT NO COST</h1>
          
          <p className="font-medium text-[16px] leading-8  pb-3">Avail our Complimentary Trial Classes by Completing the Form to Learn Quran Online.
          Experience the Three-Day Free Trial Offer from Pak Quran Academy. Enroll Now!</p>
         
         <h2 className='font-bold text-[25px] pb-3'>3 Days Free Trial</h2>
          <button className='border-[1px] md:px-8 px-3 py-3 bg-[#007F5F] rounded-lg text-[16px] text-white font-medium'>
          Book Free Trial Now
        </button>
        </div>
      </div>
     
    
    </main>
   
  </section>
    
  )
}

export default Second