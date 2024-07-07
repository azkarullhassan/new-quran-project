import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React from 'react';

const Hero = () => {
  return (
    <section className='w-full'
     style={{
      width: '100%',
      height: '100vh',
      backgroundImage: "url('/images/Background.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
       <main className='max-w-7xl '>
       <Carousel>
  <CarouselContent>
    <CarouselItem>
      <div className="text-center pt-44 flex flex-col gap-8 text-white">
      <h1 className='font-bold text-[20px]'>The Quran: A journey to the Heart of Islam</h1>
      <h2 className='font-bold text-[45px]'>A Complete Online Quran Learning Experience</h2>
      <h3 className='font-bold text-[20px]'>Quran Learning Online: Classes for Everyone, Anywhere</h3>
       
      <div className='flex flex-row justify-center gap-8'>
            <button className='text-white font-Poppins p-3  rounded-2xl border border-white'>
            Register Now
            </button>
            <button className='text-white font-Poppins p-3 rounded-2xl  bg-[#007F5F]'>
            Start Free Trial
            </button>
      </div>
      </div>
      </CarouselItem>



    <CarouselItem>
       <div className="text-center pt-44 flex flex-col gap-8 text-white">
       <h1 className='font-bold text-[20px]'>The Quran: A journey to the Heart of Islam</h1>
      <h2 className='font-bold text-[45px]'>A Complete Online Quran Learning Experience</h2>
      <h3 className='font-bold text-[20px]'>Quran Learning Online: Classes for Everyone, Anywhere</h3>
       
      <div className='flex flex-row justify-center gap-8'>
            <button className='text-white font-Poppins p-3  rounded-2xl border border-white'>
            Register Now
            </button>
            <button className='text-white font-Poppins p-3 rounded-2xl  bg-[#007F5F]'>
            Start Free Trial
            </button>
      </div>
       </div>
      </CarouselItem>
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

       </main>
      
    </section>
  );
};

export default Hero;
