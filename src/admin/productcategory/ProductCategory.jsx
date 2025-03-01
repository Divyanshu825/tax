// import React, { useEffect, useRef, useState } from 'react'
// import AOS from 'aos';
// import { ToastContainer, toast } from 'react-toastify';
// import { Timestamp, addDoc, collection } from 'firebase/firestore';
// import 'react-toastify/dist/ReactToastify.css';
// import { firdb } from '../../../firebase';


// const ProductCategory = () => {

//   const [productname, setProductname] = useState("");
//   const [price, setPrice] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 5000,
//       easing: "ease-in-out-cubic",
//     });
//   }, []);

//   const form = useRef();

//   //   const validatePhone = (phone) => {
//   //     const phoneRegex = /^\d{10}$/;
//   //     return phoneRegex.test(phone);
//   // };


//   const putData = async (e) => {
//     e.preventDefault();
//     console.log("Hii")
//     if (productname === "" || price === "" || message === "") {
//       return toast.error("All fields are required")
//     }
//     try {
//       const productcat = {
//         productname: productname,
//         price: price,
//         message: message,
//         time: Timestamp.now()
//       }
//       console.log("Product", productcat);
//       const productcatRef = collection(firdb, "productcat")
//       await addDoc(productcatRef, productcat);
//       toast.success("Thanks For Contact Us")
//       setProductname("");
//       setPrice("");
//       setMessage("");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       <div className='C_container'>
//         <div className="C_head"  >
//           <h1>Product</h1>

//         </div>

//         <div className="Overlay">
//           <div>
//             <div className="Overlay">
//               <section className="bg-transparent">
//                 <div className="container px-6 py-12 mx-auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                   <div className="mb-10 text-center">
//                     <h1 className=" text-4xl font-semibold text-gray-800 md:text-3xl dark:text-white ">Get in touch</h1>
//                     <p className="mt-3 text-white dark:text-white">Our friendly team is always here to chat.</p>
//                   </div>

//                   <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
//                     <div className="flex flex-col items-center justify-center text-center">
//                       <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//                         </svg>
//                       </span>

//                       <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
//                       <p className="mt-2 text-white dark:text-white">Our friendly team is here to help.</p>
//                       <p className="mt-2 text-blue-500 dark:text-blue-400">anmol303@gmail.com</p>
//                     </div>

//                     <div className="flex flex-col items-center justify-center text-center">
//                       <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                         </svg>
//                       </span>

//                       <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Our Shop</h2>
//                       <p className="mt-2 text-white dark:text-white">Come say hello at our Shop </p>
//                       <p className="mt-2 text-blue-500 dark:text-blue-400">Neharu Road, Jhabua ( M.P. )</p>
//                     </div>

//                     <div className="flex flex-col items-center justify-center text-center">
//                       <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-white">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//                         </svg>
//                       </span>

//                       <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
//                       <p className="mt-2 text-white dark:text-white">Mon - Fri from 8 am to 5 pm.</p>
//                       <p className="mt-2 text-blue-500 dark:text-blue-400">+91 - 9754957303</p>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//           <form ref={form} >
//             <div className='c_main'>
//               <div className='C_form'>
//                 <div className="w-full max-w-4xl ">
//                   <h1 className='text-4xl mb-20 font-bold ml-52 text-gray-50'>Send Us Your Questions!</h1>

//                   <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                       <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
//                         Name
//                       </label>
//                       <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                         type="text"
//                         name='productname'
//                         placeholder="Email"
//                         value={productname}
//                         onChange={(e) => setProductname(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                       <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
//                         Price
//                       </label>
//                       <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                         type="text"
//                         name='price'
//                         placeholder="Price"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                       />
//                     </div>
//                   </div>



//                   <div className="flex flex-wrap -mx-3 mb-6 mt-10">
//                     <div className="w-full  px-3 mb-6 md:mb-0">
//                       <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
//                         Message
//                       </label>
//                       <textarea className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" cols={10} rows={8}
//                         type="text"
//                         name='message'
//                         placeholder="Message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                       ></textarea>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap -mx-3 mb-6 justify-center">
//                     <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-10 mr-5">
//                       <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         onClick={putData}  >Submit</button>
//                       {/* onClick={() => toast("Complete!")} */}
//                     </div>
//                     <ToastContainer />
//                   </div>
//                 </div>
//               </div>

//               <div className='Map'>
//                 <div className="relative w-full h-96">
//                   <iframe className="absolute top-0 left-0 w-full h-full"
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
//                     frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
//                   </iframe>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div >
//     </>
//   )
// }

// export default ProductCategory


// // import React, { useState, useEffect, useRef } from 'react';
// // import { collection, addDoc, getDocs, doc, getDoc, Timestamp } from 'firebase/firestore';
// // import { toast } from 'react-toastify';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// // import { firdb } from './firebaseConfig'; // Adjust the import based on your firebase configuration file

// // const AddProduct = () => {
// //   const [productname, setProductname] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [products, setProducts] = useState([]);
// //   const form = useRef();

// //   useEffect(() => {
// //     AOS.init({
// //       offset: 200,
// //       duration: 5000,
// //       easing: "ease-in-out-cubic",
// //     });

// //     fetchProducts();
// //   }, []);

// //   const putData = async (e) => {
// //     e.preventDefault();
// //     if (productname === "" || price === "" || message === "" || category === "") {
// //       return toast.error("All fields are required");
// //     }
// //     try {
// //       const categoryDocRef = await addDoc(collection(firdb, "categories"), {
// //         name: category
// //       });

