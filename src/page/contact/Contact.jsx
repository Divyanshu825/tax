import React from 'react'
import ContactAnimation from '../../component/Animation/ContactAnimation'
import './Contact.css';
import { Stack } from '@mui/material';


const Contact = () => {
  return (
    <div className='Contact_Container'>

      <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className="Contact_head"  >
            <h1>Contact Page</h1>
            <h2>Home / Contact Page</h2>
          </div>
        </div>
      </div>

      <div className="Overlay" >
        <div className="Overlay_Pages">
          <section className="bg-transparent" style={{ marginTop: '30px' }}>
            <div className="container px-6 py-12 mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="mb-10 text-center">
                <h1 className=" text-4xl font-semibold text-gray-800 md:text-3xl dark:text-white ">Get in touch</h1>
                <p className="mt-3 text-white dark:text-white">Our friendly team is always here to chat.</p>
              </div>

              <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                  <p className="mt-2 text-white dark:text-white">Our friendly team is here to help.</p>
                  <p className="mt-2 text-blue-500 dark:text-blue-400">anmol303@gmail.com</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Our Shop</h2>
                  <p className="mt-2 text-white dark:text-white">Come say hello at our Shop </p>
                  <p className="mt-2 text-blue-500 dark:text-blue-400">Neharu Road, Jhabua ( M.P. )</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>

                  <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
                  <p className="mt-2 text-white dark:text-white">Mon - Fri from 8 am to 5 pm.</p>
                  <p className="mt-2 text-blue-500 dark:text-blue-400">+91 - 9754957303</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <div className="Overlay_Pages"> */}
      <div className="Overlay">
        <div className="Overlay">
          <Stack
            sx={{
              // backgroundColor: 'whitesmoke',
              padding: 5,
              // boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <ContactAnimation />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                <div>
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                    First name*
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                    type="text"
                    name="productName"
                    placeholder="Product Name"

                    required
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                    Last name*
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                    type="number"
                    name="productPrice"
                    placeholder="Product Price"

                    required
                  />
                </div>


                <div>
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                    Email*
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                    type="number"
                    name="productPrice"
                    placeholder="Product Price"

                    required
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                    Mobile Number*
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent
                 border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                 leading-tight focus:outline-none" id="grid-first-name"
                    type="number"
                    name="productPrice"
                    placeholder="Product Price"

                    required
                  />
                </div>


                <div>

                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                    City*
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent
                 border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                 leading-tight focus:outline-none" id="grid-first-name"
                    type="number"
                    name="productPrice"
                    placeholder="Product Price"

                    required
                  />
                </div>


                <div>
                  <label className="block font-semibold leading-6 text-xl text-white mb-2">
                    State
                  </label>
                  <div className="relative">
                    <select className="appearance-none block w-full bg-transparent
                 border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                 leading-tight focus:outline-none" id="grid-state"
                      // value={state}
                      name='user_state'
                    // onChange={(e) => setState(e.target.value)}
                    >
                      <option className='text-black' value="" disabled>Select a state</option>
                      <option className='text-black' value="Madhya Pradesh">Madhya Pradesh</option>
                      <option className='text-black' value="Uttar Pradesh">Uttar Pradesh</option>
                      <option className='text-black' value="Gujrat">Gujarat</option>
                      <option className='text-black' value="Rajasthan">Rajasthan</option>
                      <option className='text-black' value="Maharashtra">Maharashtra</option>
                      <option className='text-black' value="Jharkhand">Jharkhand</option>
                      <option className='text-black' value="Himachal Pradesh">Himachal Pradesh</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>


                <div>
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                    Message*
                  </label>

                  <textarea
                    className="appearance-none block w-full bg-transparent
                    border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                    leading-tight focus:outline-none" id="grid-first-name"
                    type="text"
                    name="productPrice"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

              </div>
            </div>
          </Stack>
        </div>
        {/* </div> */}
      </div >
    </div >
  )
}

export default Contact