

import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { firdb } from '../../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import './UpdateProduct.css'
const UpdateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductproductPrice] = useState("");
  const [categories, setCategories] = useState([{ name: "", description: "" }]);
  const [loading, setLoading] = useState(false);

  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productName') setProductName(value);
    if (name === 'productDescription') setProductDescription(value);
    if (name === 'productPrice') setProductproductPrice(value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add product and categories array to Firestore
      await addDoc(collection(firdb, "product"), {
        name: productName,
        description: productDescription,
        productPrice: productPrice,
        categories,
        createdAt: new Date()
      });

      // Reset form
      setProductName("");
      setProductDescription("");
      setProductproductPrice("")
      setCategories([{ name: "", description: "" }]);
      setLoading(false);
      toast.success("Product with categories added successfully!");
    } catch (error) {
      console.error("Error adding product and categories: ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='C_container'>
        <div className="Overlay_Pages">
          <div className="Overlay_Pages">
            <div className="Product_head">
              <h1>All Products</h1>
              <h2>Admin-Pennal / All Products</h2>
            </div>
          </div>
        </div>  
        <div className="Overlay">
          <form onSubmit={handleSubmit}>
            <div className='c_main'>
              <div className='C_form'>
                <div className="w-full max-w-4xl ">
                  <h1 className='text-4xl mb-20 font-bold ml-52 text-gray-50'>Send Us Your Questions!</h1>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
                        Name
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
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
                        Price
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
                      <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
                        Message
                      </label>
                      <textarea className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" cols={10} rows={8}
                        name="productDescription"
                        placeholder="Product Description"
                        value={productDescription}
                        onChange={handleProductInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>




                  {categories.map((category, index) => (
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
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
                        <label className="block uppercase tracking-wide  text-xl font-semibold mb-2 text-gray-50" for="grid-first-name">
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
                      <button type="button" onClick={() => handleRemoveCategory(index)} style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'red', color: 'white', width: '100px', borderRadius: '30px' }}>
                        Remove Category
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddCategory} style={{ width: '150px', backgroundColor: '#32de84', color: 'white', borderRadius: '20px' }}>
                    Add Another Category
                  </button>

                  <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 mt-10 mr-5">
                      <button type="submit" disabled={loading} style={{ backgroundColor: 'blue', color: 'white', fontWeight: 600, borderRadius: '30px' }}>
                        {loading ? "Adding..." : "Add Product with Categories"}
                      </button>
                      {/* onClick={() => toast("Complete!")} */}
                    </div>

                    <ToastContainer />
                  </div>
                </div>
              </div>


            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default UpdateProduct