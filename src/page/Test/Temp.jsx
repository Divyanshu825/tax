{/* <div className="Overlay">
<div className="Overlay">
  <Stack
    sx={{
      backgroundColor: 'whitesmoke',
      padding: 5,
      boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
    }}
  >
    <form ref={form} onSubmit={sendEmail} >

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
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
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
              type="test"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              name="mobileno"
              placeholder="Mobile Number"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
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
              type="test"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>


          <div>
            <label className="block font-semibold leading-6 text-xl text-white mb-2">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full py-2.5 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                value={state}
                name='state'
                onChange={(e) => setState(e.target.value)}
              >
                <option value="" disabled>Select a state</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Gujrat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
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
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="mt-10">
            <button type="submit" onClick={putData} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
          </div>
        </div>
      </div>
    </form>
  </Stack>
</div>
</div > */}