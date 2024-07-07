import React from 'react'

const Five = () => {
  return (
    <section className=' w-full'>
        <div className='flex flex-row justify-center pt-20'>
        <h1 className='font-bold text-[35px] text-center'>Reasons to <span className='text-[#D4AF37]'>Hire Us?</span></h1>
      </div>  
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row  gap-12 px-4 justify-center p-10'>
    
      
        {/* image div */}
     <div className='w-full md:w-1/2 flex justify-center items-center ' >
    
    <img className='' src="/images/pray.png" alt="arrow" />
   </div>
   
     <div className='w-full md:w-1/2 flex flex-col justify-center gap-6  '>
        
       <p className='font-medium text-[17px]'>
       At Pak Quran Academy, we take pride in our team of highly qualified and
experienced teachers. They are dedicated to providing you with personalized
guidance and support on your Quranic journey. We understand that everyone
has different commitments. That’s why we offer flexible learning options for
the students. Whether you’re a working professional, a student, or a busy
parent, you can choose the time that suits you best. Our online Quran classes
are available seven days a week, allowing you to learn at your convenience.
       </p>

       <p className='font-medium text-[17px]'>
       At Pak Quran Academy, we take pride in our team of highly qualified and
experienced teachers. They are dedicated to providing you with personalized
guidance and support on your Quranic journey. We understand that everyone
has different commitments. That’s why we offer flexible learning options for
the students. Whether you’re a working professional, a student, or a busy
parent, you can choose the time that suits you best. Our online Quran classes
are available seven days a week, allowing you to learn at your convenience.
       </p>
         
      </div>
     
    
    </main>
   
  </section>
    
  )
}

export default Five