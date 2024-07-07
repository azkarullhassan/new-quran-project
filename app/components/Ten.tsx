"use client"
import { useState, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Ten = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  useEffect(() => {
    // You can perform any initialization or side effects here
    // This code will execute on the client side after initial render
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <section className='w-full py-16'>
      <main className='mx-auto max-w-7xl'>
        <div className='flex gap-12'>
          <div className='w-full md:w-full lg:w-1/2 flex flex-col gap-12 px-6'>
            <div>
              <img src="./images/Vector.png" alt="logo" />
              <h2 className="text-neutral-800 text-[32px] md:text-[35px] font-bold font-roboto-slab leading-[40px] md:leading-[45.50px] py-4">Frequently Asked Questions</h2>
            </div>

            <div className="bg-slate-200 px-6 flex flex-col gap-8 py-10 flex-wrap">
              {/* Question 1 */}
              <div className="flex flex-col justify-center">
                <button
                  className="text-neutral-800 text-md md:text-xl font-bold font-roboto-slab leading-[30px] bg-white py-6 px-2 md:px-8 w-full lg:w-[519px] flex gap-4 md:gap-16"
                  onClick={() => toggleQuestion(1)}
                >
                  <p>Who can enroll in “Learn Quran <br /> Online” courses?</p>
                  {!openQuestion || openQuestion !== 1 ? (
                    <AiFillCaretDown className='h-8' />
                  ) : (
                    <AiFillCaretUp className='h-8' />
                  )}
                </button>
                <div className={openQuestion === 1 ? 'block text-gray-700 text-base font-normal font-roboto-slab leading-relaxed px-4 py-10' : 'hidden'}>
                  Everyone can enroll in our courses, from kids to adults who <br />
                  are willing to learn Quran online.
                </div>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col justify-center">
                <button
                  className="text-neutral-800 text-md md:text-xl font-bold font-roboto-slab leading-[30px] bg-white py-6 px-8 w-full lg:w-[519px] flex gap-4 md:gap-16"
                  onClick={() => toggleQuestion(2)}
                >
                  <p>Is there a trial period available for these Quran classes?</p>
                  {!openQuestion || openQuestion !== 2 ? (
                    <AiFillCaretDown className='h-8' />
                  ) : (
                    <AiFillCaretUp className='h-8' />
                  )}
                </button>
                <div className={openQuestion === 2 ? 'block text-gray-700 text-base font-normal font-roboto-slab leading-relaxed px-4 py-10' : 'hidden'}>
                  There is a trial period available for new students.
                </div>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col justify-center">
                <button
                  className="text-neutral-800 text-md md:text-xl font-bold font-roboto-slab leading-[30px] bg-white py-6 px-8 w-full lg:w-[519px] flex gap-4 md:gap-16"
                  onClick={() => toggleQuestion(3)}
                >
                  <p>Can I schedule classes according to my kid’s availability?</p>
                  {!openQuestion || openQuestion !== 3 ? (
                    <AiFillCaretDown className='h-8' />
                  ) : (
                    <AiFillCaretUp className='h-8' />
                  )}
                </button>
                <div className={openQuestion === 3 ? 'block text-gray-700 text-base font-normal font-roboto-slab leading-relaxed px-4 py-10' : 'hidden'}>
                  Yes, you can schedule classes based on your kid's availability.
                </div>
              </div>

              {/* Question 4 */}
              <div className="flex flex-col justify-center">
                <button
                  className="text-neutral-800 text-md md:text-xl font-bold font-roboto-slab leading-[30px] bg-white py-6 px-8 w-full lg:w-[519px] flex gap-4 md:gap-16"
                  onClick={() => toggleQuestion(4)}
                >
                  <p>What courses does the Pak Quran Academy offer?</p>
                  {!openQuestion || openQuestion !== 4 ? (
                    <AiFillCaretDown className='h-8' />
                  ) : (
                    <AiFillCaretUp className='h-8' />
                  )}
                </button>
                <div className={openQuestion === 4 ? 'block text-gray-700 text-base font-normal font-roboto-slab leading-relaxed px-4 py-10' : 'hidden'}>
                  The Pak Quran Academy offers various courses on Quranic studies.
                </div>
              </div>

              {/* Question 5 */}
              <div className="flex flex-col justify-center">
                <button
                  className="text-neutral-800 text-md md:text-xl font-bold font-roboto-slab leading-[30px] bg-white py-6 px-8 w-full lg:w-[519px] flex gap-4 md:gap-16"
                  onClick={() => toggleQuestion(5)}
                >
                  <p>What is the duration of each class with the Online Quran Teacher?</p>
                  {!openQuestion || openQuestion !== 5 ? (
                    <AiFillCaretDown className='h-8' />
                  ) : (
                    <AiFillCaretUp className='h-8' />
                  )}
                </button>
                <div className={openQuestion === 5 ? 'block text-gray-700 text-base font-normal font-roboto-slab leading-relaxed px-4 py-10' : 'hidden'}>
                  The duration of each class varies based on the course and level of study.
                </div>
              </div>

            </div>
          </div>

          <div className='w-1/2 hidden md:flex'>
            <img src="./images/masjid.png" alt="img" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Ten;
