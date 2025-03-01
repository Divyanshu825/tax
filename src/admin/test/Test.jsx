
// ------------------------------------------------------------------------
// src/components/Test.js
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { firdb } from '../../../firebase';
import { toast } from 'react-toastify';

const Test = () => {
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
        <div>
            <h1>Add Product with Categories</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    value={productName}
                    onChange={handleProductInputChange}
                    required
                />
                <br />
                <br />
                <br />
                <input
                    type="number"
                    name="productPrice"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={handleProductInputChange}
                    required
                />
                <br />
                <br />
                <br />
                <textarea
                    name="productDescription"
                    placeholder="Product Description"
                    value={productDescription}
                    onChange={handleProductInputChange}
                    required
                />
                <br />
                <br />
                <br />
                {categories.map((category, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Category Name"
                            value={category.name}
                            onChange={(e) => handleCategoryInputChange(index, e)}
                            required
                        />
                        <br />
                        <br />
                        <br />
                        <textarea
                            name="description"
                            placeholder="Category Description"
                            value={category.description}
                            onChange={(e) => handleCategoryInputChange(index, e)}
                            required
                        />
                        <br />
                        <br />
                        <br />
                        <button type="button" onClick={() => handleRemoveCategory(index)}>
                            Remove Category
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddCategory}>
                    Add Another Category
                </button>
                <br />
                <br />
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Product with Categories"}
                </button>
                <br />
                <br />
                <br />
            </form>
        </div>
    );
};

export default Test;