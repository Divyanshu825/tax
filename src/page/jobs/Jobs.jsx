import React, { useState } from 'react'
import './Jobs.css';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firdb } from '../../firebase';
import { toast } from 'react-toastify';


const Jobs = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address,setAddress] = useState("");
  const [funcaddress,setFunAdd] = useState("");
  const [email, setEmail] = useState("");
  const [secemail, setSecEmail] = useState("");
  const [primarycon, setPrimarycon] = useState("");
  const [secondcon, setSecondcon] = useState("");
  const [currentLocation , setCurrentLocation] = useState("")
  const [prefferedLoc, setPrefferedLoc] = useState("");
  const [file,setFile] = useState();

  const putData = async () => {
    console.log("Hii")
    if (firstname === "" || lastname === "" || email === "" || primarycon === "" || currentLocation === "" || prefferedLoc === "" ) {
      return toast.error("All fields are required")
    }

    try {
      const job = {
        firstname: firstname,
        lastname: lastname,
        address:address,
        funcaddress:funcaddress,
        email: email,
        secemail:secemail,
        primarycon: primarycon,
        secondcon:secondcon,
        currentLocation : currentLocation,
        prefferedLoc: prefferedLoc,
        file: file,
        time: Timestamp.now()
      }
      console.log("Contact", job);
      const jobRef = collection(firdb,"job")

      await addDoc(jobRef, job);
       toast.success("Thanks For Contact Us")
      setFirstname("");
      setLastname("");
      setAddress("");
      setFunAdd("");
      setEmail("");
      setSecEmail("");
      setPrimarycon("");
      setSecondcon("");
      setCurrentLocation("");
      setPrefferedLoc("");
      setFile("");
    } catch (error) {
      console.log(error);
    }
  }


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
                <input

                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="text"
                    name="firstname"
                    placeholder="First Name"
                     value={firstname}
                     onChange={(e) => setFirstname(e.target.value)}
                    required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Last name*
                </label>
                <input

                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="test"
                    name="lastname"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Address*
                </label>
                <input

                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Function Area*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="text"
                  name="funcaddress"
                  placeholder="Function Area"
                  value={funcaddress}
                  onChange={(e) => setFunAdd(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Email Address*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Secondary Email Address*
                </label>
                <input

                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="text"
                  name="secemail"
                  placeholder="Secondry Email"
                  value={secemail}
                  onChange={(e) => setSecEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Primary Contact No.*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                     border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                     leading-tight focus:outline-none" id="grid-first-name"
                     type="number"
                     name="primarycon"
                     placeholder="Primary Number"
                     value={primarycon}
                     onChange={(e) => setPrimarycon(e.target.value)}
                     required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Secondary Contact No.*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                 border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                 leading-tight focus:outline-none" id="grid-first-name"
                 type="number"
                  name="secondcon"
                  placeholder="Second Contact"
                  value={secondcon}
                  onChange={(e) => setSecondcon(e.target.value)}
                  required
                />
              </div>
            </div>


            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Current Location*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name"
                  type="text"
                  name="currentLocation"
                  placeholder="Current Location"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Preferred Location*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name" 
                  type="text"
                  name="prefferedLoc"
                  placeholder="Preffered Location"
                  value={prefferedLoc}
                  onChange={(e) => setPrefferedLoc(e.target.value)}
                  required
                />
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-white" for="grid-first-name">
                  Share Resume*
                </label>
                <input
                  className="appearance-none block w-full bg-transparent
                  border border-gray-200 rounded text-white py-5 px-6 mb-5  text-2xl
                  leading-tight focus:outline-none" id="grid-first-name" 
                  type="file"
                  name="file"
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                  required
                />
              </div>
              <div className="mt-10">
                <button type="submit" onClick={putData} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Jobs