// //       const product = {
// //         productname: productname,
// //         price: price,
// //         message: message,
// //         categoryRef: categoryDocRef,
// //         time: Timestamp.now()
// //       };
// //       const productRef = collection(firdb, "product");
// //       await addDoc(productRef, product);
// //       toast.success("Product added successfully");
// //       setProductname("");
// //       setPrice("");
// //       setMessage("");
// //       setCategory("");

// //       fetchProducts();
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const fetchProducts = async () => {
// //     try {
// //       const productCollection = collection(firdb, "product");
// //       const productSnapshot = await getDocs(productCollection);
// //       const productList = await Promise.all(productSnapshot.docs.map(async (doc) => {
// //         const productData = doc.data();
// //         const categoryDocRef = productData.categoryRef;
// //         const categoryDoc = await getDoc(categoryDocRef);
// //         const categoryData = categoryDoc.data();
// //         return {
// //           id: doc.id,
// //           ...productData,
// //           category: categoryData ? categoryData.name : "Unknown"
// //         };
// //       }));
// //       setProducts(productList);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <form ref={form} onSubmit={putData}>
// //         <input
// //           type="text"
// //           placeholder="Product Name"
// //           value={productname}
// //           onChange={(e) => setProductname(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Price"
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Message"
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Category"
// //           value={category}
// //           onChange={(e) => setCategory(e.target.value)}
// //         />
// //         <button type="submit">Add Product</button>
// //       </form>

// //       <div>
// //         <h2>Product List</h2>
// //         {products.length > 0 ? (
// //           <ul>
// //             {products.map((product) => (
// //               <li key={product.id}>
// //                 <p>Name: {product.productname}</p>
// //                 <p>Price: {product.price}</p>
// //                 <p>Message: {product.message}</p>
// //                 <p>Category: {product.category}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No products available</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import { ToastContainer, toast } from 'react-toastify';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { firdb } from '../../../firebase';


const ProductCategory = () => {

  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([{ name: "", value: "" }]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 5000,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const form = useRef();

  const handleCategoryChange = (index, event) => {
    const newCategories = [...categories];
    newCategories[index][event.target.name] = event.target.value;
    setCategories(newCategories);
  };

  const addCategoryField = () => {
    setCategories([...categories, { name: "", value: "" }]);
  };

  const removeCategoryField = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  const putData = async (e) => {
    e.preventDefault();
    if (productname === "" || price === "" || message === "" || categories.some(category => category.name === "" || category.value === "")) {
      return toast.error("All fields are required");
    }
    try {
      const productcat = {
        productname: productname,
        price: price,
        message: message,
        categories: categories,
        time: Timestamp.now()
      }
      const productcatRef = collection(firdb, "productcat")
      await addDoc(productcatRef, productcat);
      toast.success("Thanks For Contacting Us");
      setProductname("");
      setPrice("");
      setMessage("");
      setCategories([{ name: "", value: "" }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='C_container'>
        <div className="C_head"  >
          <h1>Product</h1>
        </div>

        <div className="Overlay">
          <div>
            <div className="Overlay">
              <section className="bg-transparent">
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
          <form ref={form} >
            <div className='c_main'>
              <div className='C_form'>
                <div className="w-full max-w-4xl p-8 mx-auto bg-blue rounded-lg shadow dark:bg-gray-800">
                  <h1 className=" text-center text-white font-semibold">Feel Free to Contact Us</h1>

                  <div className="flex gap-4 mt-4">
                    <div className="w-1/2">
                      <label className="block mb-2 text-sm text-white dark:text-gray-200">Product Name</label>
                      <input value={productname} onChange={(e) => setProductname(e.target.value)} type="text" placeholder="Product name" className="block w-full px-4 py-2 text-white bg-transparent border border-white rounded-md dark:bg-gray-800 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-1/2">
                      <label className="block mb-2 text-sm text-white dark:text-gray-200">Price</label>
                      <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="price" className="block w-full px-4 py-2 text-white bg-transparent border border-white rounded-md dark:bg-gray-800 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2 text-sm text-white dark:text-gray-200">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full h-32 px-4 py-2 text-white bg-transparent border border-white rounded-md dark:bg-gray-800 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                  </div>

                  {categories.map((category, index) => (
                    <div className="flex gap-4 mt-4" key={index}>
                      <div className="w-1/2">
                        <label className="block mb-2 text-sm text-white dark:text-gray-200">Category Name</label>
                        <input name="name" value={category.name} onChange={(e) => handleCategoryChange(index, e)} type="text" placeholder="Category name" className="block w-full px-4 py-2 text-white bg-transparent border border-white rounded-md dark:bg-gray-800 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>

                      <div className="w-1/2">
                        <label className="block mb-2 text-sm text-white dark:text-gray-200">Category Value</label>
                        <input name="value" value={category.value} onChange={(e) => handleCategoryChange(index, e)} type="text" placeholder="Category value" className="block w-full px-4 py-2 text-white bg-transparent border border-white rounded-md dark:bg-gray-800 dark:border-white focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>

                      {categories.length > 1 && (
                        <button type="button" onClick={() => removeCategoryField(index)} className="self-end px-4 py-2 text-white bg-red-500 rounded-md">
                          Remove
                        </button>
                      )}
                    </div>
                  ))}

                  <button type="button" onClick={addCategoryField} className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md">
                    Add Category
                  </button>

                  <button onClick={putData} className="mt-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductCategory;
