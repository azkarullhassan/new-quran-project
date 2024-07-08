import Image from 'next/image';
import React from 'react'

const First = () => {
  return (
    <section className='w-full'>
      <main className='mx-auto max-w-7xl text-center'>
            <div className='pt-24'>
            <h1 className='font-bold text-[40px]'> <span className='text-[#D4AF37]'>Learn Quran Online</span> with Pak Quran Academy in the USA</h1>
            <p className='font-bold text-[16px]'>Are you looking for a convenient and effective way to Learn Quran Online? Pak Quran Academy is here to provide you with an exceptional online Quran learning
             experience. We understand the importance of accessing quality Islamic education, regardless of your location. That&apos;s why we offer comprehensive online Quran courses
            tailored to meet the needs of learners in the USA.</p>

            </div>
            <div className='flex md:flex-row flex-col gap-6 p-14'>
               <div className='shadow-xl p-10 rounded-2xl flex flex-col items-center gap-6  bg-emerald-100'>
                <Image src="/images/svg2.png" alt=""  width={60} height={60}/>
                <h2 className='font-bold text-[25px]'>Step 1</h2>
                <h1 className='font-extrabold text-[22px]'>Send Inquiry</h1>
                <p className='font-medium text-[17px] '>Experience the Convenience of Learning
                Quran Online with our Exceptional
             form, and let our dedicated team assist
                 you in scheduling your trial classes.</p> 
                 <button className='text-white font-Poppins p-2 rounded-2xl  bg-[#007F5F]'>
                 Send Inquiry
            </button>                
               </div>
 
               <div className='shadow-xl p-10 rounded-2xl flex flex-col items-center gap-6  bg-emerald-100'>
                <Image src="/images/SVG1.png" alt=""  width={60} height={60}/>
                <h2 className='font-bold text-[25px]'>Step 2</h2>
                <h1 className='font-extrabold text-[22px]'>Free Trial Online</h1>
                <p className='font-medium text-[17px]'>Check Your Schedule Upon Enrolling
                and Join Engaging Free Online Quran
                Classes for Three Days, No Payment or
                Credit Card Required!</p>
                <button className='text-white font-Poppins p-2 rounded-2xl  bg-[#007F5F]'>
            Start Trial
            </button>
               </div>

               <div className='shadow-xl p-10 rounded-2xl flex flex-col items-center gap-6 bg-emerald-100'>
                <Image src="/images/SVG.png" alt="" width={60} height={60}/>
                <h2 className='font-bold text-[25px]'>Step 3</h2>
                <h1 className='font-extrabold text-[22px]'>Get Quick Admission</h1>
                <p className='font-medium text-[17px]'>Satisfied with our free trial classes? If
                  yes, then Secure your spot for our
                  permanent classes by choosing a
                  convenient monthly plan that suits you
                  best.</p>
                  <button className='text-white font-Poppins p-2 rounded-2xl  bg-[#007F5F]'>
                  Quick Admission
            </button>
               </div>
            </div>

      </main>
        

    </section>
  )
}

export default First ;