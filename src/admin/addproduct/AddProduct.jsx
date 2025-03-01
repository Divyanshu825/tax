import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import './AddProduct.css';
import { Stack } from '@mui/material';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [categories, setCategories] = useState([{ name: "", description: "" }]);
  const [loading, setLoading] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [progress, setProgress] = useState(null);
  const [categoryImages, setCategoryImages] = useState(categories.map(() => null));

  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productName') setProductName(value);
    if (name === 'productDescription') setProductDescription(value);
    if (name === 'productPrice') setProductPrice(value);
  };

  const handleCategoryInputChange = (index, event) => {
    const newCategories = categories.slice();
    newCategories[index][event.target.name] = event.target.value;
    setCategories(newCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { name: "", description: "" }]);
  };

  const handleRemoveCategory = (index) => {
    const newCategories = categories.slice();
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const handleProductImageChange = (e) => {
    if (e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleCategoryImageChange = (index, e) => {
    const newCategoryImages = [...categoryImages];
    newCategoryImages[index] = e.target.files[0];
    setCategoryImages(newCategoryImages);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ---------------- image uplaod code
    // ================================================= file
    const handleUploadPic = (imageFile) => {
      return new Promise((resolve, reject) => {
        let ids1 = Math.floor(100000 + Math.random() * 90000).toString();
        let ids2 = new Date();
        let url_path = ids1 + "_" + ids2;
        const storageRef = ref(
          'storage',
          `/Product/${url_path}`
        );

        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (err) => {
            reject(err);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((url) => {
                resolve(url);
                setProgress(0);
              })
              .catch((err) => {
                reject(err);
              });
          }
        );
      });
    };

    try {
      // Upload product image
      let productImageUrl = '';
      if (productImage) {
        productImageUrl = await handleUploadPic(productImage);
      }

      // Upload category images
      const categoryImageUrls = [];
      for (let i = 0; i < categoryImages.length; i++) {
        if (categoryImages[i]) {
          const url = await handleUploadPic(categoryImages[i]);
          categoryImageUrls.push(url);
        } else {
          categoryImageUrls.push('');
        }
      }

      // Prepare categories with images
      const updatedCategories = categories.map((category, index) => ({
        ...category,
        imageUrl: categoryImageUrls[index] || '',
      }));

      // Add product and categories array to Firestore
      await addDoc(collection('firdb', 'products'), {
        name: productName,
        description: productDescription,
        price: productPrice,
        imageUrl: productImageUrl,
        categories: updatedCategories,
        createdAt: new Date(),
      });

      // Reset form
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setCategories([{ name: '', description: '' }]);
      setProductImage(null);
      setCategoryImages(categories.map(() => null));
      setLoading(false);
      toast.success('Product with categories added successfully!');
    } catch (error) {
      console.error('Error adding product and categories: ', error);
      setLoading(false);
    }
  };

  return (
    <div className='Admin_AddProduct_container'>
      <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className="C_head"  >
            <h1>Add Proucts</h1>
            <h2>Admin Pannel / Add Proucts</h2>
          </div>
        </div>
      </div>
      <div className="Overlay">
        <Stack
          sx={{
            backgroundColor: 'whitesmoke',
            padding: 5,
            boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
          }}
        >
          <form onSubmit={handleSubmit}>


            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
                  Product Name
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={productName}
                  onChange={handleProductInputChange}
                  required
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
                  Product Price
                </label>
                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                  type="number"
                  name="productPrice"
                  placeholder="Product Price"
                  value={productPrice}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
            </div>





            <div className="flex flex-wrap -mx-3 mb-6 mt-10">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
                  Product Description
                </label>
                <textarea className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" cols={5} rows={5}
                  name="productDescription"
                  placeholder="Product Description"
                  value={productDescription}
                  onChange={handleProductInputChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-xl font-semibold mb-2 text-black" htmlFor="productImage">
                  Product Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="productImage"
                  type="file"
                  name="productImage"
                  onChange={handleProductImageChange}
                  required
                />
              </div>
            </div>


            {categories.map((category, index) => (
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
                    Category Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                    type="text"
                    name="name"
                    placeholder="Category Name"
                    value={category.name}
                    onChange={(e) => handleCategoryInputChange(index, e)}
                    required
                  />
                </div>



                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
                    Category Message
                  </label>
                  <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                    name="description"
                    placeholder="Category Description"
                    value={category.description}
                    onChange={(e) => handleCategoryInputChange(index, e)}
                    required
                  />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-xl font-semibold mb-2 text-black"
                    htmlFor={`categoryImage-${index}`}>
                    Category Image
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`categoryImage-${index}`}
                    type="file"
                    name="categoryImage"
                    onChange={(e) => handleCategoryImageChange(index, e)}
                  />
                </div>
                <button type="button" onClick={() => handleRemoveCategory(index)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    width: '100px',
                    marginLeft: "45%",
                    marginTop: '30px',
                    borderRadius: '10px'
                  }}>
                  Remove Category
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddCategory} style={{ width: '150px', backgroundColor: '#32de84', color: 'white', borderRadius: '20px' }}>
              Add Another Category
            </button>

            <div className="flex flex-wrap -mx-3 mb-6 justify-center">
              <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-10 mr-5">
                <button type="submit" disabled={loading}
                  style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '10px',
                    padding: 15
                  }}>
                  {loading ? "Adding..." : "Add Product with Categories"}
                </button>
              </div>

              <ToastContainer />
            </div>

          </form>
        </Stack>

      </div>
    </div >
  )
}

