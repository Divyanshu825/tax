import React from 'react'
import './Jobs.css';
import { Grid, Stack, TextField, Typography } from '@mui/material';


const Jobs = () => {
  return (
    <div className="Jobs_Container">
      <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className="Jobs_head"  >
            <h1>Job Seekers</h1>
            <h2>Home / Job Seekers</h2>
          </div>
        </div>
      </div>
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
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  First name*
                </label>
                <input className="appearance-none block w-full bg-transparent  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name"
                  type="text"
                  name="productName"
                  placeholder="Product Name"

                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Last name*
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"

                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Address*
                </label>
                <input className="appearance-none block w-full bg-transparent  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name"
                  type="text"
                  name="productName"
                  placeholder="Product Name"

                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Function Area*
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"

                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Email Address*
                </label>
                <input className="appearance-none block w-full bg-transparent  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name"
                  type="text"
                  name="productName"
                  placeholder="Product Name"

                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Secondary Email Address*
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"

                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Primary Contact No.*
                </label>
                <input className="appearance-none block w-full bg-transparent  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name"
                  type="text"
                  name="productName"
                  placeholder="Product Name"

                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Secondary Contact No.*
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"

                  required
                />
              </div>
            </div>


            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Current Location*
                </label>
                <input className="appearance-none block w-full bg-transparent  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name"
                  type="text"
                  name="productName"
                  placeholder="Product Name"

                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Preferred Location*
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"

                  required
                />
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Jobs