export default AddProduct



// import React, { useState } from 'react';
// import { collection, addDoc } from "firebase/firestore";
// import { firdb, storage } from '../../../firebase';
// import { ToastContainer, toast } from 'react-toastify';
// import './AddProduct.css';
// import { Stack } from '@mui/material';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


// const AddProduct = () => {
//   const [productName, setProductName] = useState("");
//   const [productDescription, setProductDescription] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [categories, setCategories] = useState([{ name: "", description: "" }]);
//   const [loading, setLoading] = useState(false);
//   const [productImage, setProductImage] = useState(null);
//   const [categoryImages, setCategoryImages] = useState(categories.map(() => null));

//   const handleProductInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'productName') setProductName(value);
//     if (name === 'productDescription') setProductDescription(value);
//     if (name === 'productPrice') setProductPrice(value);
//   };

//   const handleCategoryInputChange = (index, event) => {
//     const newCategories = categories.slice();
//     newCategories[index][event.target.name] = event.target.value;
//     setCategories(newCategories);
//   };

//   const handleAddCategory = () => {
//     setCategories([...categories, { name: "", description: "" }]);
//   };

//   const handleRemoveCategory = (index) => {
//     const newCategories = categories.slice();
//     newCategories.splice(index, 1);
//     setCategories(newCategories);
//   };

//   const handleProductImageChange = (e) => {
//     if (e.target.files[0]) {
//       setProductImage(e.target.files[0]);
//     }
//   };

//   const handleCategoryImageChange = (index, e) => {
//     const newCategoryImages = [...categoryImages];
//     newCategoryImages[index] = e.target.files[0];
//     setCategoryImages(newCategoryImages);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Upload product image
//       let productImageUrl = '';
//       if (productImage) {
//         const productImageRef = ref(storage, `products/${productImage.name}`);
//         const productImageSnapshot = await uploadBytesResumable(productImageRef, productImage);
//         productImageUrl = await getDownloadURL(productImageSnapshot.ref);
//       }

//       // Upload category images
//       const categoryImageUrls = [];
//       for (let i = 0; i < categoryImages.length; i++) {
//         if (categoryImages[i]) {
//           const categoryImageRef = ref(storage, `categories/${categoryImages[i].name}`);
//           const categoryImageSnapshot = await uploadBytesResumable(categoryImageRef, categoryImages[i]);
//           const categoryImageUrl = await getDownloadURL(categoryImageSnapshot.ref);
//           categoryImageUrls.push(categoryImageUrl);
//         } else {
//           categoryImageUrls.push('');
//         }
//       }

//       // Prepare categories with images
//       const updatedCategories = categories.map((category, index) => ({
//         ...category,
//         imageUrl: categoryImageUrls[index] || '',
//       }));

//       // Add product and categories array to Firestore
//       await addDoc(collection(firdb, 'products'), {
//         name: productName,
//         description: productDescription,
//         price: productPrice,
//         imageUrl: productImageUrl,
//         categories: updatedCategories,
//         createdAt: new Date(),
//       });

//       // Reset form
//       setProductName('');
//       setProductDescription('');
//       setProductPrice('');
//       setCategories([{ name: '', description: '' }]);
//       setProductImage(null);
//       setCategoryImages(categories.map(() => null));
//       setLoading(false);
//       toast.success('Product with categories added successfully!');
//     } catch (error) {
//       console.error('Error adding product and categories: ', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='Admin_AddProduct_container'>
//       <div className="Overlay_Pages">
//         <div className="Overlay_Pages">
//           <div className="C_head"  >
//             <h1>Add Proucts</h1>
//             <h2>Admin Pannel / Add Proucts</h2>
//           </div>
//         </div>
//       </div>
//       <div className="Overlay">
//         <Stack
//           sx={{
//             backgroundColor: 'whitesmoke',
//             padding: 5,
//             boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
//           }}
//         >
//           <form onSubmit={handleSubmit}>


//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
//                   Product Name
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                   type="text"
//                   name="productName"
//                   placeholder="Product Name"
//                   value={productName}
//                   onChange={handleProductInputChange}
//                   required
//                 />
//               </div>

//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
//                   Product Price
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                   type="number"
//                   name="productPrice"
//                   placeholder="Product Price"
//                   value={productPrice}
//                   onChange={handleProductInputChange}
//                   required
//                 />
//               </div>
//             </div>





//             <div className="flex flex-wrap -mx-3 mb-6 mt-10">
//               <div className="w-full  px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
//                   Product Description
//                 </label>
//                 <textarea className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" cols={5} rows={5}
//                   name="productDescription"
//                   placeholder="Product Description"
//                   value={productDescription}
//                   onChange={handleProductInputChange}
//                   required
//                 ></textarea>
//               </div>
//             </div>

//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide text-xl font-semibold mb-2 text-black" htmlFor="productImage">
//                   Product Image
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                   id="productImage"
//                   type="file"
//                   name="productImage"
//                   onChange={handleProductImageChange}
//                   required
//                 />
//               </div>
//             </div>


//             {categories.map((category, index) => (
//               <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                   <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
//                     Category Name
//                   </label>
//                   <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                     type="text"
//                     name="name"
//                     placeholder="Category Name"
//                     value={category.name}
//                     onChange={(e) => handleCategoryInputChange(index, e)}
//                     required
//                   />
//                 </div>



//                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                   <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-black" for="grid-first-name">
//                     Category Message
//                   </label>
//                   <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
//                     name="description"
//                     placeholder="Category Description"
//                     value={category.description}
//                     onChange={(e) => handleCategoryInputChange(index, e)}
//                     required
//                   />
//                 </div>
//                 <div className="w-full px-3 mb-6 md:mb-0">
//                   <label className="block uppercase tracking-wide text-xl font-semibold mb-2 text-black"
//                     htmlFor={`categoryImage-${index}`}>
//                     Category Image
//                   </label>
//                   <input
//                     className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                     id={`categoryImage-${index}`}
//                     type="file"
//                     name="categoryImage"
//                     onChange={(e) => handleCategoryImageChange(index, e)}
//                   />
//                 </div>
//                 <button type="button" onClick={() => handleRemoveCategory(index)}
//                   style={{
//                     backgroundColor: 'red',
//                     color: 'white',
//                     width: '100px',
//                     marginLeft: "45%",
//                     marginTop: '30px',
//                     borderRadius: '10px'
//                   }}>
//                   Remove Category
//                 </button>
//               </div>
//             ))}
//             <button type="button" onClick={handleAddCategory} style={{ width: '150px', backgroundColor: '#32de84', color: 'white', borderRadius: '20px' }}>
//               Add Another Category
//             </button>

//             <div className="flex flex-wrap -mx-3 mb-6 justify-center">
//               <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-10 mr-5">
//                 <button type="submit" disabled={loading}
//                   style={{
//                     backgroundColor: 'blue',
//                     color: 'white',
//                     fontWeight: 600,
//                     borderRadius: '10px',
//                     padding: 15
//                   }}>
//                   {loading ? "Adding..." : "Add Product with Categories"}
//                 </button>
//               </div>

//               <ToastContainer />
//             </div>

//           </form>
//         </Stack>

//       </div>
//     </div >
//   )
// }

// export default AddProduct